import { cn } from "@/lib/utils";
import { NoiseOverlay } from "./NoiseOverlay";

type Variant = "wine" | "ink" | "magenta";

const gradients: Record<Variant, string> = {
  wine: "bg-[radial-gradient(120%_90%_at_20%_10%,#4d0020_0%,#2e0014_45%,#140009_100%)]",
  ink: "bg-[radial-gradient(110%_90%_at_80%_0%,#2e0014_0%,#1e000d_50%,#140009_100%)]",
  magenta:
    "bg-[radial-gradient(100%_80%_at_70%_20%,#4d0020_0%,#2e0014_55%,#140009_100%)]",
};

/**
 * Photo stand-in: wine/ink gradient + grain + an oversized serif glyph.
 * Swap for a real <Image> later; the wrapper (ClipReveal / ParallaxImage)
 * does not care what its child is.
 */
export function ArtBlock({
  glyph = "§",
  variant = "wine",
  label,
  className,
}: {
  glyph?: string;
  variant?: Variant;
  label?: string;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={label ?? "Decorative illustration"}
      className={cn(
        "relative flex h-full w-full items-center justify-center overflow-hidden",
        gradients[variant],
        className,
      )}
    >
      <span
        aria-hidden
        className="select-none font-light italic leading-none text-magenta/80"
        style={{ fontSize: "clamp(8rem, 24vw, 20rem)" }}
      >
        {glyph}
      </span>
      <NoiseOverlay className="opacity-[0.08]" />
    </div>
  );
}
