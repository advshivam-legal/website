import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading, Em } from "@/components/ui/Heading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";
import { services } from "@/content/services";

export function ServicesGrid() {
  return (
    <Section aria-labelledby="practice-title">
      <Container>
        <RevealOnScroll className="max-w-3xl">
          <Eyebrow>What I handle</Eyebrow>
          <Heading id="practice-title" className="mt-5">
            Practice <Em>Areas</Em>
          </Heading>
          <p className="mt-6 text-body-l text-parchment/70">
            Six areas of litigation, with the day-to-day matters of individuals
            and families first.
          </p>
        </RevealOnScroll>

        <StaggerChildren className="mt-16 grid gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-12">
          {services.map((s) => (
            <StaggerItem key={s.id} className="h-full">
              <Card className="flex h-full flex-col">
                <span className="text-subhead font-light italic text-magenta">
                  {s.number}
                </span>
                <h3 className="mt-6 text-heading">{s.title}</h3>
                <p className="mt-4 flex-1 text-parchment/70">{s.excerpt}</p>
                <div className="mt-8">
                  <Button href={`/services#${s.slug}`} variant="tertiary">
                    Learn more
                  </Button>
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerChildren>

        <RevealOnScroll className="mt-16">
          <Link
            href="/services"
            className="link-underline pb-1 text-parchment/70 hover:text-parchment"
          >
            See all services
          </Link>
        </RevealOnScroll>
      </Container>
    </Section>
  );
}
