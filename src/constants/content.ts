import { words } from "@/constants/words";

export const heroContent = {
  title: "Suffolk's Tech Girl",
  flipWords: words,
  subtitleSuffix: "Tech Support",
  description:
    "I offer straightforward tech help with a personal touch. Think of me as your friendly, local go-to for solving your digital headaches.",
  buttonText: "Reach Out",
  buttonLink: "#contact",
};

export const aboutContent = {
  title: "Hi, I'm ",
  titleHighlight: "Your",
  titleSuffix: " Tech Girl!",
  paragraphs: [
    "I believe technology should make your life easier, not more complicated. My passion is helping people in our community feel confident and comfortable in their digital world.",
    "From a slow computer to a confusing new phone, I approach every challenge with patience and a commitment to finding a simple solution that works for you. No jargon, just friendly, effective help.",
  ],
  card: {
    imageSection: {
      title: "Putting the 'Personal' in PC Help",
      subtitle: "Ready to solve your tech troubles",
    },
    featuresSection: {
      title: "Why Choose Me?",
      features: [
        "Friendly, local Suffolk service",
        "Fast response (often same-day!)",
        "Clear, honest pricing - no surprises",
        "Patient training & ongoing support",
      ],
    },
  },
};

export const servicesContent = {
  title: "How I Can Help",
  subtitle: "Simple, effective solutions for your everyday tech challenges.",
  button: {
    text: "Let me Help you",
    href: "#contact",
  },
};

export interface Services {
  icon: string;
  title: string;
  description: string;
  features: string[];
  keywords: string[];
  href: string;
}

export const services: Services[] = [
  {
    icon: "Monitor",
    title: "Computer Build & Repair",
    description:
      "I'll diagnose and fix issues to get your computer running like new again.",
    features: [
      "Hardware diagnostics",
      "Component replacement",
      "Performance optimization",
    ],
    keywords: ["computer repair", "hardware", "performance"],
    href: "/services/computer-build-repair",
  },
  {
    icon: "Wifi",
    title: "Wi-Fi & Network Setup",
    description:
      "Solving frustrating connection issues for seamless home and office internet.",
    features: [
      "WiFi optimization",
      "Router configuration",
      "Network security checks",
    ],
    keywords: ["wifi", "network", "internet"],
    href: "/services/wi-fi-network-setup",
  },
  {
    icon: "Smartphone",
    title: "Phone & Tablet Support",
    description: "Expert troubleshooting and setup for your mobile devices.",
    features: ["Device setup", "App installation", "Data transfer"],
    keywords: ["phone support", "tablet support", "mobile devices"],
    href: "/services/phone-tablet-support",
  },
  {
    icon: "Shield",
    title: "Virus & Malware Removal",
    description:
      "I'll help you clean and protect your devices from digital threats.",
    features: [
      "Malware removal",
      "Security software advice",
      "Privacy protection",
    ],
    keywords: ["virus removal", "malware", "security"],
    href: "/services/virus-malware-removal",
  },
  {
    icon: "Cloud",
    title: "Cloud & Backup Help",
    description: "Guidance on secure cloud storage and backup solutions.",
    features: ["Backup solutions", "Cloud migration help", "Data syncing"],
    keywords: ["cloud", "backup", "data"],
    href: "/services/cloud-backup-help",
  },
  {
    icon: "GraduationCap",
    title: "One-on-One Tech Training",
    description:
      "Patient, personalized training sessions for your devices and software.",
    features: [
      "Personalized training",
      "Software tutorials",
      "Digital best practices",
    ],
    keywords: ["tech training", "personalized support", "software tutorials"],
    href: "/services/one-on-one-tech-training",
  },
];

export const contactContent = {
  title: "Get In Touch",
  flipWords: words,
  subtitleSuffix: "tech help",
  form: {
    nameLabel: "Your name",
    emailLabel: "Your email",
    messageLabel: "How can I help you?",
  },
  buttonText: "Send Message",
};

export const footerContent = {
  location: "Serving Suffolk and surrounding areas",
  credits: "crafted by ",
  author: {
    name: "gkarountzos",
    href: "mailto:karountzos.geo@gmail.com",
  },
};
