"use client";

import { useEffect, useRef, useState } from "react";

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
    <section
      id="over"
      ref={sectionRef}
      className="bg-white min-h-auto pt-[8vh] sm:pt-[10vh] pb-[4vh] sm:pb-[4vh] xl:pt-[13vh] xl:pb-[8vh] 2xl:pb-[15vh]"
    >
      <div className="max-w-[1560px] mx-auto xl:px-10 md:px-6 px-4 flex flex-col md:flex-row justify-between gap-10 md:gap-6 xl:gap-10 items-center md:items-stretch">
        {/* TEXT BOX */}
        <div
          className={`flex flex-col justify-center transition-all duration-700 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="max-w-full sm:max-w-[443px]">
            <p className="text-[16px] sm:text-[18px] xl:text-[20px] text-black capitalize">
              Over Mirada Agency
            </p>
            <h2 className="font-bold text-[26px] sm:text-[32px] xl:text-[40px] text-[#012549] tracking-[0.02em] leading-[34px] sm:leading-[40px] xl:leading-[46px] mt-[1vh]">
              Het gezicht achter Mirada Agency
            </h2>
          </div>

          <div className="max-w-full sm:max-w-[607px] mt-[2.5vh]">
            <p className="text-[14px] sm:text-[16px] xl:text-[18px] leading-[129%] text-black font-normal">
              Achter Mirada Agency staat Virgil Ippel. Vanuit zijn jarenlange
              ervaring met het leiden van complexe IT-omgevingen,
              systeemtransities en procesoptimalisaties, brengt hij het beste van
              twee werelden samen voor de lokale ondernemer: hardcore
              IT-structuur en resultaatgerichte online marketing.
            </p>
            <p className="text-[14px] sm:text-[16px] xl:text-[18px] leading-[129%] text-black font-normal mt-[3.5vh]">
              Bij Mirada Agency geloven we niet in ingewikkelde marketingtermen,
              wel in transparantie, korte lijnen en meetbaar resultaat in de
              regio. We introduceren nu tijdelijk exclusieve AI-pilotprojecten
              voor een geselecteerd aantal ambitieuze lokale bedrijven om de
              keiharde kracht van onze geautomatiseerde workflows te bewijzen.
            </p>
          </div>
        </div>

        {/* IMAGE CARD */}
        <div
          className={`relative overflow-hidden bg-[#012549] w-full md:w-[320px] lg:w-[460px] xl:w-[560px] 2xl:w-[682px] h-[300px] sm:h-[420px] md:h-auto md:min-h-[400px] 2xl:h-[511px] 2xl:min-h-0 2xl:self-center rounded-[24px] flex flex-col items-center justify-end 2xl:justify-center shrink-0 transition-all duration-700 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: visible ? "200ms" : "0ms" }}
        >
          <img
            src="/founder-vector.png"
            alt="vector"
            className="absolute -top-20 md:top-0 2xl:-top-28 left-0 w-full h-auto rounded-[24px] pointer-events-none"
          />

          <div className="relative z-10 flex flex-col items-center text-center w-full h-full min-h-0 px-4 pt-6 pb-4 md:pb-6 2xl:h-auto 2xl:p-0">
            <img
              src="/founder.png"
              alt="founder"
              className="flex-1 min-h-0 w-auto max-w-full object-contain 2xl:flex-none 2xl:w-[340px] 2xl:max-w-none 2xl:h-auto"
            />
            <h3 className="text-[22px] sm:text-[30px] md:text-[28px] lg:text-[38px] xl:text-[44px] 2xl:text-[33px] font-bold text-white mt-2 2xl:mt-[-1vh]">
              Virgil Ippel
            </h3>
            <p className="text-[15px] sm:text-[19px] md:text-[18px] lg:text-[24px] xl:text-[28px] 2xl:text-[21px] text-white mt-[1vh] 2xl:mt-[1.5vh]">
              Mirada Agency
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;