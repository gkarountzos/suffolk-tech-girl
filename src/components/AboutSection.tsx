"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import {
  Clock,
  MapPinIcon,
  TimerIcon,
  Handshake,
  UsersRoundIcon,
} from "lucide-react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="h-screen w-full snap-start flex items-center bg-muted/10 py-12"
      id="about"
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h2
              className="font-serif font-bold text-3xl md:text-4xl lg:text-8xl mb-6 gradient-text leading-tighter"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Your <span className="">Trusted </span>Tech Partners
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
              className="text-lg text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              From simple troubleshooting to complex network setups, we approach
              every challenge with patience, expertise, and a commitment to
              finding solutions that work for you.
            </motion.p>
          </motion.div>

          <motion.div
            className="relative h-full"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Card className="p-8 w-full hover-lift h-full border-2 border-primary rounded-none shadow-none bg-background">
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
              >
                <div className="border-2 border-primary/30 w-full h-48 bg-gradient-to-br from-primary/10 via-background to-primary/10  flex items-center justify-center">
                  <motion.div
                    className="text-center"
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  >
                    <UsersRoundIcon className="h-16 w-16 text-primary mx-auto mb-4" />
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
                  <div className="grid grid-cols-2 place-items-center text-left space-y-2 text-muted-foreground">
                    <div className="flex flex-col gap-2">
                      <p>
                        <MapPinIcon className="inline h-4 w-4 mr-1" />
                        Local Suffolk-based team
                      </p>
                      <p>
                        <TimerIcon className="inline h-4 w-4 mr-1" />
                        Same-day service available
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <p>
                        <Handshake className="inline h-4 w-4 mr-1" />
                        Transparent, fair pricing
                      </p>
                      <p>
                        <Clock className="inline h-4 w-4 mr-1" />
                        Ongoing support & training
                      </p>
                    </div>
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
