import { Variants } from "framer-motion";

export const DesktopLogoVariants: Variants = {
  top: {
    opacity: 1,
    scale: 0.8,
    top: "17%",
    left: "50%",
    x: "-50%",
    y: "-50%",
  },
  scrolled: {
    opacity: 1,
    scale: 0.25,
    left: "2.5%",
    top: "2.5rem",
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: "easeInOut" },
  },
};

export const MobileLogoVariants: Variants = {
  top: {
    opacity: 1,
    scale: 0.75,
    top: "15%",
    left: "50%",
    x: "-50%",
    y: "-50%",
  },
  scrolled: {
    opacity: 1,
    scale: 0.25,
    left: "15%",
    top: "2.5rem",
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: "easeInOut" },
  },
};

export const TabletLogoVariants: Variants = {
  top: {
    opacity: 1,
    scale: 0.25,
    left: "5%",
    top: "2.5rem",
    x: "-50%",
    y: "-50%",
  },
  scrolled: {
    opacity: 1,
    scale: 0.25,
    left: "5%",
    top: "2.5rem",
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: "easeInOut" },
  },
};

export const LaptopLogoVariants: Variants = {
  top: {
    opacity: 1,
    scale: 0.7,
    top: "15%",
    left: "50%",
    x: "-50%",
    y: "-50%",
  },
  scrolled: {
    opacity: 1,
    scale: 0.25,
    left: "5.5%",
    top: "2.5rem",
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: "easeInOut" },
  },
};

export const LargeLaptopLogoVariants: Variants = {
  top: {
    opacity: 1,
    scale: 0.2,
    left: "3.5%",
    top: "2.5rem",
    x: "-50%",
    y: "-50%",
  },
  scrolled: {
    opacity: 1,
    scale: 0.2,
    left: "3.5%",
    top: "2.5rem",
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: "easeInOut" },
  },
};
