import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Suffolk Tech Help",
    image: "https://www.suffolktechhelp.co.uk/Logo_Gemma.png",
    "@id": "https://www.suffolktechhelp.co.uk",
    url: "https://www.suffolktechhelp.co.uk",
    telephone: "+44-XXX-XXX-XXXX",
    description:
      "Your friendly, local experts for tech support in Suffolk. We offer computer repair, network setup, mobile support, and personalized tech training.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Your Street Address",
      addressLocality: "Your Town",
      addressRegion: "Suffolk",
      postalCode: "Your Postcode",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "52.XXXXXX",
      longitude: "1.XXXXXX",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
    </>
  );
}
