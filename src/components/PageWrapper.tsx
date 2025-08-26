"use client";

import Header from "@/components/Navigation/Header";
import ReactLenis, { useLenis } from "lenis/react";
import { ReactNode } from "react";

export default function PageWrapper({ children }: { children: ReactNode }) {
  useLenis();
  return (
    <>
      <Header />
      <ReactLenis root options={{ duration: 1.2 }}>
        <main>{children}</main>
      </ReactLenis>
    </>
  );
}
