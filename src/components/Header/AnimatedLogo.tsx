"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import useBreakpoint from "@/hooks/useBreakpoint";
import {
  DesktopLogoVariants,
  LaptopLogoVariants,
  LargeLaptopLogoVariants,
  MobileLogoVariants,
  TabletLogoVariants,
} from "@/constants/LogoAnimationVariants";

export default function AnimatedLogo({ scrolled }: { scrolled: boolean }) {
  const currentBreakpoint = useBreakpoint();

  return (
    <motion.div
      className="fixed z-50"
      variants={
        currentBreakpoint === "xs"
          ? MobileLogoVariants
          : currentBreakpoint === "sm"
          ? MobileLogoVariants
          : currentBreakpoint === "md"
          ? TabletLogoVariants
          : currentBreakpoint === "lg"
          ? LaptopLogoVariants
          : currentBreakpoint === "xl"
          ? LargeLaptopLogoVariants
          : currentBreakpoint === "txl"
          ? DesktopLogoVariants
          : DesktopLogoVariants
      }
      initial="top"
      animate={scrolled ? "scrolled" : "top"}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.8,
      }}
    >
      <Image
        src="logo.svg"
        alt="Suffolk Tech Help Logo"
        width={256}
        height={256}
        priority
        quality={100}
      />
    </motion.div>
  );
}
