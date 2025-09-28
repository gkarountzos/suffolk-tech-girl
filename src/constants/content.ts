import { words } from "@/constants/words";

export const heroContent = {
  title: "Suffolk's Tech Girl",
  flipWords: words,
  subtitleSuffix: "Tech Support",
  description:
    "Technology doesn’t have to be confusing. I offer straightforward tech help with a personal touch to regular home users like you. Think of me as your friendly, local go-to for solving your digital headaches.",
  buttonText: "Get in touch",
  buttonLink: "#contact",
};

export const aboutContent = {
  title: "Hi, I'm",
  titleHighlight: "",
  titleSuffix: " Gemma!",
  paragraphs: [
    "Technology should make life easier, not more stressful. That's where I come in. My goal is to make sure you can feel confident and comfortable with your tech, and to provide an affordable and personal approach from someone who cares.",
    "Whether it’s a slow computer, a confusing new phone, or something that just won’t work the way it should, I tackle every challenge with patience and understanding. No jargon, no fuss — just simple, effective support that works for you.",
  ],
  card: {
    featuresSection: {
      title: "Why Choose Me?",
      features: [
        "Friendly, local Suffolk service",
        "Fast response (I aim for same-day)",
        "1-to-1 digital literacy classes",
        "Over a decade of experience",
        "Home visits or remote support, whatever suits you",
        "Wide availability - I work beyond 9-5",
      ],
    },
  },
};

export const servicesContent = {
  title: "How I Can Help",
  subtitle: "No problem too big or too small",
  button: {
    text: "Get in touch",
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
    title: "Tech Support",
    description: "Help with a wide range of everyday tech headaches.",
    features: [
      "Troubleshooting computer and phone problems",
      "Getting rid of pesky errors and pop-ups",
      "Speeding up slow devices",
      "Fixing internet and Wi-Fi connection issues",
      "Helping with email, apps, and accounts",
      "And much more!",
    ],
    keywords: [
      "computer support",
      "phone support",
      "troubleshooting",
      "repairs",
      "diagnostics",
      "email",
      "apps",
    ],
    href: "/services/tech-support",
  },
  {
    icon: "Wifi",
    title: "Device Setup",
    description: "Start fresh with your new tech, set up the right way.",
    features: [
      "Setting up new computers, tablets, or phones",
      "Installing and updating software",
      "Installing new Operating Systems",
      "Connecting printers, scanners, and accessories",
      "Setting up home Wi-Fi and smart devices",
      "Transferring files and photos from old devices",
    ],
    keywords: [
      "device setup",
      "installation",
      "setup",
      "wi-fi",
      "printers",
      "smart devices",
      "data transfer",
    ],
    href: "/services/device-setup",
  },
  {
    icon: "Smartphone",
    title: "Advice and Recommendations",
    description: "Clear, honest guidance on the right tech for you.",
    features: [
      "Choosing the right laptop, phone, or tablet",
      "Guidance on upgrading vs. repairing",
      "Recommending safe apps and software",
      "Helping find the best deals for your budget",
      "Advice on keeping your data safe",
    ],
    keywords: [
      "tech advice",
      "recommendations",
      "guidance",
      "upgrades",
      "software",
      "budget",
      "data safety",
    ],
    href: "/services/advice-recommendations",
  },
  {
    icon: "GraduationCap",
    title: "1-to-1 Digital Literacy Classes",
    description: "Learn the skills you need to feel confident with technology.",
    features: [
      "How to use email, apps, and the internet with confidence",
      "How to use the internet safely and avoid viruses",
      "How to stay connected with family and friends online",
      "How to understand online banking and shopping",
      "How to organise and store photos, files, and documents",
      "Learn at your pace with personalised, in-person lessons - and no jargon!",
    ],
    keywords: [
      "digital literacy",
      "tech classes",
      "training",
      "internet safety",
      "online banking",
      "file management",
    ],
    href: "/services/digital-literacy-classes",
  },
  {
    icon: "Keyboard",
    title: "Custom PC Builds",
    description: "A computer designed and built around your needs.",
    features: [
      "Designing a PC that matches your budget and goals",
      "Helping choose the right parts (without overspending)",
      "Building and testing your new machine",
      "Setting it up with the right software",
      "Offering ongoing support after it’s built",
    ],
    keywords: [
      "custom pc",
      "pc build",
      "computer parts",
      "gaming pc",
      "software setup",
      "support",
    ],
    href: "/services/custom-pc-builds",
  },
  {
    icon: "Gamepad2",
    title: "Gaming Support",
    description:
      "Help setting up and enjoying your games the way they’re meant to be played.",
    features: [
      "Fixing crashes, errors, or performance issues",
      "Setting up gaming PCs, consoles, and accessories",
      "Helping configure settings for smoother play and higher framerates",
      "Advice on game libraries, subscriptions, and upgrades",
    ],
    keywords: [
      "gaming support",
      "gaming pc",
      "game consoles",
      "performance issues",
      "gaming setup",
      "framerate",
    ],
    href: "/services/gaming-support",
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
  location: "Serving Mid Suffolk and surrounding areas",
  credits: "crafted by ",
  author: {
    name: "gkarountzos",
    href: "mailto:karountzos.geo@gmail.com",
  },
};
