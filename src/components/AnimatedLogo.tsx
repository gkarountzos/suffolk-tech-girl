"use client";

import { useEffect } from "react";
import { motion, useAnimationControls, Variants } from "framer-motion";
import Image from "next/image";

const logoVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 1,
    top: "20%",
    left: "50%",
    x: "-50%",
    y: "-50%",
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
  final: {
    opacity: 1,
    scale: 0.25,
    top: "2.5rem",
    left: "3rem",
    x: "-50%",
    y: "-50%",
    transition: { duration: 1, ease: "easeInOut" },
  },
};

export default function AnimatedLogo() {
  const controls = useAnimationControls();

  useEffect(() => {
    const sequence = async () => {
      await controls.start("visible");
      await new Promise((resolve) => setTimeout(resolve, 3000));
      await controls.start("final");
    };

    sequence();
  }, [controls]);

  return (
    <motion.div
      className="fixed z-50"
      variants={logoVariants}
      initial="initial"
      animate={controls}
    >
      <Image
        src="/Logo_Gemma.webp"
        alt="Suffolk Tech Help Logo"
        width={256}
        height={256}
        priority
      />
    </motion.div>
  );
}
