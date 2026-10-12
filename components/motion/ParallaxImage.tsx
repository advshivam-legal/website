"use client";

import { useRef, type ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useIsDesktop } from "@/lib/hooks";
import { cn } from "@/lib/utils";

/**
 * Parallax wrapper: translates its child ±8% as it scrolls through the
 * viewport. Disabled below `md` and under prefers-reduced-motion.
 */
export function ParallaxImage({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const desktop = useIsDesktop();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const active = desktop && !reduced;

  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      <motion.div
        style={active ? { y } : undefined}
        className={cn("h-full w-full", active && "scale-[1.18]")}
      >
        {children}
      </motion.div>
    </div>
  );
}
