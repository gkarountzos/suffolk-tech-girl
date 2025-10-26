"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import {
  Clock,
  MapPinIcon,
  TimerIcon,
  Handshake,
  Car,
  GraduationCap,
} from "lucide-react";
import Image from "next/image";
import aboutMeImage from "../../../../public/Image_of_Me.webp";

type AboutContentProps = {
  content: {
    title: string;
    titleHighlight: string;
    titleSuffix: string;
    paragraphs: string[];
    card: {
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
      icon: <GraduationCap className="inline h-4 w-4 mr-1" />,
      text: content.card.featuresSection.features[3],
    },
    {
      icon: <Car className="inline h-4 w-4 mr-1" />,
      text: content.card.featuresSection.features[4],
    },
    {
      icon: <Clock className="inline h-4 w-4 mr-1" />,
      text: content.card.featuresSection.features[5],
    },
  ];

  return (
    <section
      ref={ref}
      className="h-screen w-full flex items-center bg-muted/20 py-12"
      id="about"
    >
      <div className="container mx-auto max-w-7xl px-8 lg:px-16 pt-16">
        <div className="grid lg:grid-cols-2 gap-4 sm:gap-8 lg:gap-12 items-center h-full">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={isMounted && isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex justify-between items-center">
              <motion.h2
                className="font-serif font-bold text-5xl md:text-5xl lg:text-6xl 2xl:text-8xl mb-6 gradient-text leading-tighter"
                initial={{ opacity: 0, y: 30 }}
                animate={isMounted && isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {content.title}
                {content.titleSuffix}
              </motion.h2>
              <Image
                src={aboutMeImage}
                alt="Image of Me"
                className="block lg:hidden w-20 xs:w-24 md:w-32 mb-6 rounded-full"
              />
            </div>

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
            <Card className="flex justify-center p-6 lg:p-8 w-full hover-lift h-full border-2 border-primary rounded-none shadow-none bg-muted/10">
              <motion.div
                className="flex flex-col gap-4 lg:gap-8"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
              >
                <div className="absolute top-6 right-8 transform">
                  <Image
                    src={aboutMeImage}
                    alt="Image of Me"
                    className="hidden lg:block w-48 lg:w-36 xl:w-48 rounded-md  object-cover"
                  />
                </div>
                <h3 className="font-serif font-semibold text-xl">
                  {content.card.featuresSection.title}
                </h3>
                <div className="flex flex-col gap-2 text-left text-muted-foreground">
                  {features.map((feature, index) => (
                    <div key={index} className="flex gap-2 items-center">
                      <div>{feature.icon}</div>
                      <p className="text-sm sm:text-base 2xl:text-lg ">
                        {feature.text}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
