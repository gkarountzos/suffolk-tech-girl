"use client";

import type React from "react";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  FloatingInput,
  FloatingTextarea,
} from "@/components/ui/floating-input";
import { Send } from "lucide-react";
import FancyButton from "@/components/ui/FancyButton";
import { Footer } from "@/components/Footer";
import { FlipWords } from "@/components/ui/flip-words";
import { words } from "@/constants/words";
import { ScrollToTopIndicator } from "@/components/ScrollToTopIndicator";

export default function ContactSection() {
  const ref = useRef(null);
  const isContactInView = useInView(ref, { amount: 0.5 });
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      ref={ref}
      className="h-screen w-full snap-start flex flex-col bg-muted/10"
      id="contact"
    >
      <div className="flex-1 flex items-center justify-center">
        <div className="container mx-auto px-6 max-w-2xl">
          <div className="flex flex-col gap-4 ">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif font-black text-3xl md:text-4xl lg:text-8xl mb-6 gradient-text leading-tighter">
                Get In Touch
              </h2>
              <FlipWords
                words={words}
                className="text-muted-foreground p-0"
                duration={1500}
              />
              tech support
            </motion.div>

            <motion.div
              className=" backdrop-blur-sm px-8 pb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <FloatingInput
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    label="Your name"
                  />
                  <FloatingInput
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    label="Your email"
                  />
                </div>

                <FloatingTextarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  label="How can we help you?"
                />
              </form>
            </motion.div>
            <motion.div
              className="flex items-center justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <FancyButton href="#">
                Send Message
                <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </FancyButton>
            </motion.div>
          </div>
        </div>
      </div>

      <ScrollToTopIndicator isContactInView={isContactInView} />

      <Footer isInView={isInView} />
    </section>
  );
}
