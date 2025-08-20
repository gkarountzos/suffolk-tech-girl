import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";
import SocialsCTA from "@/components/SocialsCTA";
import AnimatedLogo from "@/components/AnimatedLogo";

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
  title: "Suffolk Tech Help - Local, Friendly Tech Support",
  description:
    "Professional tech support and solutions for your local community",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body>
        <AnimatedLogo />
        {children}
        <SocialsCTA />
      </body>
    </html>
  );
}
