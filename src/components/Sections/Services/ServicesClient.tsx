"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  Monitor,
  Smartphone,
  Wifi,
  Shield,
  GraduationCap,
  Cloud,
  LucideProps,
} from "lucide-react";
import FancyButton from "@/components/ui/FancyButton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const iconMap: { [key: string]: React.ComponentType<LucideProps> } = {
  Monitor,
  Smartphone,
  Wifi,
  Shield,
  GraduationCap,
  Cloud,
};

type ServicesContentProps = {
  content: {
    title: string;
    subtitle: string;
    button: {
      text: string;
      href: string;
    };
    services: {
      icon: string;
      title: string;
      description: string;
      features: string[];
    }[];
  };
};

export default function ServicesClient({ content }: ServicesContentProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section
      ref={ref}
      className="h-screen w-full flex flex-col justify-center bg-muted/10 overflow-hidden"
      id="services"
    >
      <div className="container mx-auto max-w-7xl px-8 lg:px-16 z-10 pt-16">
        <motion.div
          className="text-center mb-4 xl:mb-8 2xl:mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isMounted && isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isMounted && isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-serif font-bold text-5xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-8xl pb-2 2xl:pb-6 gradient-text leading-tighter"
          >
            {content.title}
          </motion.h2>
          <motion.p
            className="md:text-lg lg:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {content.subtitle}
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isMounted && isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 2500,
                stopOnInteraction: false,
              }),
            ]}
            className="w-full mb-12 border-l-2 border-r-2 border-primary py-12"
          >
            <CarouselContent className="-ml-4 2xl:-ml-8">
              {content.services.map((service, index) => {
                const IconComponent = iconMap[service.icon];
                return (
                  <CarouselItem
                    key={index}
                    className=" basis-1/1 sm:basis-1/2 lg:basis-1/3 xl:basis-1/3 select-none"
                  >
                    <div className="group h-full">
                      <div className="bg-background border-2 border-primary p-4 xl:p-6 2xl:p-8 h-full relative w-full">
                        <div className="flex items-center justify-start gap-4 pb-0 lg:pb-4">
                          {IconComponent && (
                            <IconComponent className="h-6 w-6 lg:h-8 lg:w-8 text-primary" />
                          )}
                          <h3 className="font-serif font-bold text-base md:text-lg lg:text-xl xl:text-3xl text-card-foreground group-hover:text-primary transition-colors duration-300">
                            {service.title}
                          </h3>
                        </div>
                        <p className="text-muted-foreground pb-0 lg:pb-6 leading-relaxed text-sm lg:text-base xl:text-lg">
                          {service.description}
                        </p>
                        <ul className="space-y-3 mb-8">
                          {service.features.map((feature, featureIndex) => (
                            <li
                              key={featureIndex}
                              className="flex items-center gap-3 text-card-foreground"
                            >
                              <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                              <span className="text-sm font-medium">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>
        </motion.div>

        <motion.div
          className="flex items-center justify-center mt-0 lg:mt-8 xl:mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isMounted && isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <FancyButton href={content.button.href}>
            {content.button.text}
          </FancyButton>
        </motion.div>
      </div>
    </section>
  );
}
