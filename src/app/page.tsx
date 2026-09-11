import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServiceSection from "@/components/ServiceSection";
import Advantages from "@/components/Advantages";
import Solutions from "@/components/Solutions";
import Guarantee from "@/components/Guarantee";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <ServiceSection />
      <Advantages />
      <Solutions />
      <Guarantee />
    </main>
  );
}