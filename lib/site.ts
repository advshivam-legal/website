/**
 * Single source of truth for brand + contact details.
 * TODO(owner): confirm email, add chamber address, set NEXT_PUBLIC_SITE_URL.
 */
export const siteConfig = {
  name: "Shivam Singh",
  wordmark: "SHIVAM SINGH",
  descriptor: "Advocate",
  tagline: "Clear counsel, firmly argued.",
  description:
    "Shivam Singh, Advocate. Litigation and recovery practice covering cheque-bounce (S.138 NI Act), consumer, civil and property disputes, service matters, and environmental and insolvency proceedings. Delhi NCR.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.example.com",
  phone: "+91 78387 80658",
  phoneHref: "tel:+917838780658",
  whatsappNumber: "917838780658",
  email: "advshivamsingh98@gmail.com", // TODO(owner): confirm, the CV omits the "@"
  city: "Delhi NCR",
  addressLines: [] as string[], // TODO(owner): chamber address
  hours: "By appointment",
  firm: "Justice Craft Attorneys & Consultant LLP",
  enrolledSince: "2023-04-01",
} as const;

export const whatsappLink = (message?: string) =>
  `https://wa.me/${siteConfig.whatsappNumber}${
    message ? `?text=${encodeURIComponent(message)}` : ""
  }`;

export const nav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "News", href: "/news" },
  { label: "Locations", href: "/locations" },
  { label: "Fees", href: "/fees" },
  { label: "FAQ", href: "/faq" },
] as const;

export const disclaimerShort =
  "General information only: not advertising, solicitation or legal advice.";

export const disclaimer =
  "In accordance with the Bar Council of India Rules, this website provides general information only. It is not an advertisement or solicitation, and nothing here is legal advice or creates an advocate–client relationship.";
