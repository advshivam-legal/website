import { Marquee } from "@/components/ui/Marquee";
import { marqueeItems } from "@/content/stats";

export function TrustMarquee() {
  return (
    <section
      aria-label="Areas of practice"
      className="border-y border-parchment/10 bg-ink py-6"
    >
      <Marquee
        items={marqueeItems}
        className="text-subhead font-light text-parchment/50"
      />
    </section>
  );
}
