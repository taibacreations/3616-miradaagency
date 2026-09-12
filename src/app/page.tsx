import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServiceSection from "@/components/ServiceSection";
import Advantages from "@/components/Advantages";
import Solutions from "@/components/Solutions";
import Guarantee from "@/components/Guarantee";
import Cta from "@/components/Cta";
import Benefits from "@/components/Benefits";
import FAQ from "@/components/FAQ";
import HowWeWork from "@/components/HowWeWork";
import AboutMirada from "@/components/AboutMirada";
import Contact from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <ServiceSection />
      <Advantages />
      <Solutions />
      <Benefits />
      <FAQ />
      <HowWeWork />
      <AboutMirada />
      <Cta />
      <Guarantee />
      <Contact />
      <Footer /> 
    </main>
  );
}