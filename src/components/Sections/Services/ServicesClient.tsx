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
  ArrowRightIcon,
} from "lucide-react";
import FancyButton from "@/components/ui/FancyButton";
import Link from "next/link";
import { services, servicesContent } from "@/constants/content";

const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/ & /g, "-and-")
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");

const iconMap: { [key: string]: React.ComponentType<LucideProps> } = {
  Monitor,
  Smartphone,
  Wifi,
  Shield,
  GraduationCap,
  Cloud,
};

type ServicesContentProps = {
  content: typeof servicesContent;
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
            className="font-serif font-bold text-4xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-8xl pb-2 2xl:pb-6 gradient-text leading-tighter"
          >
            {content.title}
          </motion.h2>
          <motion.p
            className="text-sm md:text-lg lg:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed"
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
          <div className="w-full mb-12 ">
            <motion.div className="flex flex-col border-b-2 border-primary">
              {services.map((service, index) => {
                const IconComponent = iconMap[service.icon];
                return (
                  <div key={index}>
                    <Link href={`/services/${slugify(service.title)}`}>
                      <motion.div
                        className="group flex items-center justify-between border-t-2 border-primary p-2 sm:p-4 xl:p-6 2xl:p-8 h-full w-full  select-none cursor-pointer"
                        whileHover="hover"
                      >
                        <div className="flex items-center justify-start gap-4">
                          {IconComponent && (
                            <IconComponent className="h-6 w-6 lg:h-8 lg:w-8 text-primary" />
                          )}
                          <h3 className="font-serif font-bold text-base md:text-lg lg:text-xl xl:text-3xl text-primary group-hover:text-primary transition-colors duration-300">
                            {service.title}
                          </h3>
                        </div>
                        <motion.div className="relative font-serif font-bold text-sm md:text-md lg:text-lg xl:text-2xl hidden md:block">
                          Learn More
                          <span className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 transform bg-primary transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
                        </motion.div>
                        <div className="block md:hidden">
                          <ArrowRightIcon className="h-4 w-4 mx-2 text-primary " />
                        </div>
                      </motion.div>
                    </Link>
                  </div>
                );
              })}
            </motion.div>
          </div>
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
