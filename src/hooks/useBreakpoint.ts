"use client";

import { useState, useEffect } from "react";

const breakpoints: { [key: string]: number } = {
  xs: 475,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  txl: 1536,
};

const useBreakpoint = () => {
  const [activeBreakpoint, setActiveBreakpoint] = useState("xs");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        const width = window.innerWidth;
        let currentBreakpoint = "xs";

        if (width >= breakpoints["2xl"]) {
          currentBreakpoint = "2xl";
        } else if (width >= breakpoints.xl) {
          currentBreakpoint = "xl";
        } else if (width >= breakpoints.lg) {
          currentBreakpoint = "lg";
        } else if (width >= breakpoints.md) {
          currentBreakpoint = "md";
        } else if (width >= breakpoints.sm) {
          currentBreakpoint = "sm";
        }

        setActiveBreakpoint(currentBreakpoint);
      };
      handleResize();

      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return activeBreakpoint;
};

export default useBreakpoint;
