"use client";

import { motion, useReducedMotion } from "framer-motion";
import { createElement, type ReactNode } from "react";
import { duration, easeOut, viewportOnce } from "@/lib/motion";

type Tag = "h1" | "h2" | "h3" | "p" | "span";

/**
 * Masked line-by-line reveal. Pass `lines` (each may contain inline JSX).
 * Each line sits in an overflow-hidden wrapper and rises from y:100%.
 * `immediate` animates on mount (hero) instead of on scroll.
 */
export function TextReveal({
  lines,
  as = "h2",
  className,
  lineClassName,
  immediate = false,
  stagger = 0.12,
  delay = 0,
}: {
  lines: ReactNode[];
  as?: Tag;
  className?: string;
  lineClassName?: string;
  immediate?: boolean;
  stagger?: number;
  delay?: number;
}) {
  const reduced = useReducedMotion();

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
  };
  const line = {
    hidden: reduced ? { opacity: 0 } : { y: "110%" },
    visible: {
      opacity: 1,
      y: "0%",
      transition: { duration: duration.slow, ease: easeOut },
    },
  };

  const trigger = immediate
    ? { initial: "hidden", animate: "visible" }
    : { initial: "hidden", whileInView: "visible", viewport: viewportOnce };

  return createElement(
    motion[as],
    { className, variants: container, ...trigger },
    lines.map((content, i) => (
      <span key={i} className="block overflow-hidden pb-[0.12em] -mb-[0.12em]">
        <motion.span variants={line} className={`block ${lineClassName ?? ""}`}>
          {content}
        </motion.span>
      </span>
    )),
  );
}
