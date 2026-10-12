import type { Metadata } from "next";
import { Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { ConsultForm } from "@/components/forms/ConsultForm";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { Em } from "@/components/ui/Heading";
import { siteConfig, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book a Consult",
  description:
    "Book a consultation with Shivam Singh, Advocate. Send your details and a short summary of your matter via WhatsApp, or call directly.",
};

const linkClass = "link-underline pb-0.5 hover:text-magenta";

export default function BookPage() {
  return (
    <>
      <PageHero
        eyebrow="Book a Consult"
        titleLines={["Tell me what", <>has <Em>happened.</Em></>]}
        intro="Share a short summary and I will get back to you to arrange a time to speak, by phone, WhatsApp or in person."
      />
      <section className="bg-ink pb-24 md:pb-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
            <RevealOnScroll>
              <ConsultForm />
            </RevealOnScroll>

            <RevealOnScroll delay={0.1}>
              <aside aria-label="Other ways to reach me" className="space-y-8">
                <h2 className="text-heading">Prefer to talk directly?</h2>
                <ul className="space-y-5 text-parchment/80">
                  <li className="flex gap-4">
                    <Phone className="mt-1 h-5 w-5 shrink-0 text-magenta" aria-hidden />
                    <a href={siteConfig.phoneHref} className={linkClass}>
                      {siteConfig.phone}
                    </a>
                  </li>
                  <li className="flex gap-4">
                    <MessageCircle className="mt-1 h-5 w-5 shrink-0 text-magenta" aria-hidden />
                    <a
                      href={whatsappLink("Hello, I would like to book a consultation.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={linkClass}
                    >
                      WhatsApp
                    </a>
                  </li>
                  <li className="flex gap-4">
                    <Mail className="mt-1 h-5 w-5 shrink-0 text-magenta" aria-hidden />
                    <a href={`mailto:${siteConfig.email}`} className={`${linkClass} break-all`}>
                      {siteConfig.email}
                    </a>
                  </li>
                  <li className="flex gap-4">
                    <Clock className="mt-1 h-5 w-5 shrink-0 text-magenta" aria-hidden />
                    <span>
                      {siteConfig.city} · {siteConfig.hours}
                    </span>
                  </li>
                </ul>

                <div className="rounded-2xl border border-parchment/10 p-6">
                  <h3 className="text-subhead">Helpful to have ready</h3>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-parchment/70">
                    <li>A short timeline of events</li>
                    <li>Agreements, cheques and bank memos</li>
                    <li>Notices, emails and messages</li>
                    <li>Any earlier court orders</li>
                  </ul>
                </div>
              </aside>
            </RevealOnScroll>
          </div>
        </Container>
      </section>
    </>
  );
}
