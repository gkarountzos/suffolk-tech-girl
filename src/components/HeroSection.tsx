"use client";

import { motion, useInView } from "framer-motion";
import { Monitor, SmartphoneIcon, Wifi } from "lucide-react";
import FancyButton from "@/components/ui/FancyButton";
import { FlipWords } from "@/components/ui/flip-words";
import { words } from "@/constants/words";
import ScrollIndicator from "@/components/ScrollIndicator";
import { useRef } from "react";

export default function HeroSection() {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { amount: 0.5 });
  return (
    <section
      ref={heroRef}
      className="h-screen w-full snap-start flex items-center justify-center overflow-hidden bg-muted/10"
    >
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            className="font-serif font-black text-5xl md:text-7xl lg:text-8xl mb-6 gradient-text leading-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Suffolk Tech Help
          </motion.h1>

          <motion.div
            className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <FlipWords
              words={words}
              className="text-muted-foreground p-0"
              duration={1500}
            />
            Tech Support
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Professional technology solutions delivered with a personal touch.
            We&apos;re your neighborhood experts for all things tech.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <FancyButton href="#contact">Get Help Now</FancyButton>
          </motion.div>

          <motion.div
            className="flex justify-center gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <Monitor className="h-8 w-8 text-primary" />
            </motion.div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 0.5,
              }}
            >
              <SmartphoneIcon className="h-8 w-8 text-primary" />
            </motion.div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 1,
              }}
            >
              <Wifi className="h-8 w-8 text-primary" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <ScrollIndicator isHeroInView={isHeroInView} />
    </section>
  );
}
