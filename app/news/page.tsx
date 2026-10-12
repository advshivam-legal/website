import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ArticleCard } from "@/components/sections/NewsPreview";
import { Container } from "@/components/ui/Container";
import { Em } from "@/components/ui/Heading";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";
import { getNews } from "@/lib/content";

export const metadata: Metadata = {
  title: "News",
  description:
    "Plain-English explainers on cheque bounce, consumer complaints, recovery and environmental proceedings. General information from Shivam Singh, Advocate.",
};

export default function NewsPage() {
  const articles = getNews();
  return (
    <>
      <PageHero
        eyebrow="News"
        titleLines={["From the", <><Em>Desk</Em></>]}
        intro="Short explainers on the questions people ask most. General information, not legal advice."
      />
      <section className="bg-ink pb-24 md:pb-32">
        <Container>
          <StaggerChildren className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((a) => (
              <StaggerItem key={a.id}>
                <ArticleCard article={a} />
              </StaggerItem>
            ))}
          </StaggerChildren>
        </Container>
      </section>
    </>
  );
}
