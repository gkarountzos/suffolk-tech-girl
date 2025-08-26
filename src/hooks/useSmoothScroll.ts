"use client";

import { useLenis } from "lenis/react";

export const useSmoothScroll = () => {
  const lenis = useLenis();

  const scrollTo = (targetId: string) => {
    if (lenis) {
      lenis.scrollTo(targetId, {
        duration: 1.2,
      });
    }
  };

  return { scrollTo };
};
