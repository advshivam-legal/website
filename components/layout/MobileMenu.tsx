"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { nav, siteConfig } from "@/lib/site";
import { easeOut } from "@/lib/motion";

export function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="fixed inset-0 z-50 flex flex-col bg-ink/95 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex h-20 items-center justify-between px-6 md:px-8">
            <span className="text-lg font-semibold uppercase tracking-widest">
              {siteConfig.wordmark}
            </span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={onClose}
              className="grid h-11 w-11 place-items-center rounded-full border border-parchment/20 transition-colors hover:border-magenta"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <motion.nav
            aria-label="Mobile"
            className="flex flex-1 flex-col justify-center gap-2 px-6 md:px-8"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
            }}
          >
            {nav.map((item) => (
              <motion.div
                key={item.href}
                variants={{
                  hidden: reduced ? { opacity: 0 } : { opacity: 0, y: 24 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: easeOut },
                  },
                }}
              >
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="block py-2 text-display-m font-light transition-colors hover:text-magenta"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </motion.nav>

          <div className="px-6 pb-10 md:px-8">
            <Button href="/book" size="lg" className="w-full" >
              Book a Consult
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
