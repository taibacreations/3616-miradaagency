"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { scrollToSectionId } from "@/lib/scroll";

const Founder = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();
  scrollToSectionId("contact");
};

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
      className="bg-white min-h-auto pt-[8vh] sm:pt-[10vh] pb-[4vh] sm:pb-[4vh] xl:pt-[13vh] xl:pb-[7vh]"
    >
      <div className="max-w-[1560px] mx-auto xl:px-10 md:px-6 px-4 flex flex-col md:flex-row justify-between gap-10 md:gap-6 xl:gap-10 items-center md:items-stretch">
        {/* TEXT BOX */}
        <div
          className={`flex flex-col justify-center transition-all duration-700 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="max-w-full sm:max-w-[443px]">
            <p data-anchor  className="text-[16px] sm:text-[18px] xl:text-[20px] text-black ">
              Over ons
            </p>
            <h2 className="font-bold text-[26px] sm:text-[32px] xl:text-[40px] text-[#012549] tracking-[0.02em] leading-[34px] sm:leading-[40px] xl:leading-[46px] mt-[1vh]">
              Hoi, ik ben Virgil
            </h2>
          </div>

          <div className="max-w-full sm:max-w-[607px] mt-[2.5vh]">
            <p className="text-[14px] sm:text-[16px] xl:text-[18px] leading-[129%] text-black font-normal">
              Ik help ondernemers hun online zichtbaarheid en processen op
              orde te krijgen. Samen met mijn team van specialisten in websites,
              advertenties en automatisering bouwen we systemen die werken, met
              cijfers die je zelf kunt controleren.
            </p>
            <p className="text-[14px] sm:text-[16px] xl:text-[18px] leading-[129%] text-black font-normal mt-[3.5vh]">
              Zelf werk ik al ruim 15 jaar in IT: complexe omgevingen beheren,
              systemen migreren en processen stroomlijnen. Die ervaring zet ik in
              voor ondernemers door heel Nederland. Het team doet het werk, ik blijf
              jouw vaste aanspreekpunt. Geen doorverwijzingen, geen account managers.
            </p>
            <p className="text-[14px] sm:text-[16px] xl:text-[18px] leading-[129%] text-black font-normal mt-[3.5vh]">
              Op dit moment werk ik met een beperkt aantal ondernemers aan een
              AI-pilotproject tegen een gereduceerd tarief.
            </p>


            
            <Link
              href="/#contact"
              onClick={handleContactClick}
              className="group relative overflow-hidden inline-flex justify-center items-center gap-3 sm:gap-4 md:gap-2 font-semibold text-[13px] sm:text-[14px] xl:text-[16px] text-white bg-[#0CC1FA] border-2 border-[#0CC1FA] w-full md:w-[380px] lg:w-[400px] min-h-[50px] sm:min-h-[52px] xl:min-h-[56px] px-4 rounded-[319px] mt-6 transition-all duration-500 ease-out"
            >
              <span className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />

              <span className="relative z-10 text-center transition-colors duration-300 group-hover:text-[#0CC1FA]">
                Plan een gratis kennismaking van 30 minuten
              </span>

              <span className="relative z-10 bg-white rounded-full w-[26px] h-[26px] sm:w-[30px] sm:h-[30px] flex justify-center items-center shrink-0 transition-colors duration-500 group-hover:bg-[#0CC1FA]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  className="transition-transform duration-500 group-hover:rotate-[45deg]"
                >
                  <path
                    d="M9.28 0.75H1.78M9.28 0.75V8.25M9.28 0.75L0.53 9.28"
                    stroke="#0CC1FA"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-colors duration-500 group-hover:stroke-white"
                  />
                </svg>
              </span>
            </Link>

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
