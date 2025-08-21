"use client";

import { useState, useRef, type ReactNode } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import AnimatedLogo from "@/components/Header/AnimatedLogo";
import useLenis from "@/hooks/useLenis";

export default function PageWrapper({ children }: { children: ReactNode }) {
  useLenis();
  const [scrolled, setScrolled] = useState(false);
  const mainContainerRef = useRef(null);

  const { scrollY } = useScroll({ target: mainContainerRef });

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
  });

  return (
    <>
      <AnimatedLogo scrolled={scrolled} />

      <main ref={mainContainerRef}>{children}</main>
    </>
  );
}
