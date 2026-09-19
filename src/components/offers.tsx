"use client";

import { useEffect, useRef, useState } from "react";

const offers = [
  {
    icon: "/offer1.png",
    title: "Tijdsbesparing",
    description: "Minder handmatig werk, meer tijd voor wat telt",
  },
  {
    icon: "/offer2.png",
    title: "24/7 Online",
    description: "Website en chatbot werken ook als jij slaapt",
  },
  {
    icon: "/offer3.png",
    title: "Meer Klanten",
    description: "Advertenties gericht op mensen die nu zoeken",
  },
  {
    icon: "/offer4.png",
    title: "Geen Lock-in",
    description: "Maandelijks opzegbaar — geen gedwongen contract",
  },
];

const Offers = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white">
      <div>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:flex lg:justify-between lg:items-center gap-y-10 md:gap-y-17 lg:gap-y-10 gap-x-4 md:gap-x-6 lg:gap-x-4 xl:gap-x-6 max-w-[1530px] xl:px-10 md:px-6 px-4 mx-auto pt-[10vh] md:pt-[14vh] xl:pt-[18vh]">
          {offers.map((offer, i) => (
            <div
              key={offer.title}
              className={`relative transition-all duration-700 ease-out ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: visible ? `${i * 120}ms` : "0ms" }}
            >
              <img
                src={offer.icon}
                alt="vector"
                className="w-[50px] md:w-[65px] lg:w-[70px] xl:w-[100px] h-auto absolute left-1/2 -translate-x-1/2 top-[-20%] md:top-[-25%] lg:top-[-30%]"
              />
              <div className="w-full lg:w-[220px] xl:w-[314px] h-[150px] md:h-[165px] lg:h-[150px] xl:h-[176px] rounded-[24px] bg-[#F5F9FC] text-center px-4 lg:px-5 xl:px-7 pt-[5vh] md:pt-[5.5vh] lg:pt-[5.5vh] xl:pt-[6.5vh]">
                <h3 className="font-gotham font-bold text-[16px] sm:text-[18px] xl:text-[20px] text-[#0A192F]">
                  {offer.title}
                </h3>
                <p className="font-gotham text-[15px] lg:text-[16px] xl:text-[16px] text-black leading-[18px] md:leading-[20px] lg:leading-[19px] xl:leading-[24px] mt-[.8vh]">
                  {offer.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offers;