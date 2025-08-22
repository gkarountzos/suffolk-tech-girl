"use client";

import Header from "@/components/Navigation/Header";
import useLenis from "@/hooks/useLenis";
import { ReactNode } from "react";

export default function PageWrapper({ children }: { children: ReactNode }) {
  useLenis();

  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
