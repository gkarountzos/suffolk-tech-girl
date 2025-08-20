import { aboutContent } from "@/constants/content";
import AboutClient from "./AboutClient";

export default function AboutSection() {
  const content = aboutContent;

  return <AboutClient content={content} />;
}
