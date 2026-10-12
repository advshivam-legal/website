import type { Transition, Variants } from "framer-motion";

export const easeOut = [0.22, 1, 0.36, 1] as const;
export const easeInOut = [0.65, 0, 0.35, 1] as const;

export const duration = {
  fast: 0.3,
  base: 0.6,
  slow: 0.9,
  slower: 1.2,
} as const;

export const viewportOnce = { once: true, margin: "-100px" } as const;

export const revealTransition: Transition = {
  duration: 0.7,
  ease: easeOut,
};

/** Default scroll reveal: fade + rise */
export const reveal = (reduced = false): Variants => ({
  hidden: reduced ? { opacity: 0 } : { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: revealTransition,
  },
});

/** Parent that staggers its children (grids, lists) */
export const stagger = (
  staggerChildren = 0.08,
  delayChildren = 0.1,
): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren, delayChildren } },
});

/** Hero entrance */
export const heroContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export const heroEyebrow = (reduced = false): Variants => ({
  hidden: reduced ? { opacity: 0 } : { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.base, ease: easeOut },
  },
});

export const heroLine = (reduced = false): Variants => ({
  hidden: reduced ? { opacity: 0 } : { y: "100%" },
  visible: {
    opacity: 1,
    y: "0%",
    transition: { duration: duration.slow, ease: easeOut },
  },
});

export const heroSubhead = (reduced = false): Variants => ({
  hidden: reduced ? { opacity: 0 } : { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.base, ease: easeOut, delay: 0.4 },
  },
});

export const heroCta = (reduced = false): Variants => ({
  hidden: reduced ? { opacity: 0 } : { opacity: 0, y: 12 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: duration.base,
      ease: easeOut,
      delay: 0.6 + i * 0.1,
    },
  }),
});

/** Clip-path image wipe */
export const clipHidden = "inset(0 100% 0 0)";
export const clipShown = "inset(0 0% 0 0)";
export const clipTransition: Transition = {
  duration: 1.1,
  ease: easeOut,
};

/** Page transition (route level) */
export const pageVariants = (reduced = false): Variants => ({
  initial: reduced ? { opacity: 0 } : { opacity: 0, y: 8 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: easeOut },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.25, ease: easeInOut },
  },
});
