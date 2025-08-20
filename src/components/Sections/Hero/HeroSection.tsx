import { heroContent } from "@/constants/content";
import HeroClient from "./HeroClient";

export default function HeroSection() {
  const content = heroContent;

  return <HeroClient content={content} />;
}
