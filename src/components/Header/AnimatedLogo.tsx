"use client";

import { useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";
import Image from "next/image";
import useBreakpoint from "@/hooks/useBreakpoint";
import {
  DesktopLogoVariants,
  LaptopLogoVariants,
  LargeLaptopLogoVariants,
  MobileLogoVariants,
  TabletLogoVariants,
} from "@/constants/LogoAnimationVariants";

export default function AnimatedLogo({
  isHeroInView,
}: {
  isHeroInView: boolean;
}) {
  const currentBreakpoint = useBreakpoint();
  const controls = useAnimationControls();

  useEffect(() => {
    if (!isHeroInView) {
      controls.start("final");
    } else {
      controls.start("initial");
    }
  }, [isHeroInView, controls, currentBreakpoint]);

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
      initial="initial"
      animate={controls}
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
