import Banner from "@/components/banner";
import Choose from "@/components/choose";
import Contact from "@/components/contact";
import Faq from "@/components/faq";
import Founder from "@/components/founder";
import Gurantee from "@/components/gurantee";
import Offers from "@/components/offers";
import Points from "@/components/points";
import Result from "@/components/result";
import Services from "@/components/services";
import Work from "@/components/work";

export default function Home() {
  return (
    <div>
      <Banner />
      <Services />
      <Choose />
      <Points />
      <Offers />
      <Faq />
      <Work />
      <Founder />
      <Result />
      <Gurantee />
      <Contact />
    </div>
  );
}
