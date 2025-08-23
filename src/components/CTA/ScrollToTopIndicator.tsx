"use client";

import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";

export function ScrollToTopIndicator({
  isContactInView,
  isMounted,
}: {
  isContactInView: boolean;
  isMounted: boolean;
}) {
  const [hasDelayed, setHasDelayed] = useState(false);

  useEffect(() => {
    if (isMounted && isContactInView && !hasDelayed) {
      const timer = setTimeout(() => {
        setHasDelayed(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isMounted, isContactInView, hasDelayed]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollIndicatorVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      className="absolute bottom-24 right-4 md:bottom-32 md:right-12 z-50"
      variants={scrollIndicatorVariants}
      initial="hidden"
      animate={
        isMounted && isContactInView && hasDelayed ? "visible" : "hidden"
      }
      onClick={scrollToTop}
      style={{ cursor: "pointer" }}
    >
      <div className="flex flex-col items-center space-y-3 text-primary">
        <div className="h-16 md:h-24 w-px bg-primary/30 hidden sm:block" />
        <span
          className="font-sans text-xs sm:text-sm font-bold uppercase tracking-widest"
          style={{ writingMode: "vertical-rl" }}
        >
          Top
        </span>
      </div>
    </motion.div>
  );
}
