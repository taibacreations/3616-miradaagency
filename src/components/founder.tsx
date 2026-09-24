"use client";

import { useEffect, useRef, useState } from "react";

const founderFaqs = [
  {
    question: "Werken jullie voor specifieke branches?",
    answer:
      "Mirada Agency helpt lokale ondernemers, high-ticket dienstverleners en regionale bedrijven die willen opschalen. Of je nu een exclusieve praktijk runt, een high-end servicebedrijf of een lokaal autobedrijf, onze systemen en AI-workflows zijn flexibel en worden volledig op maat ingericht voor jouw specifieke bedrijfsproces.",
  },
  {
    question: "Wat houdt de gratis scan precies in?",
    answer:
      "We controleren de website van jouw bedrijf op de drie belangrijkste conversie-pijlers: de aanwezigheid en correcte installatie van tracking-pixels (zoals de Meta Pixel), de mobiele gebruiksvriendelijkheid in de praktijk, en technische lead-lekken (zoals SSL-beveiliging en laadsnelheid). Je ontvangt een concreet actieplan om dit direct te dichten.",
  },
  {
    question: "Wat is een AI-pilotproject?",
    answer:
      "Omdat we geloven in het bewijzen van waarde aan ondernemers in de regio, starten we met een aantal geselecteerde bedrijven een kortstondig pilotproject. Hierin automatiseren we één specifiek knelpunt in je organisatie (bijvoorbeeld de automatische opvolging van lokale leads) tegen een gereduceerd tarief, zodat je direct de ROI ervaart.",
  },
];

const Founder = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

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
    <section id="over"
      ref={sectionRef}
      className="bg-white min-h-screen pt-[8vh] sm:pt-[10vh] xl:pt-[13vh]"
    >
      <div className="max-w-[1560px] mx-auto xl:px-10 md:px-6 px-4 flex flex-col md:flex-row justify-between gap-10 md:gap-6 xl:gap-10">
        <div
          className={`transition-all duration-700 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="max-w-full sm:max-w-[443px]">
            <p className="font-gotham text-[16px] sm:text-[18px] xl:text-[20px] text-black capitalize">
              Over mirada agency
            </p>
            <h2 className="font-monument font-extrabold text-[26px] sm:text-[32px] xl:text-[40px] text-[#012549] tracking-[0.02em] leading-[34px] sm:leading-[40px] xl:leading-[46px] mt-[1vh] ">
              Het gezicht achter mirada
            </h2>
          </div>

          <div className="max-w-full sm:max-w-[607px] mt-[2.5vh]">
            <p className="font-gotham text-[14px] sm:text-[16px] xl:text-[18px] leading-[129%] text-black font-normal">
              Achter Mirada Agency staat Virgil Ippel. Met meer dan 15
              jaar diepgaande expertise in het leiden van complexe
              IT-omgevingen, systeemtransities en procesoptimalisaties, breng ik
              het beste van twee werelden samen naar de lokale ondernemer:
              hardcore IT-structuur en resultaatgerichte online marketing.
            </p>
            <p className="font-gotham text-[14px] sm:text-[16px] xl:text-[18px] leading-[129%] text-black font-normal mt-[3.5vh]">
              Bij Mirada geloven we niet in ingewikkelde marketingtermen, wel in
              transparantie, korte lijnen en meetbaar resultaat in de regio. We
              introduceren nu tijdelijk exclusieve AI-pilotprojecten voor een
              geselecteerd aantal ambitieuze lokale bedrijven om de keiharde
              kracht van onze geautomatiseerde workflows te bewijzen.
            </p>
          </div>

          <div className="mt-[3vh]">
            <h5 className="text-[14px] sm:text-[16px] xl:text-[18px] font-bold text-[#012549] leading-[129%]">
              Veelgestelde vragen:
            </h5>
          </div>

          <div className="w-full xl:w-[667px] mt-[1.3vh] flex flex-col gap-5">
            {founderFaqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={faq.question}
                  className={`rounded-[16px] overflow-hidden transition-all duration-500 ease-out ${
                    isOpen ? "bg-[#012549]" : "bg-[#F5F9FC] hover:bg-[#E9ECEF]"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                    className="w-full flex items-center justify-between gap-4 pl-6 sm:pl-8 xl:pl-5 pr-5 py-4 text-left"
                  >
                    <span
                      className={`font-gotham font-bold text-[14px] sm:text-[16px] xl:text-[18px] transition-colors duration-300 ${
                        isOpen ? "text-white" : "text-[#0A192F]"
                      }`}
                    >
                      {faq.question}
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className={`shrink-0 transition-transform duration-300 ease-out ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                    >
                      <path
                        d="M3 6L8 11L13 6"
                        stroke={isOpen ? "#ffffff" : "#0A192F"}
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  <div
                    className="grid transition-[grid-template-rows] duration-500 ease-out"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="font-gotham text-[14px] sm:text-[15px] xl:text-[16px] leading-[22px] xl:leading-[24px] text-white/85 pl-6 sm:pl-8 xl:pl-5 pr-5 pb-5">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div
          className={`bg-[#012549] w-full md:w-[320px] lg:w-[460px] xl:w-[560px] 2xl:w-[682px] h-[300px] sm:h-[420px] md:h-[420px] lg:h-[540px] xl:h-[620px] 2xl:h-[681px] rounded-[24px] sticky top-20 flex justify-center items-center shrink-0 transition-all duration-700 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: visible ? "200ms" : "0ms" }}
        >
          <img
            src="/founder-vector.png"
            alt="vector"
            className="absolute top-0 left-1/2 -translate-x-1/2 rounded-[24px] w-[300px] sm:w-[420px] md:w-[320px] lg:w-[460px] xl:w-[560px] 2xl:w-[682px] h-auto"
          />
          <div className="relative flex flex-col justify-center items-center text-center">
            <img
              src="/founder.png"
              alt="founder"
              className="w-[160px] sm:w-[230px] md:w-[220px] lg:w-[310px] xl:w-[373px] h-auto"
            />
            <h3 className="font-gotham text-[22px] sm:text-[30px] md:text-[28px] lg:text-[38px] xl:text-[44px] font-extrabold text-white mt-[-1.5vh]">
              Virgil Ippel
            </h3>
            <p className="font-gotham text-[15px] sm:text-[19px] md:text-[18px] lg:text-[24px] xl:text-[28px] text-white mt-[1.5vh]">
              Mirada Agency
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;