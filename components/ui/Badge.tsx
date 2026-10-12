import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Badge({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-parchment/20 px-3 py-1 text-eyebrow uppercase text-parchment/80",
        className,
      )}
    >
      {children}
    </span>
  );
}
