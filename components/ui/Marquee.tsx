"use client";

import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

/** Infinite horizontal scroll: content duplicated, translated 0 → -50%. */
export function Marquee({
  items,
  className,
  separator = "·",
}: {
  items: string[];
  className?: string;
  separator?: string;
}) {
  const reduced = useReducedMotion();
  const row = (hidden: boolean) => (
    <ul
      className="flex shrink-0 items-center gap-8 pr-8"
      aria-hidden={hidden || undefined}
    >
      {items.map((item) => (
        <li key={item} className="flex items-center gap-8 whitespace-nowrap">
          <span>{item}</span>
          <span className="text-magenta/70">{separator}</span>
        </li>
      ))}
    </ul>
  );

  return (
    <div
      className={cn(
        "group flex overflow-hidden italic",
        className,
      )}
    >
      <div
        className={cn(
          "flex w-max",
          !reduced && "animate-marquee group-hover:[animation-play-state:paused]",
        )}
      >
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
