"use client";

import { useMemo, useState } from "react";
import { Accordion } from "@/components/ui/Accordion";
import { cn } from "@/lib/utils";
import type { Faq } from "@/content/faq";

export function FaqList({
  items,
  categories,
}: {
  items: Faq[];
  categories: Faq["category"][];
}) {
  const [active, setActive] = useState<"All" | Faq["category"]>("All");
  const visible = useMemo(
    () => (active === "All" ? items : items.filter((f) => f.category === active)),
    [active, items],
  );
  const filters = ["All", ...categories] as const;

  return (
    <div>
      <div role="group" aria-label="Filter questions" className="flex flex-wrap gap-3">
        {filters.map((c) => (
          <button
            key={c}
            type="button"
            aria-pressed={active === c}
            onClick={() => setActive(c)}
            className={cn(
              "rounded-full border px-5 py-2 text-sm transition-colors",
              active === c
                ? "border-magenta bg-magenta text-black"
                : "border-parchment/20 text-parchment/75 hover:border-parchment/60",
            )}
          >
            {c}
          </button>
        ))}
      </div>
      <Accordion key={active} items={visible} className="mt-12" />
    </div>
  );
}
