import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type Tag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type Size = "display-xl" | "display-l" | "display-m" | "heading" | "subhead";

const sizeClass: Record<Size, string> = {
  "display-xl": "text-display-xl",
  "display-l": "text-display-l",
  "display-m": "text-display-m",
  heading: "text-heading",
  subhead: "text-subhead",
};

interface HeadingProps {
  as?: Tag;
  size?: Size;
  italic?: boolean;
  className?: string;
  children: ReactNode;
  id?: string;
}

export function Heading({
  as: Tag = "h2",
  size = "display-l",
  italic,
  className,
  children,
  id,
}: HeadingProps) {
  return (
    <Tag
      id={id}
      className={cn(sizeClass[size], italic && "italic", "text-balance", className)}
    >
      {children}
    </Tag>
  );
}

/** Italic accent word inside a heading */
export function Em({ children }: { children: ReactNode }) {
  return <em className="italic text-magenta">{children}</em>;
}
