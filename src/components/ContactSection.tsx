"use client";

import type React from "react";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: "(555) 123-TECH",
      subtitle: "Mon-Fri 8AM-6PM",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "help@suffolktech.com",
      subtitle: "24/7 Response",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "123 Main St, Suffolk",
      subtitle: "By appointment",
    },
    {
      icon: Clock,
      title: "Emergency",
      details: "24/7 Support",
      subtitle: "Critical issues only",
    },
  ];

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
      className="h-screen w-full snap-start flex items-center py-12 bg-muted/10 overflow-y-auto"
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif font-bold text-4xl md:text-5xl mb-4 text-foreground">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ready to solve your tech challenges? Reach out to our friendly team.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="grid grid-cols-2 gap-4 mb-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  className="flex flex-col items-center text-center p-4 rounded-lg hover:bg-card/50 transition-colors"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                    <info.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground text-sm mb-1">
                    {info.title}
                  </h3>
                  <p className="text-sm font-medium text-primary">
                    {info.details}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {info.subtitle}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="bg-gradient-to-br from-primary/10 to-accent/10 p-6 rounded-lg"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <MessageCircle className="h-6 w-6 text-primary mb-3" />
              <h3 className="font-serif font-semibold text-lg mb-2 text-foreground">
                Why Choose Suffolk Tech Help?
              </h3>
              <ul className="space-y-1 text-muted-foreground text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  Local Suffolk experts who understand your needs
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  Friendly, patient service - no tech jargon
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  Fair, transparent pricing with no hidden fees
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  Same-day service for urgent issues
                </li>
              </ul>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="p-6 bg-card hover-lift">
              <form onSubmit={handleSubmit} className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-1"
                  >
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full"
                    placeholder="Your full name"
                  />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-1"
                    >
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="your@email.com"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-foreground mb-1"
                    >
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="(555) 123-4567"
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.9 }}
                >
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-1"
                  >
                    How can we help? *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full min-h-[100px]"
                    placeholder="Describe your tech issue or question..."
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1 }}
                >
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group hover-lift"
                  >
                    Send Message
                    <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              </form>

              <motion.p
                className="text-xs text-muted-foreground text-center mt-4"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                We typically respond within 2 hours during business hours.
              </motion.p>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
