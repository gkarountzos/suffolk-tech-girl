"use client";

import { motion } from "framer-motion";
import { CogIcon, Facebook, MailIcon, PhoneCall } from "lucide-react";
import Link from "next/link";

export default function SocialsCTA() {
  interface SocialLink {
    href: string;
    icon: React.ReactNode;
  }

  const socialLinks: SocialLink[] = [
    {
      href: "",
      icon: <Facebook size={24} className="text-primary" />,
    },
    {
      href: "",
      icon: <PhoneCall size={24} className="text-primary" />,
    },
    {
      href: "",
      icon: <MailIcon size={24} className="text-primary" />,
    },
  ];

  const renderLinks = <T extends { href: string; icon: React.ReactNode }>(
    items: T[],
    renderFn: (item: T, index: number) => React.ReactNode
  ) => {
    return items.map((item, index) => renderFn(item, index));
  };

  return (
    <motion.div
      className="fixed bottom-10 left-10 md:bottom-24 md:left-12 z-50"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="hidden lg:flex flex-col lg:space-y-4">
        {renderLinks(socialLinks, ({ href, icon: Icon }, index) => (
          <Link
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit h-fit transition-transform duration-200 ease-out hover:-translate-y-2"
          >
            <span
              className={`inline-block transform transition-transform duration-1000 ease-out translate-y-0 opacity-100
            `}
              style={{
                transitionDelay: `${
                  100 + socialLinks.length * 100 + index * 100
                }ms`,
              }}
            >
              {Icon}
            </span>
          </Link>
        ))}

        <span
          className={`inline-block transform transition-transform duration-1000 ease-out translate-y-0 opacity-100`}
        >
          <CogIcon size={24} className="animate-spin" />
        </span>
      </div>
    </motion.div>
  );
}
