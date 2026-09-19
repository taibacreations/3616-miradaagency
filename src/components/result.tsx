"use client";

import { useEffect, useRef, useState } from "react";

const Result = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
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
    <section className="bg-white pt-[6vh]">
      <div
        ref={ref}
        className="max-w-[1560px] mx-auto xl:px-10 md:px-6 px-4"
      >
        <div
          className={`bg-[url(/result.png)] bg-cover bg-center bg-no-repeat w-full h-[380px] rounded-[19px] flex items-center px-[4.5%] transition-all duration-700 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: visible ? "0ms" : "0ms" }}
        >
          <div
            className={`max-w-[636px] transition-all duration-700 ease-out ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: visible ? "200ms" : "0ms" }}
          >
            <h3 className="font-gotham text-[20px] sm:text-[22px] xl:text-[24px] font-bold text-white">
              Klaar voor meetbaar resultaat?
            </h3>
            <p className="font-gotham text-white text-[16px] sm:text-[18px] xl:text-[20px] leading-[155%] mt-[1vh]">
              Claim je gratis Pixel- & Conversiescan en ontdek binnen 24 uur
              waar de digitale lead-lekken van jouw onderneming zitten. Geen
              verplichtingen.
            </p>

            <button className="group relative overflow-hidden mt-[2.5vh] flex justify-center items-center gap-3 font-gotham font-medium text-[15px] md:text-[13px] xl:text-[16px] text-white bg-[#0CC1FA] w-[236px] h-[53px] rounded-[319px] transition-all duration-500 ease-out hover:shadow-[0_10px_30px_rgba(12,193,250,0.5)] active:scale-95">
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
        </div>
      </div>
    </section>
  );
};

export default Result;