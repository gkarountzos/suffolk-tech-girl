"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Clock, MapPinIcon, TimerIcon, Handshake, Laptop2 } from "lucide-react";

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
      <div className="container mx-auto px-6 pt-16">
        <div className="grid lg:grid-cols-2 gap-4 sm:gap-8 lg:gap-12 items-center h-full">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={isMounted && isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h2
              className="text-center font-serif font-bold text-5xl md:text-5xl lg:text-6xl 2xl:text-8xl mb-6 gradient-text leading-tighter"
              initial={{ opacity: 0, y: 30 }}
              animate={isMounted && isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {content.title}
              <span className="">
                {content.titleHighlight} <br />{" "}
              </span>
              {content.titleSuffix}
            </motion.h2>

            {content.paragraphs.map((text, index) => (
              <motion.p
                key={index}
                className="text-sm sm:text-base lg:text-lg text-muted-foreground pb-2 lg:pb-6 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={isMounted && isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
              >
                {text}
              </motion.p>
            ))}
          </motion.div>

          <motion.div
            className="relative h-full"
            initial={{ opacity: 0, y: 50 }}
            animate={isMounted && isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Card className="p-6 lg:p-8 w-full hover-lift h-full border-2 border-primary rounded-none shadow-none bg-gradient-to-br from-primary/10 via-background to-primary/10">
              <motion.div
                className="flex flex-col gap-16"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
              >
                <motion.div className="text-center px-2 mb-0">
                  <Laptop2 className="h-8 w-8 sm:h-12 sm:w-12 lg:h-24 lg:w-24 text-primary mx-auto mb-2 lg:mb-4" />
                  <p className="text-base sm:text-lg font-semibold text-foreground ">
                    {content.card.imageSection.title}
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    {content.card.imageSection.subtitle}
                  </p>
                </motion.div>

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
