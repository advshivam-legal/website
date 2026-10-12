import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/layout/PageTransition";
import { DisclaimerBanner } from "@/components/layout/DisclaimerBanner";
import { StickyContact } from "@/components/layout/StickyContact";
import { siteConfig } from "@/lib/site";

// Ancizar Serif (Google Fonts, OFL) self-hosted: it isn't in Next 14's
// next/font/google catalogue, so the variable files live in /public/fonts.
const ancizar = localFont({
  src: [
    {
      path: "../public/fonts/AncizarSerif-Variable.woff2",
      weight: "300 600",
      style: "normal",
    },
    {
      path: "../public/fonts/AncizarSerif-Italic-Variable.woff2",
      weight: "300 600",
      style: "italic",
    },
  ],
  variable: "--font-ancizar",
  display: "swap",
  fallback: ["Georgia", "Times New Roman", "serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name}, Advocate | Litigation & Recovery, Delhi NCR`,
    template: `%s | ${siteConfig.name}, Advocate`,
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    siteName: `${siteConfig.name}, Advocate`,
    title: `${siteConfig.name}, Advocate`,
    description: siteConfig.description,
    locale: "en_IN",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#140009",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN" className={ancizar.variable}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-magenta focus:px-5 focus:py-2 focus:text-black"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <StickyContact />
        <DisclaimerBanner />
      </body>
    </html>
  );
}
