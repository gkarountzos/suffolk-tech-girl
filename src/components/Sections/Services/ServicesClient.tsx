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

  const duplicatedServices = [...content.services, ...content.services];

  return (
    <section
      ref={ref}
      className="h-screen w-full flex flex-col justify-center bg-muted/10 overflow-hidden"
    >
      <div className="container mx-auto max-w-7xl px-0 lg:px-16 z-10">
        <motion.div
          className="text-center mb-4 xl:mb-8 2xl:mb-16 px-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isMounted && isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <motion.h2 className="font-serif font-bold text-5xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-8xl pb-2 2xl:pb-6 gradient-text leading-tighter">
            {content.title}
          </motion.h2>
          <p className="text-base md:text-lg lg:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            {content.subtitle}
          </p>
        </motion.div>

        <div className="w-full overflow-hidden  mb-12 border-r-2 border-l-2 border-primary">
          <motion.div
            className="flex gap-4 2xl:gap-8"
            animate={{
              x: "-50%",
              transition: {
                ease: "linear",
                duration: 20,
                repeat: Infinity,
              },
            }}
          >
            {duplicatedServices.map((service, index) => {
              const IconComponent = iconMap[service.icon];
              return (
                <div
                  key={index}
                  className="group flex-shrink-0 w-[80vw] md:w-[45vw] lg:w-[30vw] xl:w-[25vw]"
                >
                  <div className="bg-background border-2 border-primary p-4 xl:p-6 2xl:p-8 h-full relative w-full">
                    <div className="flex items-center justify-start gap-4 pb-0 lg:pb-4">
                      {IconComponent && (
                        <IconComponent className="h-6 w-6 lg:h-8 lg:w-8 text-primary" />
                      )}
                      <h3 className="font-serif font-bold text-base md:text-lg lg:text-xl xl:text-3xl text-card-foreground group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground pb-0 lg:pb-6 leading-relaxed text-sm lg:text-base xl:text-lg hidden md:block">
                      {service.description}
                    </p>
                    <ul className="space-y-3 mb-8 hidden lg:block">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center gap-3 text-card-foreground"
                        >
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-sm font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          className="flex items-center justify-center mt-0 lg:mt-8 xl:mt-16"
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
