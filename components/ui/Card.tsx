"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Card({
  children,
  className,
  interactive = true,
}: {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      whileHover={interactive && !reduced ? { y: -4 } : undefined}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "rounded-2xl border border-parchment/10 bg-wine-deep p-8 transition-[border-color,box-shadow] duration-500",
        interactive &&
          "hover:border-magenta/40 hover:shadow-[0_0_60px_-10px_rgba(255,0,115,0.08)]",
        className,
      )}
    >
      {children}
    </motion.div>
  );
}
