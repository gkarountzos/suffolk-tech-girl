import { servicesContent } from "@/constants/content";
import ServicesClient from "./ServicesClient";

export default function ServicesSection() {
  const content = servicesContent;

  return <ServicesClient content={content} />;
}
