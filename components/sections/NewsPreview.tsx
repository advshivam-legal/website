import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading, Em } from "@/components/ui/Heading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { ArtBlock } from "@/components/ui/ArtBlock";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";
import { getLatestNews } from "@/lib/content";
import { formatDate } from "@/lib/utils";
import type { Article } from "@/content/news";

export function ArticleCard({ article }: { article: Article }) {
  return (
    <Link href={`/news/${article.slug}`} className="group block">
      <div className="aspect-[4/5] overflow-hidden rounded-2xl border border-parchment/10">
        <div className="h-full w-full transition-transform duration-[600ms] ease-out group-hover:scale-105">
          <ArtBlock
            glyph={article.glyph}
            variant="ink"
            label={`Illustration for ${article.title}`}
          />
        </div>
      </div>
      <p className="mt-6 text-eyebrow font-semibold uppercase text-magenta">
        {article.category}
      </p>
      <h3 className="mt-3 text-heading">
        <span className="link-underline">{article.title}</span>
      </h3>
      <p className="mt-3 text-caption uppercase text-parchment/50">
        <time dateTime={article.date}>{formatDate(article.date)}</time>
      </p>
    </Link>
  );
}

export function NewsPreview() {
  const latest = getLatestNews(3);
  return (
    <Section tone="wine-deep" aria-labelledby="news-title">
      <Container>
        <RevealOnScroll className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>News</Eyebrow>
            <Heading id="news-title" className="mt-5">
              From the <Em>Desk</Em>
            </Heading>
          </div>
          <Button href="/news" variant="tertiary">
            All articles
          </Button>
        </RevealOnScroll>

        <StaggerChildren className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {latest.map((a) => (
            <StaggerItem key={a.id}>
              <ArticleCard article={a} />
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </Section>
  );
}
