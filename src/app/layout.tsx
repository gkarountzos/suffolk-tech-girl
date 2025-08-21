import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";
import SocialsCTA from "@/components/CTA/SocialsCTA";
import AnimatedLogo from "@/components/Header/AnimatedLogo";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.suffolktechhelp.co.uk"),

  title: {
    default: "Suffolk Tech Help - Local, Friendly Tech Support",
    template: "%s | Suffolk Tech Help",
  },

  description:
    "Your friendly, local experts for tech support in Suffolk. We offer computer repair, network setup, mobile support, and personalized tech training.",

  keywords: [
    "tech support Suffolk",
    "IT support Ipswich",
    "computer repair Suffolk",
    "local tech help",
    "PC repair Bury St Edmunds",
    "laptop repair Felixstowe",

    "virus removal",
    "malware removal",
    "WiFi setup",
    "home network help",
    "data backup",
    "new computer setup",

    "slow computer help",
    "internet problems",
    "friendly tech support",
  ],

  openGraph: {
    title: "Suffolk Tech Help - Local, Friendly Tech Support",
    description:
      "Professional technology solutions delivered with a personal touch.",
    url: "https://www.suffolktechhelp.co.uk",
    siteName: "Suffolk Tech Help",
    images: [
      {
        url: "/Logo_Gemma.webp",
        width: 1200,
        height: 630,
        alt: "Suffolk Tech Help logo with a friendly technician.",
      },
    ],
    locale: "en_GB",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Suffolk Tech Help - Local, Friendly Tech Support",
    description: "Your friendly, local experts for tech support in Suffolk.",
    images: ["/Logo_Gemma.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body>
        <main className="snap-container">{children}</main>
        <SocialsCTA />
      </body>
    </html>
  );
}
