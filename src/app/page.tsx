import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import BrandingSection from "@/components/BrandingSection";
import DigitalSection from "@/components/DigitalSection";
import EngineeringSection from "@/components/EngineeringSection";
import EventsHR from "@/components/EventsHR";
import Portfolio from "@/components/Portfolio";
import Team from "@/components/Team";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <BrandingSection />
        <DigitalSection />
        <EngineeringSection />
        <EventsHR />
        <Portfolio />
        <Team />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
