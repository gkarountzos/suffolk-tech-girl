"use client";

import AnimatedLogo from "@/components/Header/AnimatedLogo";
import useLenis from "@/hooks/useLenis";
import { ReactNode } from "react";

export default function PageWrapper({ children }: { children: ReactNode }) {
  useLenis();

  return (
    <>
      <AnimatedLogo />
      <main>{children}</main>
    </>
  );
}
