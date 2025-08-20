"use client";

import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";

export function ScrollToTopIndicator({
  isContactInView,
}: {
  isContactInView: boolean;
}) {
  const [hasDelayed, setHasDelayed] = useState(false);

  useEffect(() => {
    if (isContactInView && !hasDelayed) {
      const timer = setTimeout(() => {
        setHasDelayed(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isContactInView, hasDelayed]);

  const scrollToTop = () => {
    const scrollableElement = document.querySelector(".snap-container");
    if (scrollableElement) {
      scrollableElement.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
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
      className="absolute bottom-10 right-10 md:bottom-24 md:right-12 z-50"
      variants={scrollIndicatorVariants}
      initial="hidden"
      animate={isContactInView && hasDelayed ? "visible" : "hidden"}
      onClick={scrollToTop}
      style={{ cursor: "pointer" }}
    >
      <div className="flex flex-col items-center space-y-3 text-primary">
        <div className="h-24 w-px bg-primary/30" />
        <span
          className="font-sans text-xs uppercase tracking-widest"
          style={{ writingMode: "vertical-rl" }}
        >
          Top
        </span>
      </div>
    </motion.div>
  );
}
