"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import {
  Clock,
  MapPinIcon,
  TimerIcon,
  Handshake,
  UsersRoundIcon,
} from "lucide-react";

type AboutContentProps = {
  content: {
    title: string;
    titleHighlight: string;
    titleSuffix: string;
    paragraphs: string[];
    card: {
      imageSection: {
        title: string;
        subtitle: string;
      };
      featuresSection: {
        title: string;
        features: string[];
      };
    };
  };
};

export default function AboutClient({ content }: AboutContentProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const features = [
    {
      icon: <MapPinIcon className="inline h-4 w-4 mr-1" />,
      text: content.card.featuresSection.features[0],
    },
    {
      icon: <TimerIcon className="inline h-4 w-4 mr-1" />,
      text: content.card.featuresSection.features[1],
    },
    {
      icon: <Handshake className="inline h-4 w-4 mr-1" />,
      text: content.card.featuresSection.features[2],
    },
    {
      icon: <Clock className="inline h-4 w-4 mr-1" />,
      text: content.card.featuresSection.features[3],
    },
  ];

  return (
    <section
      ref={ref}
      className="h-screen w-full flex items-center bg-muted/10 py-12"
      id="about"
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center h-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isMounted && isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h2
              className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl 2xl:text-8xl mb-6 gradient-text leading-tighter"
              initial={{ opacity: 0, y: 30 }}
              animate={isMounted && isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {content.title}
              <span className="">{content.titleHighlight}</span>
              {content.titleSuffix}
            </motion.h2>

            {/* Map over the paragraphs from props */}
            {content.paragraphs.map((text, index) => (
              <motion.p
                key={index}
                className="text-sm sm:text-md lg:text-lg text-muted-foreground pb-2 lg:pb-6 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={isMounted && isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
              >
                {text}
              </motion.p>
            ))}
          </motion.div>

          <motion.div
            className="relative h-full"
            initial={{ opacity: 0, x: 50 }}
            animate={isMounted && isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Card className="p-6 lg:p-8 w-full hover-lift h-full border-2 border-primary rounded-none shadow-none bg-background">
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
              >
                <div className="border-2 border-primary/30 w-full h-32 lg:h-48 bg-gradient-to-br from-primary/10 via-background to-primary/10 flex items-center justify-center mb-0 sm:mb-4">
                  <motion.div className="text-center">
                    <UsersRoundIcon className="h-12 w-12 lg:h-16 lg:w-16 text-primary mx-auto mb-0 lg:mb-4" />
                    <p className="text-lg font-semibold text-foreground">
                      {content.card.imageSection.title}
                    </p>
                    <p className="text-muted-foreground">
                      {content.card.imageSection.subtitle}
                    </p>
                  </motion.div>
                </div>

                <div className=" hidden sm:block">
                  <h3 className="font-serif font-semibold text-xl mb-2">
                    {content.card.featuresSection.title}
                  </h3>
                  <div className="grid grid-cols-2 gap-y-2 text-left text-muted-foreground">
                    {/* Map over the combined features array */}
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        {feature.icon}
                        <p className="text-sm sm:text-base 2xl:text-lg">
                          {feature.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
