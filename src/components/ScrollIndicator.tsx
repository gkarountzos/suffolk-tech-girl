"use client";

import { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";

export default function ScrollIndicator({
  isHeroInView,
}: {
  isHeroInView: boolean;
}) {
  const [hasDelayed, setHasDelayed] = useState(false);

  useEffect(() => {
    if (isHeroInView && !hasDelayed) {
      const timer = setTimeout(() => {
        setHasDelayed(true);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [isHeroInView, hasDelayed]);

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
      className="absolute bottom-10 right-10 md:bottom-24 md:right-12 z-50"
      variants={scrollIndicatorVariants}
      initial="hidden"
      animate={isHeroInView && hasDelayed ? "visible" : "hidden"}
    >
      <div className="flex cursor-default flex-col items-center space-y-3 text-primary">
        <span
          className="font-sans text-xs uppercase tracking-widest"
          style={{ writingMode: "vertical-rl" }}
        >
          Scroll
        </span>
        <div className="h-24 w-px bg-primary/30" />
      </div>
    </motion.div>
  );
}
