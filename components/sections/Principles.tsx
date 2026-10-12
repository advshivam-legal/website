"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { principles } from "@/content/principles";
import { easeOut } from "@/lib/motion";
import { cn } from "@/lib/utils";

/**
 * Replaces the template's testimonials carousel: Bar Council norms discourage
 * client testimonials, so this carries the advocate's own practice principles.
 */
export function Principles() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % principles.length), 6000);
    return () => clearInterval(t);
  }, [paused]);

  const current = principles[index];

  return (
    <Section aria-labelledby="principles-title">
      <Container>
        <RevealOnScroll>
          <div
            role="group"
            aria-roledescription="carousel"
            aria-label="Practice principles"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
            className="mx-auto max-w-4xl text-center"
          >
            <Eyebrow>
              <span id="principles-title">How I work</span>
            </Eyebrow>

            <div className="relative mt-10 min-h-[18rem] sm:min-h-[16rem]" aria-live={paused ? "polite" : "off"}>
              <AnimatePresence mode="wait">
                <motion.figure
                  key={current.id}
                  initial={reduced ? { opacity: 0 } : { opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={reduced ? { opacity: 0 } : { opacity: 0, x: -40 }}
                  transition={{ duration: 0.6, ease: easeOut }}
                >
                  <blockquote className="text-display-m font-light italic text-balance">
                    “{current.quote}”
                  </blockquote>
                  <figcaption className="mt-8">
                    <span className="block text-caption uppercase text-magenta">
                      {current.label}
                    </span>
                    <span className="mt-2 block text-parchment/60">
                      {current.detail}
                    </span>
                  </figcaption>
                </motion.figure>
              </AnimatePresence>
            </div>

            <div className="mt-10 flex justify-center gap-3" role="tablist" aria-label="Choose principle">
              {principles.map((p, i) => (
                <button
                  key={p.id}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Show principle ${i + 1}: ${p.label}`}
                  onClick={() => setIndex(i)}
                  className="grid h-6 w-6 place-items-center"
                >
                  <span
                    className={cn(
                      "block h-2 rounded-full transition-all duration-500",
                      i === index ? "w-8 bg-magenta" : "w-2 bg-parchment/25 hover:bg-parchment/50",
                    )}
                  />
                </button>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </Container>
    </Section>
  );
}
