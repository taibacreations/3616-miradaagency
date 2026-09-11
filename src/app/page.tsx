import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServiceSection from "@/components/ServiceSection";
import Advantages from "@/components/Advantages";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <ServiceSection />
      <Advantages />
    </main>
  );
}