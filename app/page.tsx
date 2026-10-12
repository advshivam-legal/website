import { Hero } from "@/components/sections/Hero";
import { TrustMarquee } from "@/components/sections/TrustMarquee";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { EditorialSplit } from "@/components/sections/EditorialSplit";
import { StatsBand } from "@/components/sections/StatsBand";
import { Principles } from "@/components/sections/Principles";
import { NewsPreview } from "@/components/sections/NewsPreview";
import { CTABand } from "@/components/sections/CTABand";
import { Em } from "@/components/ui/Heading";
import { siteConfig } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: `${siteConfig.name}, Advocate`,
  description: siteConfig.description,
  url: siteConfig.url,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  areaServed: "Delhi NCR, India",
  address: { "@type": "PostalAddress", addressRegion: "Delhi NCR", addressCountry: "IN" },
  knowsAbout: [
    "Cheque dishonour (Section 138 NI Act)",
    "Money recovery",
    "Consumer disputes",
    "Civil and property disputes",
    "Service law",
    "Environmental law",
    "Insolvency and bankruptcy",
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <TrustMarquee />
      <ServicesGrid />
      <EditorialSplit
        tone="parchment"
        eyebrow="Recovery"
        title={
          <>
            A bounced cheque is a <Em>deadline</Em>, not a dead end.
          </>
        }
        body="Notices, complaints and the waiting periods between them are all time-bound. I keep the dates, draft the paperwork and take the matter through to recovery, whether that means a settlement or a decree and execution."
        linkHref="/news/cheque-bounced-what-to-do"
        linkLabel="Read the 30-day guide"
        glyph="₹"
        imageLabel="Illustration: rupee symbol on a wine-coloured background"
      />
      <EditorialSplit
        reverse
        eyebrow="Approach"
        title={
          <>
            Every hearing, <Em>explained.</Em>
          </>
        }
        body="You should never leave a courtroom, or a call, unsure of what just happened. After each stage I tell you what was decided, what comes next and what it means for you. In plain English."
        linkHref="/about"
        linkLabel="About the practice"
        glyph="§"
        variant="ink"
        imageLabel="Illustration: section symbol on a dark background"
      />
      <StatsBand />
      <Principles />
      <NewsPreview />
      <CTABand />
    </>
  );
}
