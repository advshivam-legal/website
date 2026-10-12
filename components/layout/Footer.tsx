import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { services } from "@/content/services";
import { disclaimer, siteConfig, whatsappLink } from "@/lib/site";

const firmLinks = [
  { label: "About", href: "/about" },
  { label: "News", href: "/news" },
  { label: "Locations", href: "/locations" },
  { label: "Fees", href: "/fees" },
  { label: "FAQ", href: "/faq" },
];

const colTitle = "mb-5 text-eyebrow font-semibold uppercase text-magenta";
const linkClass =
  "link-underline pb-0.5 text-parchment/70 transition-colors hover:text-parchment";

export function Footer() {
  return (
    <footer className="border-t border-parchment/10 bg-ink pb-24 pt-20 text-parchment lg:pb-12">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-lg font-semibold uppercase tracking-widest">
              {siteConfig.wordmark}
            </p>
            <p className="mt-1 text-[0.625rem] uppercase tracking-[0.3em] text-parchment/50">
              {siteConfig.descriptor}
            </p>
            <p className="mt-6 max-w-xs text-parchment/70">
              <em>{siteConfig.tagline}</em> Litigation and recovery counsel,
              Delhi NCR.
            </p>
            <div className="mt-8 max-w-xs">
              <p className="mb-3 text-caption uppercase text-parchment/60">
                New articles by email
              </p>
              <NewsletterForm />
            </div>
          </div>

          <nav aria-label="Services">
            <h2 className={colTitle}>Services</h2>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.id}>
                  <Link href={`/services#${s.slug}`} className={linkClass}>
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Firm">
            <h2 className={colTitle}>Practice</h2>
            <ul className="space-y-3">
              {firmLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={linkClass}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className={colTitle}>Contact</h2>
            <address className="space-y-3 not-italic text-parchment/70">
              <p>
                <a href={siteConfig.phoneHref} className={linkClass}>
                  {siteConfig.phone}
                </a>
              </p>
              <p>
                <a
                  href={whatsappLink("Hello, I would like to book a consultation.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  WhatsApp
                </a>
              </p>
              <p>
                <a href={`mailto:${siteConfig.email}`} className={`${linkClass} break-all`}>
                  {siteConfig.email}
                </a>
              </p>
              <p>
                {siteConfig.city} · {siteConfig.hours}
              </p>
            </address>
          </div>
        </div>

        <p className="mt-16 max-w-4xl border-t border-parchment/10 pt-8 text-sm leading-relaxed text-parchment/50">
          {disclaimer}
        </p>

        <div className="mt-8 flex flex-col gap-4 text-sm text-parchment/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}, Advocate. All rights
            reserved.
          </p>
          <ul className="flex gap-6">
            <li>
              <Link href="/terms" className={linkClass}>
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/terms#privacy" className={linkClass}>
                Privacy
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}
