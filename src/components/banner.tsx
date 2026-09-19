"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const checklist = [
  ["Transparante werkwijze", "Technisch waterdicht"],
  ["Vast aanspreekpunt", "Meetbare resultaten"],
];

const Banner = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="home" className='relative w-full min-h-screen bg-cover md:bg-center bg-no-repeat bg-[url("/banner.png")] bg-position-[70%] pb-[5vh]'>
  {/* Dark overlay — mobile only, so text stays readable over the image */}
  <div className="absolute inset-0 bg-black/30 xl:hidden pointer-events-none" />
      <div className="max-w-[1560px] mx-auto xl:px-10 md:px-6 px-4 pt-[22vh] sm:pt-[25vh] xl:pt-[28vh]">
        <div className="max-w-full sm:max-w-[520px] xl:max-w-[653px]">
          <div
            className={`border-white border-l-4 pl-4 xl:pl-[20px] transition-all duration-700 ease-out ${
              mounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
            }`}
          >
            <h4 className="font-gotham text-[14px] sm:text-[17px] xl:text-[20px] text-white">
              Slimme AI-Workflows & Converterende Websites
            </h4>
            <h1 className="font-monument text-[30px] leading-[34px] sm:text-[44px] sm:leading-[48px] md:text-[52px] md:leading-[56px] 2xl:text-[60px] xl:leading-[64px] text-white tracking-[0.05em] mt-[1.3vh] h1">
              Voor Lokale Ondernemers.
            </h1>
          </div>

          <h4
            className={`font-gotham text-[14px] sm:text-[17px] xl:text-[20px] text-white mt-[2.5vh] transition-all duration-700 ease-out ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: mounted ? "150ms" : "0ms" }}
          >
            AI & Marketing voor Lokale Ondernemers
          </h4>

          <p
            className={`text-white text-[14px] sm:text-[16px] xl:text-[18px] font-gotham mt-[2vh] transition-all duration-700 ease-out ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: mounted ? "280ms" : "0ms" }}
          >
            Wij dichten de online lead-lekken van ambitieuze bedrijven,
            automatiseren handmatig werk en transformeren websiteverkeer in
            loyale klanten uit de regio.
          </p>

          <div
            className={`flex flex-col sm:flex-row sm:items-center items-stretch gap-4 sm:gap-5 mt-[3vh] transition-all duration-700 ease-out ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: mounted ? "420ms" : "0ms" }}
          >
            <Link
              href={"/scan"}
              className="group relative overflow-hidden flex justify-center items-center gap-4 font-gotham font-medium text-[15px] md:text-[13px] xl:text-[16px] text-white hover:text-[#0CC1FA] bg-[#0CC1FA] w-[250px] sm:w-[240px] xl:w-[274px] h-[52px] xl:h-[56px] rounded-[319px] transition-all duration-500 ease-out"
            >
              <span className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
              <span className="relative z-10 transition-transform duration-300 ease-out">
                Claim Jouw Gratis Scan
              </span>
              <div className="relative z-10 bg-white group-hover:bg-[#0CC1FA] rounded-full w-[30px] h-[30px] flex justify-center items-center transition-transform duration-500 ease-out">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  className="transition-transform duration-500 ease-out group-hover:rotate-[45deg] group-hover:stroke-white"
                >
                  <path
                    d="M9.28027 0.750001C9.28027 0.335787 8.94449 4.2594e-07 8.53027 5.73454e-07L1.78027 1.51986e-07C1.36606 1.51986e-07 1.03027 0.335786 1.03027 0.75C1.03027 1.16421 1.36606 1.5 1.78027 1.5H7.78027V7.5C7.78027 7.91421 8.11606 8.25 8.53027 8.25C8.94449 8.25 9.28027 7.91421 9.28027 7.5L9.28027 0.750001ZM0.530273 8.75L1.0606 9.28033L9.0606 1.28033L8.53027 0.75L7.99994 0.21967L-5.66393e-05 8.21967L0.530273 8.75Z"
                    fill="#0CC1FA"
                  ></path>
                </svg>
              </div>
            </Link>

            <Link
              href="#service"
              className="group relative w-fit font-gotham font-medium text-[14px] md:text-[13px] xl:text-[16px] text-white underline-offset-4 decoration-white/60 transition-all duration-300 ease-out hover:text-[#0CC1FA] hover:decoration-[#0CC1FA]"
            >
              <span className="relative">
                Ontdek onze diensten
                <span className="absolute left-0 -bottom-[3px] h-[1px] w-full bg-current scale-x-100 origin-left transition-transform duration-300 ease-out group-hover:scale-x-0" />
                <span className="absolute left-0 -bottom-[3px] h-[1px] w-full bg-current scale-x-0 origin-right transition-transform duration-500 ease-out delay-100 group-hover:scale-x-100 group-hover:origin-left" />
              </span>
            </Link>
          </div>

          <div
            className={`bg-[url(/banner-blur.png)] bg-content xl:bg-cover bg-[length:100%_70%] xl:bg-[length:100%_100%] bg-center bg-no-repeat w-full sm:w-[440px] xl:w-[529px] h-auto xl:h-[123px] flex flex-col justify-center py-4 xl:py-0 pl-4 xl:pl-7 mt-[4vh] xl:mt-[5vh] transition-all duration-700 ease-out pb-[5vh] ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: mounted ? "560ms" : "0ms" }}
          >
            <div className="flex flex-wrap flex-col md:flex-row items-start md:items-center gap-x-5 gap-y-2 pt-6 xl:pt-0">
              {checklist[0].map((item) => (
                <div key={item} className="group flex items-center gap-2">
                  <img
                    src="/tick.png"
                    alt="check"
                    className="transition-transform duration-300 ease-out group-hover:scale-110"
                  />
                  <h5 className="font-gotham text-[14px] xl:text-[18px] text-white transition-colors duration-300 ease-out group-hover:text-[#0CC1FA] ">
                    {item}
                  </h5>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap flex-col md:flex-row items-start md:items-center gap-x-6 sm:gap-x-10 xl:gap-13 gap-y-2 mt-[1vh]">
              {checklist[1].map((item) => (
                <div key={item} className="group flex items-center gap-2">
                  <img
                    src="/tick.png"
                    alt="check"
                    className="transition-transform duration-300 ease-out group-hover:scale-110"
                  />
                  <h5 className="font-gotham text-[14px] xl:text-[18px] text-white transition-colors duration-300 ease-out group-hover:text-[#0CC1FA]">
                    {item}
                  </h5>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;