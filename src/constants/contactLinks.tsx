import { FacebookIcon, MailIcon, PhoneIcon } from "lucide-react";

interface SocialLink {
  href: string;
  icon: React.ReactNode;
}

export const reachOutLinks: SocialLink[] = [
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
