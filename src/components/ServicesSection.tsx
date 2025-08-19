"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Monitor,
  Smartphone,
  Wifi,
  Shield,
  GraduationCap,
  Cloud,
} from "lucide-react";

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
    },
    {
      icon: Smartphone,
      title: "Mobile Support",
      description: "Smartphone and tablet troubleshooting",
      features: ["Device setup", "App installation", "Data transfer"],
    },
    {
      icon: Shield,
      title: "Security Solutions",
      description: "Antivirus and malware protection",
      features: ["Malware removal", "Security software", "Privacy protection"],
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      description: "Cloud storage and backup solutions",
      features: ["Backup solutions", "Cloud migration", "Data sync"],
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
    },
  ];

  return (
    <section
      ref={ref}
      className="h-screen w-full snap-start flex flex-col justify-center bg-muted/10 py-12 overflow-y-auto"
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif font-bold text-4xl md:text-5xl mb-4 text-foreground">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Comprehensive tech support solutions tailored to your needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-4 h-full bg-card hover-lift group cursor-pointer border-border/50 hover:border-primary/30 transition-all duration-300">
                <motion.div
                  className="mb-3"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-5 w-5 text-primary" />
                  </div>
                </motion.div>

                <h3 className="font-serif font-semibold text-lg mb-2 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                <p className="text-muted-foreground mb-3 text-sm leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-1 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center gap-2 text-xs text-muted-foreground"
                    >
                      <div className="w-1 h-1 bg-primary rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  variant="outline"
                  size="sm"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 bg-transparent text-xs"
                >
                  Learn More
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 hover-lift"
          >
            Get Custom Quote
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
