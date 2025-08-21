"use client";

import { useEffect } from "react";
import { motion, useAnimationControls, Variants } from "framer-motion";
import Image from "next/image";
import useBreakpoint from "@/hooks/useBreakpoint";

export default function AnimatedLogo({
  isHeroInView,
}: {
  isHeroInView: boolean;
}) {
  const currentBreakpoint = useBreakpoint();
  const controls = useAnimationControls();

  const DesktopLogoVariants: Variants = {
    initial: {
      opacity: 1,
      scale: 0.8,
      top: "20%",
      left: "50%",
      x: "-50%",
      y: "-50%",
    },
    final: {
      opacity: 1,
      scale: 0.25,
      left: "2.5%",
      top: "2.5rem",
      x: "-50%",
      y: "-50%",
      transition: { duration: 0.1, ease: "linear" },
    },
  };

  const MobileLogoVariants: Variants = {
    initial: {
      opacity: 1,
      scale: 0.75,
      top: "15%",
      left: "50%",
      x: "-50%",
      y: "-50%",
    },
    final: {
      opacity: 1,
      scale: 0.25,
      left: "15%",
      top: "2.5rem",
      x: "-50%",
      y: "-50%",
      transition: { duration: 0.1, ease: "linear" },
    },
  };

  const TabletLogoVariants: Variants = {
    initial: {
      opacity: 1,
      scale: 0.6,
      top: "15%",
      left: "50%",
      x: "-50%",
      y: "-50%",
    },
    final: {
      opacity: 1,
      scale: 0.25,
      left: "5%",
      top: "2.5rem",
      x: "-50%",
      y: "-50%",
      transition: { duration: 0.4, ease: "easeInOut" },
    },
  };

  const LaptopLogoVariants: Variants = {
    initial: {
      opacity: 1,
      scale: 0.7,
      top: "15%",
      left: "50%",
      x: "-50%",
      y: "-50%",
    },
    final: {
      opacity: 1,
      scale: 0.25,
      left: "5.5%",
      top: "2.5rem",
      x: "-50%",
      y: "-50%",
      transition: { duration: 0.4, ease: "easeInOut" },
    },
  };

  const LargeLaptopLogoVariants: Variants = {
    initial: {
      opacity: 1,
      scale: 0.6,
      top: "15%",
      left: "50%",
      x: "-50%",
      y: "-50%",
    },
    final: {
      opacity: 1,
      scale: 0.2,
      left: "3.5%",
      top: "2.5rem",
      x: "-50%",
      y: "-50%",
      transition: { duration: 0.4, ease: "easeInOut" },
    },
  };

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
