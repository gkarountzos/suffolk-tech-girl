import HeroSection from "@/components/Sections/Hero/HeroSection";
import AboutSection from "@/components/Sections/About/AboutSection";
import ServicesSection from "@/components/Sections/Services/ServicesSection";
import ContactSection from "@/components/Sections/Contact/ContactSection";

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Suffolk Tech Help",
    image: "https://www.suffolkstechgirl.co.uk/logo.png",
    "@id": "https://www.suffolkstechgirl.co.uk",
    url: "https://www.suffolkstechgirl.co.uk",
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
      <section>
        <HeroSection />
      </section>
      <section>
        <AboutSection />
      </section>
      <section>
        <ServicesSection />
      </section>
      <section>
        <ContactSection />
      </section>
    </>
  );
}
