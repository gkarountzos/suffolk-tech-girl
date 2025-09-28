import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Outfit } from "next/font/google";
import "./globals.css";
import PageWrapper from "@/components/PageWrapper";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Toaster } from "sonner";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.suffolktechgirl.co.uk"),

  title: {
    default: "Suffolk's Tech Girl - Friendly, Personal Tech Support",
    template: "%s | Suffolk's Tech Girl",
  },

  description:
    "Your friendly, local tech girl for personal support in Suffolk. I offer computer repair, Wi-Fi help, phone support, and patient, one-on-one tech training.",

  keywords: [
    "tech support Suffolk",
    "IT support Ipswich",
    "computer repair Suffolk",
    "local tech help",
    "friendly computer help",
    "personal tech support",
    "tech help for seniors",
    "one-on-one tech training",
    "PC repair Bury St Edmunds",
    "laptop repair Felixstowe",
    "virus removal",
    "malware removal",
    "WiFi setup",
    "home network help",
    "slow computer help",
  ],

  openGraph: {
    title: "Suffolk's Tech Girl - Friendly, Personal Tech Support",
    description:
      "Friendly, one-on-one tech help for your computer, phone, and Wi-Fi troubles in Suffolk. Patient support from your local tech girl.",
    url: "https://www.suffolktechgirl.co.uk",
    siteName: "Suffolk's Tech Girl",
    images: [
      {
        url: "/logo.svg",
        width: 1200,
        height: 630,
        alt: "Logo for Suffolk's Tech Girl, friendly tech support.",
      },
    ],
    locale: "en_GB",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Suffolk's Tech Girl - Friendly, Personal Tech Support",
    description:
      "Your friendly, local tech girl for personal support in Suffolk. I offer computer repair, Wi-Fi help, and patient tech training.",
    images: ["/logo.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${poppins.variable}`}>
      <body>
        <PageWrapper>{children}</PageWrapper>
        <Toaster
          toastOptions={{
            unstyled: true,
            className:
              "border-2 border-primary bg-background flex gap-2 font-sans font-medium p-4",
          }}
        />
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!} />
    </html>
  );
}
