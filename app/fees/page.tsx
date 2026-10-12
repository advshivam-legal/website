import type { Metadata } from "next";
import { Check } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { CTABand } from "@/components/sections/CTABand";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading, Em } from "@/components/ui/Heading";
import { Card } from "@/components/ui/Card";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";
import { feeModels, feePrinciples } from "@/content/fees";

export const metadata: Metadata = {
  title: "Fees",
  description:
    "How fees work: consultation, fixed-scope work, appearance-based and retainer arrangements, explained before you commit.",
};

export default function FeesPage() {
  return (
    <>
      <PageHero
        eyebrow="Fees"
        titleLines={["Clear about", <><Em>cost,</Em> up front.</>]}
        intro="Fees depend on the matter, so I explain the structure before you commit. Here are the four ways I work."
      />

      <Section className="!pt-8 md:!pt-8 lg:!pt-8" aria-labelledby="models-title">
        <Container>
          <h2 id="models-title" className="sr-only">
            Engagement models
          </h2>
          <StaggerChildren className="grid gap-6 md:grid-cols-2 md:gap-8">
            {feeModels.map((m, i) => (
              <StaggerItem key={m.id} className="h-full">
                <Card className="flex h-full flex-col">
                  <span className="text-subhead font-light italic text-magenta">
                    0{i + 1}
                  </span>
                  <h3 className="mt-5 text-heading">{m.title}</h3>
                  <p className="mt-4 text-parchment/75">{m.summary}</p>
                  <p className="mt-4 text-sm text-parchment/50">
                    <span className="uppercase tracking-wider">Best for: </span>
                    {m.bestFor}
                  </p>
                  <ul className="mt-6 space-y-3 border-t border-parchment/10 pt-6 text-parchment/80">
                    {m.includes.map((inc) => (
                      <li key={inc} className="flex gap-3">
                        <Check className="mt-1 h-4 w-4 shrink-0 text-magenta" aria-hidden />
                        {inc}
                      </li>
                    ))}
                  </ul>
                </Card>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </Container>
      </Section>

      <Section tone="wine-deep" aria-labelledby="principles-fees-title">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
            <RevealOnScroll>
              <Eyebrow>Principles</Eyebrow>
              <Heading id="principles-fees-title" size="display-m" className="mt-5">
                How I <Em>charge</Em>
              </Heading>
            </RevealOnScroll>
            <StaggerChildren as="ul" className="space-y-6">
              {feePrinciples.map((p) => (
                <StaggerItem
                  as="li"
                  key={p}
                  className="border-b border-parchment/10 pb-6 text-body-l text-parchment/80"
                >
                  {p}
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </Container>
      </Section>
      <CTABand />
    </>
  );
}
