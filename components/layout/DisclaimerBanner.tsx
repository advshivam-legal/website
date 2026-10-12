"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { disclaimer, disclaimerShort } from "@/lib/site";

const KEY = "ss-disclaimer-ack";

/** First-visit acknowledgement required by Bar Council of India norms. */
export function DisclaimerBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setShow(true);
    } catch {
      setShow(true);
    }
  }, []);

  const accept = () => {
    try {
      localStorage.setItem(KEY, "1");
    } catch {
      /* storage unavailable: banner just won't persist */
    }
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          role="dialog"
          aria-label="Disclaimer"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-3 bottom-[4.25rem] z-[45] rounded-2xl border border-parchment/15 bg-wine-deep/95 p-4 shadow-2xl backdrop-blur-md sm:inset-x-auto sm:right-6 sm:max-w-md sm:p-6 lg:bottom-6"
        >
          <p className="hidden text-eyebrow font-semibold uppercase text-magenta sm:block">
            Disclaimer
          </p>
          <p className="text-xs leading-relaxed text-parchment/80 sm:mt-3 sm:text-sm">
            <span className="sm:hidden">{disclaimerShort}</span>
            <span className="hidden sm:inline">{disclaimer}</span>{" "}
            <Link href="/terms" className="text-magenta underline underline-offset-4">
              Read the terms
            </Link>
            .
          </p>
          <div className="mt-3 sm:mt-5">
            <Button size="sm" onClick={accept}>
              I understand
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
