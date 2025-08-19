"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Users, Heart, Award, Clock } from "lucide-react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { icon: Users, label: "Happy Customers", value: "500+" },
    { icon: Clock, label: "Years Experience", value: "10+" },
    { icon: Award, label: "Certifications", value: "15+" },
    { icon: Heart, label: "5-Star Reviews", value: "98%" },
  ];

  return (
    <section
      ref={ref}
      className="h-screen w-full snap-start flex items-center bg-muted/10 py-12"
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h2
              className="font-serif font-bold text-4xl md:text-5xl mb-6 text-foreground"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Your Trusted Tech Partners
            </motion.h2>

            <motion.p
              className="text-lg text-muted-foreground mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              At Suffolk Tech Help, we believe technology should make your life
              easier, not harder. Our team of certified professionals brings
              years of experience and a genuine passion for helping our
              community navigate the digital world.
            </motion.p>

            <motion.p
              className="text-lg text-muted-foreground mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              From simple troubleshooting to complex network setups, we approach
              every challenge with patience, expertise, and a commitment to
              finding solutions that work for you.
            </motion.p>

            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center p-4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                >
                  <stat.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="font-serif font-bold text-2xl text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Card className="p-8 bg-card hover-lift">
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 1, delay: 0.8 }}
              >
                <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                  <motion.div
                    className="text-center"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  >
                    <Users className="h-16 w-16 text-primary mx-auto mb-4" />
                    <p className="text-lg font-semibold text-foreground">
                      Our Expert Team
                    </p>
                    <p className="text-muted-foreground">
                      Ready to help you succeed
                    </p>
                  </motion.div>
                </div>

                <div className="text-center">
                  <h3 className="font-serif font-semibold text-xl mb-2">
                    Why Choose Us?
                  </h3>
                  <ul className="text-left space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      Local Suffolk-based team
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      Same-day service available
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      Transparent, fair pricing
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      Ongoing support & training
                    </li>
                  </ul>
                </div>
              </motion.div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
