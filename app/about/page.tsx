import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CTABand } from "@/components/sections/CTABand";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading, Em } from "@/components/ui/Heading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ArtBlock } from "@/components/ui/ArtBlock";
import { ClipReveal } from "@/components/motion/ClipReveal";
import { ParallaxImage } from "@/components/motion/ParallaxImage";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";
import { team, skills } from "@/content/team";
import { experience } from "@/content/experience";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Shivam Singh, Advocate: litigation experience across recovery, consumer, civil, administrative, environmental and insolvency matters.",
};

export default function AboutPage() {
  const me = team[0];
  return (
    <>
      <PageHero
        eyebrow="About"
        titleLines={["Practical litigation,", <>patiently <Em>prepared.</Em></>]}
      />

      {/* Profile */}
      <Section className="!pt-8 md:!pt-8 lg:!pt-8">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
            <ClipReveal className="aspect-[4/5] rounded-2xl">
              <ParallaxImage className="h-full w-full">
                {/* TODO(owner): replace with <Image src={me.image} …> once a headshot is available */}
                <ArtBlock
                  glyph="S"
                  label={`Portrait placeholder for ${me.name}`}
                />
              </ParallaxImage>
            </ClipReveal>
            <RevealOnScroll>
              <Eyebrow>{me.role}</Eyebrow>
              <Heading size="display-m" className="mt-5">
                {me.name}
              </Heading>
              <div className="mt-8 space-y-5 text-body-l text-parchment/75">
                {me.bio.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button href="/book">Book a Consult</Button>
                <Button href={`mailto:${me.email}`} variant="secondary">
                  Email
                </Button>
              </div>
            </RevealOnScroll>
          </div>
        </Container>
      </Section>

      {/* Experience timeline */}
      <Section tone="wine-deep" aria-labelledby="experience-title">
        <Container>
          <RevealOnScroll className="max-w-3xl">
            <Eyebrow>Experience</Eyebrow>
            <Heading id="experience-title" className="mt-5">
              Where I have <Em>practised</Em>
            </Heading>
            <p className="mt-6 text-body-l text-parchment/70">
              Trained in busy chambers across the High Court, district courts
              and tribunals. Experience that shapes how I prepare every file.
            </p>
          </RevealOnScroll>

          <ol className="mt-16 border-l border-parchment/15">
            {experience.map((e) => (
              <li key={e.id} className="relative pb-14 pl-8 last:pb-0 md:pl-12">
                <span
                  aria-hidden
                  className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-magenta"
                />
                <RevealOnScroll>
                  <p className="text-caption uppercase text-magenta">{e.period}</p>
                  <h3 className="mt-3 text-heading">
                    {e.role}, {e.organisation}
                  </h3>
                  {e.note && (
                    <p className="mt-2 italic text-parchment/55">{e.note}</p>
                  )}
                  <ul className="mt-5 max-w-3xl list-disc space-y-2 pl-5 text-parchment/75">
                    {e.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                </RevealOnScroll>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      {/* Skills */}
      <Section aria-labelledby="skills-title">
        <Container>
          <RevealOnScroll className="max-w-3xl">
            <Eyebrow>Skills</Eyebrow>
            <Heading id="skills-title" className="mt-5">
              What I <Em>bring</Em>
            </Heading>
          </RevealOnScroll>
          <StaggerChildren
            as="ul"
            className="mt-14 grid gap-x-12 gap-y-4 md:grid-cols-2"
          >
            {skills.map((s) => (
              <StaggerItem
                as="li"
                key={s}
                className="flex gap-4 border-b border-parchment/10 pb-4 text-body-l text-parchment/80"
              >
                <span aria-hidden className="text-magenta">—</span>
                {s}
              </StaggerItem>
            ))}
          </StaggerChildren>
        </Container>
      </Section>

      {/* Work with me (replaces careers) */}
      <Section tone="wine-deep" aria-labelledby="work-title">
        <Container>
          <RevealOnScroll className="max-w-3xl">
            <Eyebrow>Work with me</Eyebrow>
            <Heading id="work-title" className="mt-5">
              Who I <Em>work</Em> with
            </Heading>
          </RevealOnScroll>
          <StaggerChildren className="mt-14 grid gap-6 md:grid-cols-2 md:gap-8">
            <StaggerItem>
              <Card className="h-full">
                <h3 className="text-heading">Individuals &amp; families</h3>
                <p className="mt-4 text-parchment/70">
                  Cheque-bounce, consumer, civil, property and service
                  disputes. Plain advice, a clear plan and steady updates.
                </p>
                <div className="mt-8">
                  <Button href="/book" variant="tertiary">
                    Book a consult
                  </Button>
                </div>
              </Card>
            </StaggerItem>
            <StaggerItem>
              <Card className="h-full">
                <h3 className="text-heading">NBFCs &amp; businesses</h3>
                <p className="mt-4 text-parchment/70">
                  Recovery proceedings, notices, execution and regulatory
                  matters, handled with disciplined filings and regular reports.
                </p>
                <div className="mt-8">
                  <Button href="/fees" variant="tertiary">
                    How retainers work
                  </Button>
                </div>
              </Card>
            </StaggerItem>
          </StaggerChildren>
        </Container>
      </Section>

      <CTABand />
    </>
  );
}
