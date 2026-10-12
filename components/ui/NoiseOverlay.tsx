import { cn } from "@/lib/utils";

/** Faint SVG grain, 3–4% opacity. Place inside a `relative` parent. */
export function NoiseOverlay({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 bg-[url('/noise.svg')] opacity-[0.04] mix-blend-overlay",
        className,
      )}
    />
  );
}
