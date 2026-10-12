"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "tertiary";
type Size = "sm" | "md" | "lg";

const sizes: Record<Size, string> = {
  sm: "px-5 py-2 text-sm",
  md: "px-7 py-3 text-base",
  lg: "px-9 py-4 text-lg",
};

const variants: Record<Variant, string> = {
  primary:
    "rounded-full bg-magenta font-normal text-black transition-colors duration-300 hover:bg-magenta-deep",
  secondary:
    "rounded-full border border-parchment/30 font-normal text-parchment transition-colors duration-300 hover:border-parchment hover:bg-parchment/5",
  tertiary: "group/btn gap-2 px-0 py-1 text-magenta",
};

interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  variant?: Variant;
  size?: Size;
  href?: string;
  external?: boolean;
  children: ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  external,
  className,
  children,
  ...rest
}: ButtonProps) {
  const reduced = useReducedMotion();
  const classes = cn(
    "inline-flex items-center justify-center",
    variants[variant],
    variant !== "tertiary" && sizes[size],
    className,
  );

  const inner =
    variant === "tertiary" ? (
      <>
        <span className="link-underline">{children}</span>
        <ArrowRight
          aria-hidden
          className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1"
        />
      </>
    ) : (
      children
    );

  const content = href ? (
    external || /^(https?:|tel:|mailto:)/.test(href) ? (
      <a
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {inner}
      </a>
    ) : (
      <Link href={href} className={classes}>
        {inner}
      </Link>
    )
  ) : (
    <button className={classes} {...rest}>
      {inner}
    </button>
  );

  if (variant === "tertiary" || reduced) return <span className="inline-flex">{content}</span>;

  return (
    <motion.span
      className="inline-flex"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      {content}
    </motion.span>
  );
}
