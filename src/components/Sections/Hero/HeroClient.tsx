"use client";

import { motion, useInView } from "framer-motion";
import { Monitor, SmartphoneIcon, Wifi } from "lucide-react";
import FancyButton from "@/components/ui/FancyButton";
import { FlipWords } from "@/components/ui/flip-words";
import ScrollIndicator from "@/components/CTA/ScrollIndicator";
import { useEffect, useRef, useState } from "react";

type HeroClientProps = {
  content: {
    title: string;
    flipWords: string[];
    subtitleSuffix: string;
    description: string;
    buttonText: string;
    buttonLink: string;
  };
};

export default function HeroClient({ content }: HeroClientProps) {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { amount: 0.5 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section
      ref={heroRef}
      className="h-screen w-full flex items-center justify-center overflow-hidden bg-muted/10"
    >
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            className="font-serif font-black text-5xl md:text-7xl lg:text-8xl pb-2 md:pb-4 lg:pb-6 gradient-text leading-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {content.title}
          </motion.h1>

          <motion.div
            className="text-xl md:text-2xl text-muted-foreground pb-4 font-medium"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <FlipWords
              words={content.flipWords}
              className="text-muted-foreground p-0"
              duration={1500}
            />
            {content.subtitleSuffix}
          </motion.div>

          {/* Use the description from props */}
          <motion.p
            className="text-base md:text-xl text-foreground/80 pb-6 lg:pb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {content.description}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pb-8 lg:pb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <FancyButton href={content.buttonLink}>
              {content.buttonText}
            </FancyButton>
          </motion.div>

          <motion.div
            className="flex justify-center gap-8 pt-12"
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

      <ScrollIndicator isHeroInView={isHeroInView} isMounted={isMounted} />
    </section>
  );
}
