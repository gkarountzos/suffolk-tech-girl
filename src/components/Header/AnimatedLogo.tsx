"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AnimatedLogo() {
  return (
    <motion.div className="fixed top-2 left-4 z-50">
      <Image
        src="logo.svg"
        alt="Suffolk Tech Help Logo"
        width={64}
        height={64}
        priority
        quality={100}
      />
    </motion.div>
  );
}
