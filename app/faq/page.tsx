import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { FaqList } from "@/components/sections/FaqList";
import { CTABand } from "@/components/sections/CTABand";
import { Container } from "@/components/ui/Container";
import { Em } from "@/components/ui/Heading";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { getFaqCategories, getFaqs } from "@/lib/content";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about cheque-bounce cases, recovery, consumer complaints, fees and how to work with Shivam Singh, Advocate.",
};

export default function FaqPage() {
  const faqs = getFaqs();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHero
        eyebrow="FAQ"
        titleLines={["Questions,", <><Em>answered.</Em></>]}
        intro="The things people ask before they get in touch. If yours isn't here, just ask."
      />
      <section className="bg-ink pb-24 md:pb-32">
        <Container>
          <RevealOnScroll className="max-w-4xl">
            <FaqList items={faqs} categories={getFaqCategories()} />
          </RevealOnScroll>
        </Container>
      </section>
      <CTABand />
    </>
  );
}
