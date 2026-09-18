"use client";

import { useEffect, useRef, useState } from "react";

const faqs = [
  {
    question: "Wat is die gratis scan precies?",
    answer:
      "De gratis scan is een korte analyse van je website en online aanwezigheid. Wij bekijken waar je bezoekers afhaken, welke technische problemen er spelen en welke kansen je momenteel laat liggen. Binnen 24 uur ontvang je een helder overzicht — geen verkooppraatje, gewoon feiten.",
  },
  {
    question: "Ik heb al een website. Kan Mirada toch helpen?",
    answer:
      "Zeker. Veel van onze klanten hebben al een website, maar zien niet de resultaten die ze verwachten. Wij optimaliseren bestaande sites, bouwen automatiseringen erbovenop, of adviseren een gerichte vernieuwing — afhankelijk van wat het meeste oplevert.",
  },
  {
    question: "Moet ik al technisch onderlegd zijn?",
    answer:
      "Nee, helemaal niet. Wij leggen alles uit in helder Nederlands, zonder jargon. Jij hoeft niets te bouwen of te beheren — wij regelen de techniek en houden je op de hoogte in taal die je begrijpt.",
  },
  {
    question: "Hoe snel zie ik resultaten?",
    answer:
      "Dat verschilt per traject. Websites staan meestal binnen 2–4 weken live, AI-workflows zijn vaak binnen 1–2 weken operationeel. Meetbare resultaten in leads en conversies zie je doorgaans binnen de eerste maand.",
  },
  {
    question: "Zit ik vast aan een lang contract?",
    answer:
      "Nee. Wij werken met flexibele contracten die meeschalen met jouw groei. Geen verborgen looptijden of opzegtermijnen die je verrassen — transparantie staat voorop.",
  },
  {
    question: "Werken jullie alleen lokaal of ook nationaal?",
    answer:
      "Ons hart ligt bij lokale ondernemers, maar we werken door heel Nederland. Of je nu in de regio zit of landelijk actief bent, wij bouwen systemen die overal werken.",
  },
];

const Faq = () => {
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
    <section ref={sectionRef} className="bg-white relative overflow-hidden">
      <img
        src="/faq-vector.png"
        alt="vector"
        className="hidden xl:block absolute bottom-[24%] right-[-2%] w-[300px] 2xl:w-auto"
      />
      <div className="max-w-[1560px] mx-auto xl:px-10 md:px-6 px-4 pt-[8vh] sm:pt-[10vh] xl:pt-[13vh]">
        <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-8 xl:gap-10">
          {/* Left column */}
          <div
            className={`w-full md:max-w-[380px] lg:max-w-[500px] xl:max-w-[667px] transition-all duration-700 ease-out ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="max-w-full sm:max-w-[508px]">
              <h2 className="font-monument font-extrabold text-[26px] sm:text-[32px] xl:text-[40px] text-[#012549] tracking-[0.02em] leading-[34px] sm:leading-[40px] xl:leading-[46px] max-w-full sm:max-w-[403px]">
                Alles wat
                <br /> je wil weten
              </h2>
              <p className="font-gotham text-[14px] sm:text-[16px] xl:text-[18px] text-black mt-[2.5vh]">
                Geen vage antwoorden. Gewoon eerlijk en to the point.
              </p>
            </div>

            <div className="w-full md:w-full xl:w-[667px] mt-[3vh] flex flex-col gap-5">
              {faqs.map((faq, i) => {
                const isOpen = openIndex === i;
                return (
                  <div
                    key={faq.question}
                    className={`rounded-[16px] overflow-hidden transition-all duration-500 ease-out ${
                      isOpen
                        ? "bg-[#012549]"
                        : "bg-[#F3F5F7] hover:bg-[#E9ECEF]"
                    }`}
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? -1 : i)}
                      className="w-full flex items-center justify-between gap-4 pl-6 sm:pl-8 xl:pl-10 pr-5 py-4 text-left"
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
                      style={{
                        gridTemplateRows: isOpen ? "1fr" : "0fr",
                      }}
                    >
                      <div className="overflow-hidden">
                        <p className="font-gotham text-[14px] sm:text-[15px] xl:text-[16px] leading-[22px] xl:leading-[24px] text-white/85 pl-6 sm:pl-8 xl:pl-10 pr-5 pb-5">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <h4 className="font-gotham text-[14px] sm:text-[16px] xl:text-[18px] text-black mt-[3.5vh]">
              Staat jouw vraag er niet bij?
            </h4>

            <button className="group relative overflow-hidden mt-[2.5vh] flex justify-center items-center gap-3 font-gotham font-medium ext-[15px] xl:text-[16px] text-white bg-[#0CC1FA] w-full sm:w-[233px] h-[52px] sm:h-[56px] rounded-[319px] transition-all duration-500 ease-out hover:shadow-[0_10px_30px_rgba(12,193,250,0.5)] active:scale-95">
              <span className="absolute inset-0 bg-gradient-to-r from-[#0aa8dd] to-[#0CC1FA] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
              <span className="relative z-10">Stel je vraag direct</span>
              <div className="relative z-10 bg-white rounded-full w-[24px] h-[24px] flex justify-center items-center transition-transform duration-500 ease-out group-hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="9"
                  height="9"
                  viewBox="0 0 10 10"
                  fill="none"
                  className="transition-transform duration-500 ease-out group-hover:rotate-[45deg]"
                >
                  <path
                    d="M9.28027 0.750001C9.28027 0.335787 8.94449 4.2594e-07 8.53027 5.73454e-07L1.78027 1.51986e-07C1.36606 1.51986e-07 1.03027 0.335786 1.03027 0.75C1.03027 1.16421 1.36606 1.5 1.78027 1.5H7.78027V7.5C7.78027 7.91421 8.11606 8.25 8.53027 8.25C8.94449 8.25 9.28027 7.91421 9.28027 7.5L9.28027 0.750001ZM0.530273 8.75L1.0606 9.28033L9.0606 1.28033L8.53027 0.75L7.99994 0.21967L-5.66393e-05 8.21967L0.530273 8.75Z"
                    fill="#0CC1FA"
                  ></path>
                </svg>
              </div>
            </button>
          </div>

          {/* Right column — image */}
          <div
            className={`w-full md:w-[300px] lg:w-[440px] xl:w-[560px] 2xl:w-[679px] h-auto shrink-0 z-10 transition-all duration-700 ease-out ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: visible ? "200ms" : "0ms" }}
          >
            <img
              src="/faq.png"
              alt="team working"
              className="w-full object-cover rounded-[24px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;