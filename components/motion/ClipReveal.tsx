"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { clipHidden, clipShown, clipTransition } from "@/lib/motion";
import { cn } from "@/lib/utils";

/** Clip-path wipe left→right; inner content scales 1.15→1 over the same time. */
export function ClipReveal({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();

  if (reduced) {
    return (
      <motion.div
        className={cn("overflow-hidden", className)}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={cn("overflow-hidden", className)}
      initial={{ clipPath: clipHidden }}
      whileInView={{ clipPath: clipShown }}
      viewport={{ once: true, margin: "-100px" }}
      transition={clipTransition}
    >
      <motion.div
        className="h-full w-full"
        initial={{ scale: 1.15 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={clipTransition}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
