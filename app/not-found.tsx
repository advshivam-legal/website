import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { NoiseOverlay } from "@/components/ui/NoiseOverlay";
import { Em } from "@/components/ui/Heading";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-ink pb-24 pt-32">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(80%_80%_at_80%_0%,#1e000d_0%,#140009_70%)]"
      />
      <NoiseOverlay />
      <Container className="relative">
        <Eyebrow>Error 404</Eyebrow>
        <h1 className="mt-6 text-display-xl">
          This page is <Em>not on record.</Em>
        </h1>
        <p className="mt-8 max-w-xl text-body-l text-parchment/70">
          The page you are looking for has moved, or never existed. Let us get
          you back on course.
        </p>
        <div className="mt-12 flex flex-wrap gap-4">
          <Button href="/" size="lg">
            Back to home
          </Button>
          <Button href="/book" variant="secondary" size="lg">
            Book a Consult
          </Button>
        </div>
      </Container>
    </section>
  );
}
