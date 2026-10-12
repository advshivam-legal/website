import { FileWarning, Gavel, Home, Landmark, Leaf, Scale } from "lucide-react";
import type { Service } from "@/content/services";

const icons = { FileWarning, Scale, Home, Landmark, Leaf, Gavel };

export function ServiceIcon({
  name,
  className,
}: {
  name: Service["icon"];
  className?: string;
}) {
  const Icon = icons[name];
  return <Icon aria-hidden className={className} strokeWidth={1.25} />;
}
