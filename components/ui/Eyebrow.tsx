import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Eyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "text-eyebrow font-semibold uppercase text-magenta",
        className,
      )}
    >
      {children}
    </p>
  );
}
