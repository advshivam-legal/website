# Shivam Singh, Advocate: website

Editorial, dark-premium site for Adv. Shivam Singh (litigation & recovery, Delhi NCR), built to the "Clause Law Firm" visual spec: serif type, wine/magenta accents, scroll-triggered motion.

**Stack:** Next.js 14 (App Router) · TypeScript (strict) · Tailwind 3.4 · Framer Motion · React Hook Form + Zod · lucide-react.

## Run

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (what Vercel runs)
npm run lint && npm run typecheck
```

## Deploy (Vercel)

Import the repo, then set `NEXT_PUBLIC_SITE_URL` (e.g. `https://yourdomain.in`) so canonical URLs, sitemap and OpenGraph are correct. No other env vars are needed.

## Structure

```
app/            routes (/, services, about, news, news/[slug], locations, fees, faq, terms, book, 404, sitemap, robots)
components/
  ui/           primitives (Button, Card, Accordion, Input, Marquee, ArtBlock …)
  motion/       RevealOnScroll, StaggerChildren, ParallaxImage, ClipReveal, Counter, TextReveal
  layout/       Header, Footer, MobileMenu, PageTransition, DisclaimerBanner, StickyContact
  sections/     Hero, ServicesGrid, EditorialSplit, StatsBand, Principles, NewsPreview, CTABand …
  forms/        ConsultForm (→ WhatsApp), NewsletterForm (→ mailto)
content/        typed data: services, team, experience, news, locations, faq, fees, principles, stats
lib/            site.ts (brand + contact), motion.ts (variants/easing), content.ts (helpers), utils.ts
```

Design tokens, type scale and motion rules: see [DESIGN.md](./DESIGN.md).

## Things to fill in (search for `TODO(owner)`)

| Item | Where |
|---|---|
| Confirm email (the CV text had no "@"; `advshivamsingh98@gmail.com` is assumed) | `lib/site.ts`, `content/team.ts`, `content/locations.ts` |
| Chamber address + Google Maps embed URL | `lib/site.ts`, `content/locations.ts` |
| Headshot (`/public/images/…`) | `content/team.ts`, `app/about/page.tsx` |
| Production domain | `NEXT_PUBLIC_SITE_URL` |
| **Review the 4 News articles**: they are drafts of general-information explainers. Verify every statute reference and threshold against current law before publishing | `content/news.ts` |

## Deliberate adaptations from the template

- **Solo practice, not a firm.** "Team" is one profile plus a work-history timeline; "Careers" became "Work with me"; "Locations" lists courts/forums plus the chamber.
- **Bar Council of India compliance.** No client testimonials, case results or outcome claims. The template's testimonials carousel is replaced by the advocate's own practice principles (`components/sections/Principles.tsx`). A first-visit disclaimer banner, footer disclaimer and full Terms page are included.
- **Stats** use only CV facts (years at the Bar, forums, practice areas).
- **Forms have no backend.** The consult form validates with Zod and opens a pre-filled WhatsApp message (`wa.me`). Nothing is stored. The footer newsletter field opens a pre-filled email.
- **Font.** Ancizar Serif isn't in Next 14's `next/font/google` catalogue, so the two variable WOFF2 files are self-hosted in `public/fonts` and loaded through `next/font/local` (same preload/no-FOUT behaviour).
- **Page transitions** use `AnimatePresence` with a frozen-router wrapper that relies on a Next.js internal (`LayoutRouterContext`). Next is pinned to `14.2.35`; re-test transitions on upgrade.
- **Imagery** is wine/ink gradient + grain + a serif glyph (`ArtBlock`). Swap in real photos by replacing the child of `ClipReveal` / `ParallaxImage`.
