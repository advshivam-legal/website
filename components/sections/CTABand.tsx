"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { NoiseOverlay } from "@/components/ui/NoiseOverlay";
import { Heading, Em } from "@/components/ui/Heading";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";

export function CTABand() {
  const reduced = useReducedMotion();
  return (
    <section className="bg-ink py-24 md:py-32 lg:py-40">
      <Container>
        <RevealOnScroll>
          <div className="relative overflow-hidden rounded-3xl bg-wine px-8 py-20 text-center md:px-16 md:py-28">
            {/* slow-drifting radial gradient */}
            <motion.div
              aria-hidden
              className="pointer-events-none absolute -inset-1/4 bg-[radial-gradient(40%_40%_at_50%_50%,rgba(255,0,115,0.22)_0%,transparent_70%)]"
              animate={
                reduced
                  ? undefined
                  : { x: ["-12%", "12%", "-12%"], y: ["-6%", "8%", "-6%"] }
              }
              transition={{ duration: 24, ease: "easeInOut", repeat: Infinity }}
            />
            <NoiseOverlay />
            <div className="relative mx-auto max-w-2xl">
              <Heading size="display-l">
                Ready to <Em>talk?</Em>
              </Heading>
              <p className="mt-6 text-body-l text-parchment/80">
                Tell me what has happened. I will tell you where you stand and
                what the options are.
              </p>
              <div className="mt-10">
                <Button href="/book" size="lg">
                  Book a Consult
                </Button>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
