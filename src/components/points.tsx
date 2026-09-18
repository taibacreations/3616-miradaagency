"use client";

import { useEffect, useRef, useState } from "react";

const nowPoints = [
  "Handmatig elke vraag beantwoorden via telefoon en email",
  "Leads vergeten op te volgen of te laat reageren",
  "Uren kwijt aan repetitieve administratieve taken",
  "Geen inzicht in wat klanten echt willen",
  "Website die niet werkt of verouderd is",
];

const withPoints = [
  "Website werkt als 24/7 verkoopkanaal en laat je bedrijf stralen",
  "AI chatbot vangt standaardvragen automatisch op",
  "Automatiseringen volgen leads op — geen gemiste kansen",
  "Minder tijd aan administratie, meer tijd voor klanten",
  "Eenvoudige rapportages zodat je ziet wat werkt",
];

const Points = () => {
  const sectionRef = useRef<HTMLElement>(null);
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
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[url(/points.png)] bg-cover bg-center bg-no-repeat pb-[10vh] xl:pb-[21vh]"
    >
      <div className="pt-[8vh] xl:pt-[14.5vh]">
        <div className="max-w-full xl:max-w-[984px] mx-auto text-center px-4 xl:px-0">
          <h2 className="font-monument font-extrabold text-[26px] sm:text-[32px] xl:text-[40px] text-white tracking-[0.02em] leading-[32px] sm:leading-[38px] xl:leading-[46px]">
            Van Handmatig naar Automatisch
          </h2>
          <p className="font-gotham text-[15px] sm:text-[16px] xl:text-[18px] text-white mt-[1.5vh]">
            De meeste lokale ondernemers besteden uren per week aan taken die
            een computer ook kan doen. Laten we dat veranderen — zodat jij tijd
            overhoudt voor wat écht telt.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-16 xl:gap-0 max-w-[1430px] xl:px-10 md:px-6 px-4 mx-auto mt-[8vh] xl:mt-[11.5vh]">
          {/* Nu (herkenbaar?) card */}
          <div
            className={`relative w-full xl:w-auto mt-[30px] xl:mt-0 transition-all duration-700 ease-out ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="bg-[url(/red.png)] bg-cover bg-center bg-no-repeat w-[220px] sm:w-[260px] xl:w-[313px] h-[64px] sm:h-[76px] xl:h-[91px] flex justify-center items-center absolute left-1/2 -translate-x-1/2 top-[-30px] xl:top-[-23%]">
              <h3 className="font-gotham font-extrabold text-[16px] sm:text-[19px] xl:text-[24px] text-white relative top-[-13%]">
                Nu (herkenbaar?)
              </h3>
            </div>
            <div className="bg-[#F5F9FC] rounded-[24px] w-full 2xl:w-[648px] xl:w-[630px] md:w-[450px] h-auto xl:h-[291px] flex justify-center flex-col gap-4 xl:gap-5 pl-6 sm:pl-7 xl:pl-8.5 pr-6 xl:pr-0 py-8 xl:py-0 z-10 relative">
              {nowPoints.map((text) => (
                <div key={text} className="flex items-center gap-2">
                  <img
                    src="/cross.png"
                    alt="cross"
                    className="w-[14px] sm:w-[15px] xl:w-[17px] h-auto shrink-0"
                  />
                  <h3 className="font-gotham text-[14px] sm:text-[16px] xl:text-[18px] text-[#333333]">
                    {text}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          {/* Met Mirada Intelligence card */}
          <div
            className={`relative w-full xl:w-auto mt-[30px] xl:mt-0 transition-all duration-700 ease-out ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: visible ? "150ms" : "0ms" }}
          >
            <div className="bg-[url(/green.png)] bg-cover bg-center bg-no-repeat w-[260px] sm:w-[320px] xl:w-[394px] h-[64px] sm:h-[76px] xl:h-[91px] flex justify-center items-center absolute left-1/2 -translate-x-1/2 top-[-30px] xl:top-[-23%]">
              <h3 className="font-gotham font-extrabold text-[16px] sm:text-[19px] xl:text-[24px] text-white relative top-[-13%]">
                Met Mirada Intelligence
              </h3>
            </div>
            <div className="bg-[#F5F9FC] rounded-[24px] w-full 2xl:w-[648px] xl:w-[630px] md:w-[450px] h-auto xl:h-[291px] flex justify-center flex-col gap-4 xl:gap-5 pl-6 sm:pl-7 xl:pl-8.5 pr-6 xl:pr-0 py-8 xl:py-0 z-10 relative">
              {withPoints.map((text) => (
                <div key={text} className="flex items-center gap-2">
                  <img
                    src="/check.png"
                    alt="check"
                    className="w-[14px] sm:w-[15px] xl:w-[17px] h-auto shrink-0"
                  />
                  <h3 className="font-gotham text-[14px] sm:text-[16px] xl:text-[18px] text-[#333333]">
                    {text}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Points;