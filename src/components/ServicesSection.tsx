"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Monitor,
  Smartphone,
  Wifi,
  Shield,
  GraduationCap,
  Cloud,
} from "lucide-react";
import FancyButton from "@/components/ui/FancyButton";
import { Footer } from "@/components/Footer";

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    {
      icon: Monitor,
      title: "Computer Repair",
      description: "Hardware diagnostics, repairs, and upgrades",
      features: [
        "Hardware diagnostics",
        "Component replacement",
        "Performance optimization",
      ],
      position: { x: 0, y: -120 },
    },
    {
      icon: Wifi,
      title: "Network Setup",
      description: "Home and office network installation",
      features: [
        "WiFi optimization",
        "Router configuration",
        "Network security",
      ],
      position: { x: 104, y: -60 },
    },
    {
      icon: Smartphone,
      title: "Mobile Support",
      description: "Smartphone and tablet troubleshooting",
      features: ["Device setup", "App installation", "Data transfer"],
      position: { x: 104, y: 60 },
    },
    {
      icon: Shield,
      title: "Security Solutions",
      description: "Antivirus and malware protection",
      features: ["Malware removal", "Security software", "Privacy protection"],
      position: { x: 0, y: 120 },
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      description: "Cloud storage and backup solutions",
      features: ["Backup solutions", "Cloud migration", "Data sync"],
      position: { x: -104, y: 60 },
    },
    {
      icon: GraduationCap,
      title: "Tech Training",
      description: "One-on-one device training sessions",
      features: [
        "Personalized training",
        "Software tutorials",
        "Best practices",
      ],
      position: { x: -104, y: -60 },
    },
  ];

  return (
    <section
      ref={ref}
      className="h-screen w-full snap-start flex flex-col justify-center bg-muted/10 relative overflow-hidden"
    >
      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <motion.h2 className="font-serif font-black text-3xl md:text-4xl lg:text-8xl mb-6 gradient-text leading-tighter">
            Our Services
          </motion.h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Revolutionary tech support solutions designed for the modern world
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group "
            >
              <div className="bg-background border-2 border-primary p-8 h-full relative hover-lift">
                <div className="flex items-center justify-start gap-4">
                  <service.icon className="h-8 w-8 text-primary" />

                  <h3 className="font-serif font-bold text-2xl text-card-foreground text-center group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed text-base">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      className="flex items-center gap-3 text-card-foreground"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
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
          ))}
        </div>

        <motion.div
          className="flex items-center justify-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <FancyButton href="#contact">Get Your Custom Solution</FancyButton>
        </motion.div>
      </div>
    </section>
  );
}
