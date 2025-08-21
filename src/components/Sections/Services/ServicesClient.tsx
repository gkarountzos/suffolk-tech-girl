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
      className="h-screen w-full snap-start flex flex-col justify-center bg-muted/10 overflow-hidden"
    >
      <div className="container mx-auto max-w-7xl px-6 z-10">
        <motion.div
          className="text-center mb-8 2xl:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isMounted && isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <motion.h2 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl 2xl:text-8xl pb-2 2xl:pb-6 gradient-text leading-tighter">
            {content.title}
          </motion.h2>
          <p className="text-base md:text-lg lg:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            {content.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:place-content-center md:place-items-center md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4 2xl:gap-8 mb-12">
          {content.services.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isMounted && isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="md:w-78 lg:w-full bg-background border-2 border-primary p-4 xl:p-6 2xl:p-8 h-full relative hover-lift">
                  <div className="flex items-center justify-start gap-4 pb-0 lg:pb-4">
                    {IconComponent && (
                      <IconComponent className="h-6 w-6 lg:h-8 lg:w-8 text-primary" />
                    )}
                    <h3 className="font-serif font-bold text-base md:text-lg lg:text-2xl text-card-foreground group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed text-sm lg:text-base hidden md:block">
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-8 hidden lg:block">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        className="flex items-center gap-3 text-card-foreground"
                        initial={{ opacity: 0, x: -20 }}
                        animate={
                          isMounted && isInView ? { opacity: 1, x: 0 } : {}
                        }
                        transition={{
                          duration: 0.4,
                          delay: index * 0.1 + featureIndex * 0.1,
                        }}
                      >
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-sm font-medium">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="flex items-center justify-center mt-0 lg:mt-16 "
          initial={{ opacity: 0, y: 20 }}
          animate={isMounted && isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <FancyButton href={content.button.href}>
            {content.button.text}
          </FancyButton>
        </motion.div>
      </div>
    </section>
  );
}
