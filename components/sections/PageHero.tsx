import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { NoiseOverlay } from "@/components/ui/NoiseOverlay";
import { TextReveal } from "@/components/motion/TextReveal";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";

/** Header block for inner pages. `titleLines` are masked-revealed on load. */
export function PageHero({
  eyebrow,
  titleLines,
  intro,
}: {
  eyebrow: string;
  titleLines: ReactNode[];
  intro?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink pb-16 pt-40 md:pb-24 md:pt-48">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(80%_80%_at_80%_0%,#1e000d_0%,#140009_70%)]"
      />
      <NoiseOverlay />
      <Container className="relative">
        <Eyebrow>{eyebrow}</Eyebrow>
        <TextReveal
          as="h1"
          immediate
          className="mt-6 max-w-4xl text-display-l text-parchment"
          lines={titleLines}
        />
        {intro && (
          <RevealOnScroll delay={0.3} className="mt-8 max-w-2xl">
            <p className="text-body-l text-parchment/70">{intro}</p>
          </RevealOnScroll>
        )}
      </Container>
    </section>
  );
}
