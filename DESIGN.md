# Design system

Source of truth: `tailwind.config.ts`, `app/globals.css`, `lib/motion.ts`.

## Colour tokens

| Token | Hex | Use |
|---|---|---|
| `black` | `#000000` | Text on light surfaces |
| `ink` | `#140009` | Main dark background |
| `wine` | `#4d0020` | Primary accent surface (CTA band) |
| `wine-deep` | `#1e000d` | Cards, alternate dark sections |
| `wine-mid` | `#2e0014` | Tertiary dark surface, gradients |
| `parchment` | `#ecebd8` | Light background, text on dark |
| `parchment-80` | `#edecd9cc` | Semi-transparent overlay |
| `magenta` | `#ff0073` | CTAs, links, accents |
| `magenta-deep` | `#eb006a` | Hover/active |

Mirrored as CSS custom properties (`--color-*`) in `globals.css`. Use token classes (`bg-ink`, `text-magenta`), not raw hex, in JSX. Small text on parchment uses `wine` rather than `magenta` for contrast.

## Typography

Ancizar Serif, weights 300/400/600, normal + italic (variable files, self-hosted). Italic carries editorial emphasis (`<Em>` in headings).

| Class | Size | Line height | Tracking | Weight |
|---|---|---|---|---|
| `text-display-xl` | clamp(3.5rem, 8vw, 7rem) | 0.95 | -0.03em | 300 |
| `text-display-l` | clamp(2.5rem, 5vw, 4.5rem) | 1.0 | -0.02em | 300 |
| `text-display-m` | clamp(2rem, 3.5vw, 3rem) | 1.1 | -0.015em | 400 |
| `text-heading` | clamp(1.5rem, 2.5vw, 2rem) | 1.2 | -0.01em | 400 |
| `text-subhead` | 1.25rem | 1.4 | 0 | 400 |
| `text-body-l` | 1.125rem | 1.65 | – | 300 |
| `text-body` | 1rem | 1.65 | – | 300 |
| `text-caption` | 0.875rem | 1.5 | 0.08em (uppercase) | 400 |
| `text-eyebrow` | 0.75rem | 1.4 | 0.15em (uppercase) | 600 |

## Layout

- Container: max 1280px, `px-6 / md:px-8 / lg:px-12`.
- Section padding: `py-24 / md:py-32 / lg:py-40`.
- Radius: buttons `rounded-full`, cards/images `rounded-2xl`, inputs `rounded-xl`, CTA band `rounded-3xl`.
- Depth via 1px borders (`border-parchment/10`), not shadows.

## Motion

Easing `easeOut = [0.22, 1, 0.36, 1]`, `easeInOut = [0.65, 0, 0.35, 1]`. Durations: fast 0.3s · base 0.6s · slow 0.9s · slower 1.2s. Shared variants live in `lib/motion.ts`.

| Pattern | Spec | Component |
|---|---|---|
| Hero entrance | Eyebrow y20→0 (0.6s); headline lines masked, y100%→0 (0.9s, stagger 0.12s); subhead delay 0.4s; CTAs delay 0.6s + 0.1s each; bg scale 1.05→1 (1.4s) | `Hero`, `TextReveal` |
| Scroll reveal | opacity 0→1, y32→0, 0.7s, viewport once, margin -100px; grids stagger 0.08s / delay 0.1s | `RevealOnScroll`, `StaggerChildren` |
| Image reveal | clip-path `inset(0 100% 0 0)`→`inset(0 0% 0 0)` 1.1s; inner scale 1.15→1 | `ClipReveal` |
| Parallax | ±8%, desktop (≥768px) only | `ParallaxImage` |
| Buttons | hover scale 1.02, tap 0.98, 0.2s; tertiary arrow nudges right | `Button` |
| Cards | hover y-4, border → magenta/40, faint magenta glow | `Card` |
| Marquee | translateX 0→-50%, 40s linear, pauses on hover | `Marquee` |
| Counter | 1.5s easeOut count-up on enter | `Counter` |
| Accordion | height auto, 0.4s, chevron 0→180°, one open at a time | `Accordion` |
| Mobile menu | overlay fade, links y24→0 stagger 0.06s | `MobileMenu` |
| Page transition | exit fade 0.25s, enter opacity + y8→0 0.4s, scroll to top after exit | `PageTransition` |
| Reduced motion | `useReducedMotion()`: opacity only, no parallax/clip/marquee/drift | all motion components |

Only `transform` and `opacity` (plus `clip-path` for image wipes) are animated.
