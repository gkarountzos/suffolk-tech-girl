import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";

export default function HomePage() {
  return (
    <main className="snap-container">
      <section className="snap-section">
        <HeroSection />
      </section>
      <section className="snap-section">
        <AboutSection />
      </section>
      <section className="snap-section">
        <ServicesSection />
      </section>
      <section className="snap-section">
        <ContactSection />
      </section>
    </main>
  );
}
