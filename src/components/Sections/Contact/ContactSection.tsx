import { contactContent, footerContent } from "@/constants/content";
import ContactClient from "./ContactClient";

export default function ContactSection() {
  const content = contactContent;
  const footerData = footerContent;

  return <ContactClient content={content} footerContent={footerData} />;
}
