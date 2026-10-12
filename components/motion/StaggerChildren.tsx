"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { reveal, stagger, viewportOnce } from "@/lib/motion";

/** Parent: orchestrates a staggered reveal of its <StaggerItem> children. */
export function StaggerChildren({
  children,
  className,
  staggerChildren = 0.08,
  delayChildren = 0.1,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  staggerChildren?: number;
  delayChildren?: number;
  as?: "div" | "ul" | "ol";
}) {
  const Comp = motion[as];
  return (
    <Comp
      className={className}
      variants={stagger(staggerChildren, delayChildren)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {children}
    </Comp>
  );
}

export function StaggerItem({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "li" | "article";
}) {
  const reduced = useReducedMotion();
  const Comp = motion[as];
  return (
    <Comp className={className} variants={reveal(!!reduced)}>
      {children}
    </Comp>
  );
}
