import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type Tone = "ink" | "wine-deep" | "parchment";

const tones: Record<Tone, string> = {
  ink: "bg-ink text-parchment",
  "wine-deep": "bg-wine-deep text-parchment",
  parchment: "bg-parchment text-black",
};

interface SectionProps {
  children: ReactNode;
  tone?: Tone;
  className?: string;
  id?: string;
  "aria-labelledby"?: string;
}

export function Section({
  children,
  tone = "ink",
  className,
  id,
  ...rest
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("py-24 md:py-32 lg:py-40", tones[tone], className)}
      {...rest}
    >
      {children}
    </section>
  );
}
