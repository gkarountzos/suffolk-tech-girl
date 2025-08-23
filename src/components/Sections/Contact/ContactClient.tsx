"use client";

import type React from "react";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  FloatingInput,
  FloatingTextarea,
} from "@/components/ui/floating-input";
import { Send } from "lucide-react";
import FancyButton from "@/components/ui/FancyButton";
import { Footer } from "@/components/Sections/Footer/Footer";
import { ScrollToTopIndicator } from "@/components/CTA/ScrollToTopIndicator";
import Link from "next/link";
import { reachOutLinks } from "@/constants/contactLinks";
import { ContactFormData } from "@/schemas/contactFormSchema";
import {
  sendConfirmationEmail,
  sendContactEmailToBusiness,
} from "@/actions/sendEmails";
import { toast } from "sonner";

type ContactContentProps = {
  content: {
    title: string;
    flipWords: string[];
    subtitleSuffix: string;
    form: {
      nameLabel: string;
      emailLabel: string;
      messageLabel: string;
    };
    buttonText: string;
  };
  footerContent: {
    location: string;
    credits: string;
    author: {
      name: string;
      href: string;
    };
  };
};

export default function ContactClient({ content }: ContactContentProps) {
  const ref = useRef(null);
  const isContactInView = useInView(ref, { amount: 0.5 });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [isMounted, setIsMounted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await sendContactEmailToBusiness(formData);
    await sendConfirmationEmail(formData);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    setIsSubmitting(false);
    try {
      const extendedWindow = window as Window & {
        webkitAudioContext?: AudioContext;
      };

      const AudioContext =
        extendedWindow.AudioContext || extendedWindow.webkitAudioContext;

      if (AudioContext) {
        const audioContext = new AudioContext();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        oscillator.type = "sine";
        oscillator.frequency.setValueAtTime(600, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(
          0.00001,
          audioContext.currentTime + 0.5
        );

        oscillator.start();
        oscillator.stop(audioContext.currentTime + 0.5);
      }
    } catch (error) {
      console.error("Could not play audio:", error);
    }
    toast.success("Message sent successfully!");
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
      className="h-screen w-full flex flex-col bg-muted/20 relative"
      id="contact"
    >
      <div className="flex-1 flex items-center justify-center">
        <div className="container mx-auto px-6 max-w-2xl pt-16">
          <div className="flex flex-col gap-4">
            <motion.div
              className="flex flex-col items-center justify-between pb-0 lg:pb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={isMounted && isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif font-bold text-4xl text-center sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-8xl pb-2 lg:pb-6 gradient-text leading-tighter">
                {content.title}
              </h2>

              <div className="flex flex-col items-center justify-center gap-2">
                {reachOutLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:-translate-y-1"
                  >
                    {link.text}
                  </Link>
                ))}
              </div>
            </motion.div>

            <motion.form
              onSubmit={handleSubmit}
              className="backdrop-blur-sm pb-0 md:pb-8 space-y-4 lg:space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isMounted && isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="grid md:grid-cols-2 gap-2 lg:gap-4">
                <FloatingInput
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  label={content.form.nameLabel}
                />
                <FloatingInput
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  label={content.form.emailLabel}
                />
              </div>
              <FloatingTextarea
                name="message"
                required
                value={formData.message}
                onChange={handleInputChange}
                label={content.form.messageLabel}
              />
              <motion.div
                className="flex items-center justify-center pt-4"
                initial={{ opacity: 0, y: 30 }}
                animate={isMounted && isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <FancyButton type="submit">
                  {isSubmitting ? "Sending..." : content.buttonText}
                  <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </FancyButton>
              </motion.div>
            </motion.form>
          </div>
        </div>
      </div>

      <ScrollToTopIndicator
        isContactInView={isContactInView}
        isMounted={isMounted}
      />
      <Footer isInView={isInView} isMounted={isMounted} />
    </section>
  );
}
