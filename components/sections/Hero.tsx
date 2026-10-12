"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { NoiseOverlay } from "@/components/ui/NoiseOverlay";
import { Em } from "@/components/ui/Heading";
import { TextReveal } from "@/components/motion/TextReveal";
import {
  easeOut,
  heroContainer,
  heroCta,
  heroEyebrow,
  heroSubhead,
} from "@/lib/motion";

export function Hero() {
  const reduced = !!useReducedMotion();

  return (
    <section
      aria-labelledby="hero-title"
      className="relative flex min-h-screen items-center overflow-hidden bg-ink pb-24 pt-32 text-parchment"
    >
      {/* Background gradient: scale 1.05 → 1 over 1.4s */}
      <motion.div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(90%_70%_at_75%_30%,#1e000d_0%,#140009_70%)]"
        initial={reduced ? { opacity: 0 } : { scale: 1.05, opacity: 0.6 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: easeOut }}
      />
      <NoiseOverlay className="opacity-[0.035]" />

      <Container className="relative">
        <motion.div
          variants={heroContainer}
          initial="hidden"
          animate="visible"
          className="max-w-5xl"
        >
          <motion.div variants={heroEyebrow(reduced)}>
            <Eyebrow>Advocate — Litigation &amp; Recovery</Eyebrow>
          </motion.div>

          <TextReveal
            as="h1"
            immediate
            delay={0.16}
            className="mt-8 text-display-xl text-parchment"
            lines={["Clear counsel,", <>firmly <Em>argued.</Em></>]}
          />

          <motion.p
            variants={heroSubhead(reduced)}
            className="mt-10 max-w-2xl text-body-l text-parchment/70"
          >
            Cheque-bounce and recovery, consumer and civil disputes, service
            and regulatory matters. Plain-English advice, careful filings, and
            a clear view of where your case stands.
          </motion.p>

          <div className="mt-12 flex flex-wrap items-center gap-4">
            <motion.div variants={heroCta(reduced)} custom={0}>
              <Button href="/book" size="lg">
                Book a Consult
              </Button>
            </motion.div>
            <motion.div variants={heroCta(reduced)} custom={1}>
              <Button href="/services" variant="secondary" size="lg">
                View Services
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
