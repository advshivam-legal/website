import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CTABand } from "@/components/sections/CTABand";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Em } from "@/components/ui/Heading";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Practice areas: cheque-bounce and money recovery, consumer disputes, civil and property matters, service law, environmental and insolvency proceedings.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        titleLines={["Six areas of", <>litigation, <Em>done well.</Em></>]}
        intro="From a single legal notice to a long-running case, here is what I handle, and where."
      />
      <section className="bg-ink pb-24 md:pb-32">
        <Container>
          <ul>
            {services.map((s) => (
              <li
                key={s.id}
                id={s.slug}
                className="scroll-mt-28 border-t border-parchment/10 py-14 md:py-20"
              >
                <RevealOnScroll>
                  <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
                    <div>
                      <div className="flex items-center gap-4 text-magenta">
                        <span className="text-subhead font-light italic">{s.number}</span>
                        <ServiceIcon name={s.icon} className="h-7 w-7" />
                      </div>
                      <h2 className="mt-6 text-display-m">{s.title}</h2>
                    </div>
                    <div>
                      <p className="text-body-l text-parchment/75">{s.description}</p>
                      <h3 className="mt-10 text-eyebrow font-semibold uppercase text-magenta">
                        Typical matters
                      </h3>
                      <ul className="mt-4 grid gap-x-8 gap-y-2 text-parchment/75 sm:grid-cols-2">
                        {s.typicalMatters.map((m) => (
                          <li key={m} className="flex gap-3">
                            <span aria-hidden className="text-magenta">—</span>
                            {m}
                          </li>
                        ))}
                      </ul>
                      <h3 className="mt-10 text-eyebrow font-semibold uppercase text-magenta">
                        Forums
                      </h3>
                      <ul className="mt-4 flex flex-wrap gap-2">
                        {s.forums.map((f) => (
                          <li key={f}>
                            <Badge>{f}</Badge>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-10">
                        <Button href="/book" variant="tertiary">
                          Discuss your matter
                        </Button>
                      </div>
                    </div>
                  </div>
                </RevealOnScroll>
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <CTABand />
    </>
  );
}
