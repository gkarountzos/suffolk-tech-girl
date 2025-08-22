"use client";

import { motion } from "framer-motion";
import { FacebookIcon, MailIcon, PhoneIcon } from "lucide-react";
import Link from "next/link";

interface IFooterProps {
  isMounted: boolean;
  isInView: boolean;
  content: {
    location: string;
    credits: string;
    author: {
      name: string;
      href: string;
    };
  };
}

interface SocialLink {
  href: string;
  icon: React.ReactNode;
}

const reachOutLinks: SocialLink[] = [
  {
    href: "https://www.facebook.com",
    icon: <FacebookIcon size={20} className="text-primary" />,
  },
  {
    href: "mailto:info@example.com",
    icon: <MailIcon size={20} className="text-primary" />,
  },
  {
    href: "tel:+1234567890",
    icon: <PhoneIcon size={20} className="text-primary" />,
  },
];

export function Footer({ isInView, content, isMounted }: IFooterProps) {
  return (
    <motion.footer
      className="py-2 lg:py-6 border-t border-foreground/10"
      initial={{ opacity: 0 }}
      animate={isMounted && isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6, delay: 1 }}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-2 lg:gap-4 text-sm text-muted-foreground">
          <div className="flex flex-col items-start gap-2">
            <div className="flex justify-center items-center gap-2">
              <span>{content.location}</span>
            </div>
            <div className="flex items-center justify-start gap-4">
              {reachOutLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
          <div>
            {content.credits}
            <Link
              href={content.author.href}
              target="_blank"
              className="text-primary font-bold"
            >
              {content.author.name}
            </Link>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
