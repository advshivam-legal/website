import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { ArtBlock } from "@/components/ui/ArtBlock";
import { ClipReveal } from "@/components/motion/ClipReveal";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { ArticleCard } from "@/components/sections/NewsPreview";
import { CTABand } from "@/components/sections/CTABand";
import { getArticleBySlug, getNews, getRelatedArticles } from "@/lib/content";
import { siteConfig } from "@/lib/site";
import { formatDate } from "@/lib/utils";
import type { ReactNode } from "react";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getNews().map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const article = getArticleBySlug(params.slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
      publishedTime: article.date,
      authors: [article.author],
    },
  };
}

/** Tiny renderer for the content format: "## " = subheading, "- " = bullet. */
function renderBody(body: string[]): ReactNode[] {
  const out: ReactNode[] = [];
  let bullets: string[] = [];
  const flush = () => {
    if (bullets.length) {
      const items = bullets;
      out.push(
        <ul key={`ul-${out.length}`}>
          {items.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>,
      );
      bullets = [];
    }
  };
  body.forEach((line, i) => {
    if (line.startsWith("- ")) {
      bullets.push(line.slice(2));
      return;
    }
    flush();
    if (line.startsWith("## ")) out.push(<h2 key={i}>{line.slice(3)}</h2>);
    else out.push(<p key={i}>{line}</p>);
  });
  flush();
  return out;
}

export default function ArticlePage({ params }: { params: Params }) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();

  const related = getRelatedArticles(article.slug, 2);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    author: { "@type": "Person", name: article.author },
    publisher: { "@type": "Person", name: siteConfig.name },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article>
        <header className="bg-ink pb-12 pt-40 md:pt-48">
          <Container>
            <Link
              href="/news"
              className="link-underline inline-flex items-center gap-2 pb-0.5 text-sm text-parchment/60 hover:text-parchment"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden /> All articles
            </Link>
            <RevealOnScroll className="mt-10 max-w-4xl">
              <Eyebrow>{article.category}</Eyebrow>
              <h1 className="mt-6 text-display-l text-balance">{article.title}</h1>
              <p className="mt-8 text-caption uppercase text-parchment/50">
                By {article.author} ·{" "}
                <time dateTime={article.date}>{formatDate(article.date)}</time>
              </p>
            </RevealOnScroll>
          </Container>
        </header>

        <section className="bg-ink pb-24 md:pb-32">
          <Container>
            <ClipReveal className="aspect-[16/7] rounded-2xl">
              <ArtBlock
                glyph={article.glyph}
                variant="ink"
                label={`Illustration for ${article.title}`}
              />
            </ClipReveal>
            <RevealOnScroll className="prose-editorial mx-auto mt-16 max-w-2xl">
              {renderBody(article.body)}
            </RevealOnScroll>
            <div className="mx-auto mt-12 max-w-2xl border-t border-parchment/10 pt-8">
              <Button href="/book" variant="tertiary">
                Have a question about your matter?
              </Button>
            </div>
          </Container>
        </section>
      </article>

      <section className="bg-wine-deep py-24 md:py-32" aria-labelledby="related-title">
        <Container>
          <h2 id="related-title" className="text-display-m font-light">
            Keep reading
          </h2>
          <div className="mt-12 grid gap-12 md:grid-cols-2 lg:max-w-4xl">
            {related.map((a) => (
              <ArticleCard key={a.id} article={a} />
            ))}
          </div>
        </Container>
      </section>
      <CTABand />
    </>
  );
}
