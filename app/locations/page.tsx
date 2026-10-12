import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { CTABand } from "@/components/sections/CTABand";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading, Em } from "@/components/ui/Heading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { NoiseOverlay } from "@/components/ui/NoiseOverlay";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";
import { chambers, forums } from "@/content/locations";

export const metadata: Metadata = {
  title: "Locations",
  description:
    "Courts and forums where Shivam Singh, Advocate appears: Supreme Court, Delhi High Court, District Courts, NGT, NCLT, NCLAT, CAT and Consumer Commissions.",
};

export default function LocationsPage() {
  const chamber = chambers[0];
  return (
    <>
      <PageHero
        eyebrow="Locations"
        titleLines={["Where I", <><Em>appear.</Em></>]}
        intro="A litigation practice is wherever your case is heard. Here are the courts and tribunals I appear before, and how to reach me."
      />

      <Section className="!pt-8 md:!pt-8 lg:!pt-8" aria-labelledby="forums-title">
        <Container>
          <RevealOnScroll>
            <Eyebrow>Courts &amp; forums</Eyebrow>
            <Heading id="forums-title" size="display-m" className="mt-5">
              Eight forums, one point of contact
            </Heading>
          </RevealOnScroll>
          <StaggerChildren className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {forums.map((f) => (
              <StaggerItem key={f.id} className="h-full">
                <Card className="h-full p-6" interactive>
                  <Badge>{f.kind}</Badge>
                  <h3 className="mt-5 text-subhead">{f.name}</h3>
                  <p className="mt-2 text-sm text-parchment/60">{f.note}</p>
                </Card>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </Container>
      </Section>

      <Section tone="wine-deep" aria-labelledby="chamber-title">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <RevealOnScroll>
              <Eyebrow>Chamber</Eyebrow>
              <Heading id="chamber-title" size="display-m" className="mt-5">
                {chamber.city}
              </Heading>
              <ul className="mt-10 space-y-5 text-body-l text-parchment/80">
                <li className="flex gap-4">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-magenta" aria-hidden />
                  <span>
                    {chamber.address.length
                      ? chamber.address.join(", ")
                      : "Meetings are by appointment. The meeting location is shared when you book."}
                  </span>
                </li>
                <li className="flex gap-4">
                  <Phone className="mt-1 h-5 w-5 shrink-0 text-magenta" aria-hidden />
                  <a href="tel:+917838780658" className="link-underline pb-0.5 hover:text-magenta">
                    {chamber.phone}
                  </a>
                </li>
                <li className="flex gap-4">
                  <Mail className="mt-1 h-5 w-5 shrink-0 text-magenta" aria-hidden />
                  <a
                    href={`mailto:${chamber.email}`}
                    className="link-underline break-all pb-0.5 hover:text-magenta"
                  >
                    {chamber.email}
                  </a>
                </li>
                <li className="flex gap-4">
                  <Clock className="mt-1 h-5 w-5 shrink-0 text-magenta" aria-hidden />
                  <span>{chamber.hours}</span>
                </li>
              </ul>
            </RevealOnScroll>

            <RevealOnScroll delay={0.1}>
              {chamber.mapEmbedUrl ? (
                <iframe
                  title={`Map of ${chamber.city} chamber`}
                  src={chamber.mapEmbedUrl}
                  loading="lazy"
                  className="aspect-[4/3] w-full rounded-2xl border border-parchment/10"
                />
              ) : (
                <div
                  role="img"
                  aria-label="Map placeholder: Delhi NCR"
                  className="relative grid aspect-[4/3] place-items-center overflow-hidden rounded-2xl border border-parchment/10 bg-[radial-gradient(100%_90%_at_50%_0%,#4d0020_0%,#1e000d_70%)]"
                >
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(236,235,216,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(236,235,216,0.05)_1px,transparent_1px)] bg-[size:48px_48px]" />
                  <NoiseOverlay />
                  <div className="relative text-center">
                    <MapPin className="mx-auto h-8 w-8 text-magenta" aria-hidden />
                    <p className="mt-4 text-heading">{chamber.city}</p>
                    <p className="mt-1 text-sm text-parchment/60">By appointment</p>
                  </div>
                </div>
              )}
            </RevealOnScroll>
          </div>
        </Container>
      </Section>
      <CTABand />
    </>
  );
}
