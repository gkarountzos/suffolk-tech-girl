"use client";

import { motion, useAnimationControls, Variants } from "framer-motion";
import {
  CogIcon,
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  PhoneIcon,
} from "lucide-react";
import Link from "next/link";

interface SocialLink {
  href: string;
  icon: React.ReactNode;
}

const socialLinks: SocialLink[] = [
  {
    href: "",
    icon: <FacebookIcon size={24} className="text-primary" />,
  },
  {
    href: "",
    icon: <InstagramIcon size={24} className="text-primary" />,
  },
];

const reachOutLinks: SocialLink[] = [
  {
    href: "mailto:info@example.com",
    icon: <MailIcon size={24} className="text-primary" />,
  },
  {
    href: "tel:+1234567890",
    icon: <PhoneIcon size={24} className="text-primary" />,
  },
];

export default function Header() {
  const controls = useAnimationControls();

  const DesktopLogoVariants: Variants = {
    initial: {
      opacity: 1,
      top: "3.5%",
      left: "50%",
      x: "-50%",
      y: "-50%",
    },
  };

  return (
    <motion.div
      className="fixed z-50 flex gap-4 "
      variants={DesktopLogoVariants}
      initial="initial"
      animate={controls}
    >
      <div className="flex items-center justify-between gap-4">
        {socialLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-200 ease-out hover:-translate-y-1"
          >
            {link.icon}
          </Link>
        ))}
      </div>

      <CogIcon size={36} className="animate-[spin_6s_linear_infinite]" />

      <div className="flex items-center justify-between gap-4">
        {reachOutLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-200 ease-out hover:-translate-y-1"
          >
            {link.icon}
          </Link>
        ))}
      </div>
    </motion.div>
  );
}
