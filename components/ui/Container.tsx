import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-container px-6 md:px-8 lg:px-12",
        className,
      )}
    >
      {children}
    </div>
  );
}
