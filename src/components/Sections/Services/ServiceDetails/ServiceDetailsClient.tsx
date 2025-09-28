"use client";

import { motion } from "framer-motion";
import FancyButton from "@/components/ui/FancyButton";
import Link from "next/link";
import {
  Monitor,
  Smartphone,
  Wifi,
  Shield,
  GraduationCap,
  Cloud,
  CheckCircle,
  LucideProps,
} from "lucide-react";
import { Services } from "@/constants/content";

const iconMap: { [key: string]: React.ComponentType<LucideProps> } = {
  Monitor,
  Smartphone,
  Wifi,
  Shield,
  GraduationCap,
  Cloud,
};

interface ServicePageProps {
  service: Services;
}

export function ServiceDetailsContent({ service }: ServicePageProps) {
  const IconComponent = iconMap[service.icon];
  return (
    <section className="h-screen w-full flex flex-col justify-center bg-muted/10 pt-16 relative">
      <div className="container mx-auto max-w-4xl px-8 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4 sm:mb-8 w-fit"
        >
          <Link href="/#services" className="group ">
            <div className="relative font-serif font-bold text-lg md:text-xl lg:text-2xl ">
              Back to All Services
              <span className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 transform bg-primary transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
            </div>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="p-4 sm:p-8 md:p-12 shadow-lg border-2 border-primary bg-muted/10"
        >
          <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-6 mb-2 sm:mb-6">
            {IconComponent && (
              <div className="flex-shrink-0">
                <IconComponent className="h-12 w-12 text-primary" />
              </div>
            )}
            <h1 className="text-center font-serif font-bold text-xl sm:text-3xl md:text-4xl lg:text-5xl gradient-text leading-tighter">
              {service.title}
            </h1>
          </div>

          <p className="text-sm md:text-lg lg:text-xl text-center md:text-left text-foreground/70 mb-4 sm:mb-8 leading-relaxed">
            {service.description}
          </p>

          <div className="border-t border-primary/20 pt-4 sm:pt-6">
            <h3 className="font-serif font-bold sm:text-xl md:text-2xl text-card-foreground mb-4">
              How I can help:
            </h3>
            <ul className="space-y-3">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground/80 text-sm sm:text-base">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="font-serif font-bold text-xl  gradient-text leading-tighter py-8 text-center">
            Don&apos;t see your problem listed? I might still be able to help.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex items-center justify-center"
        >
          <FancyButton href="/#contact">Get In Touch</FancyButton>
        </motion.div>
      </div>
    </section>
  );
}
