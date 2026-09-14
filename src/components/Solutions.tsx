import React from "react";
import Image from "next/image";

const Solutions = () => {
  return (
    <section className="relative min-h-[70vh] overflow-hidden">

      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg-s5.webp"
          alt=""
          fill
          className="object-cover xl:object-content object-bottom"
        />
      </div>

      {/* Actual section content */}
      <div className="relative z-10 mx-auto max-w-content px-4 sm:px-6 py-14 sm:py-20 md:py-24 lg:py-33">
        {/* Heading */}
        <div className="max-w-[990px] text-center mx-auto">
          <h2 className="font-monument font-extrabold tracking-wider text-[20px] sm:text-[25px] md:text-[30px] lg:text-[40px] capitalize text-white">
            Van Handmatig naar Automatisch
          </h2>
          <p className="font-gotham font-light text-[13px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-white leading-[18px] sm:leading-[21px] md:leading-[24px] lg:leading-[27px] capitalize">
            De meeste lokale ondernemers besteden uren per week aan taken die een computer ook kan
            doen. Laten we dat veranderen — zodat jij tijd overhoudt voor wat écht telt.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col lg:flex-row justify-center lg:gap-8 xl:gap-14 gap-10 sm:gap-12 md:gap-14 pt-12 sm:pt-16 md:pt-20 lg:pt-29">

          {/* -------------------------------------------------card 1-------------------------------------------------------- */}
          <div className="relative">

            {/* Desktop label (lg and up) — UNTOUCHED original */}
            <div className="hidden lg:block absolute translate-x-1/4 xl:translate-x-1/2 -translate-y-18">
              <img src="rectangle2.webp" alt="" />
              <h3 className="absolute inset-0 flex items-center justify-center font-gotham font-bold text-white lg:text-[22px] xl:text-[24px] -top-3">
                Nu (herkenbaar?)
              </h3>
            </div>

            {/* Mobile / tablet label (below lg) — new pill, auto-sized, never wraps */}
            <div className="lg:hidden absolute left-1/2 -translate-x-1/2 -top-4 sm:-top-5 md:-top-6 z-10">
              <div className="bg-gradient-to-r from-cyan-400 to-sky-500 px-5 py-2 sm:px-6 sm:py-2.5 md:px-7 md:py-3 rounded-xl shadow-lg">
                <h3 className="font-gotham font-bold text-white whitespace-nowrap text-[13px] text-[18px] md:text-[20px]">
                  Nu (herkenbaar?)
                </h3>
              </div>
            </div>

            <div className="bg-white px-5 pt-8 pb-8 sm:px-7 sm:pt-9 sm:pb-9 md:px-[28px] md:pt-10 md:pb-9 lg:px-[35px] lg:py-[45px] rounded-3xl flex flex-col gap-3 sm:gap-4 md:gap-[16px] lg:gap-[18px] relative">
              <div className="flex gap-2 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlnsXlink="http://www.w3.org/1999/xlink" className="shrink-0">
                  <circle cx="8.5" cy="8.5" r="8.5" fill="#012549"></circle>
                  <path d="M9.16948 8.65463L12.0156 5.80845C12.2008 5.62331 12.2008 5.32396 12.0156 5.13885C11.8305 4.95372 11.5311 4.95372 11.346 5.13885L8.49982 7.98501L5.65373 5.13885C5.4685 4.95372 5.16927 4.95372 4.98413 5.13885C4.79891 5.32399 4.79891 5.62331 4.98413 5.80845L7.8302 8.65463L4.98416 11.5008C4.79893 11.6859 4.79893 11.9853 4.98416 12.1704C5.02807 12.2144 5.08026 12.2493 5.13771 12.2732C5.19517 12.297 5.25676 12.3092 5.31895 12.3091C5.44016 12.3091 5.56141 12.2627 5.65375 12.1704L8.49982 9.32422L11.346 12.1704C11.3899 12.2144 11.4421 12.2493 11.4996 12.2732C11.557 12.297 11.6186 12.3092 11.6808 12.3091C11.802 12.3091 11.9233 12.2627 12.0156 12.1704C12.2008 11.9852 12.2008 11.6859 12.0156 11.5008L9.16948 8.65463Z" fill="#F5F9FC"></path>
                </svg>
                <p className="font-gotham font-light text-[13px] md:text-[15px] lg:text-[16px] xl:text-[18px]">
                  Handmatig elke vraag beantwoorden via telefoon en email
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlnsXlink="http://www.w3.org/1999/xlink" className="shrink-0">
                  <circle cx="8.5" cy="8.5" r="8.5" fill="#012549"></circle>
                  <path d="M9.16948 8.65463L12.0156 5.80845C12.2008 5.62331 12.2008 5.32396 12.0156 5.13885C11.8305 4.95372 11.5311 4.95372 11.346 5.13885L8.49982 7.98501L5.65373 5.13885C5.4685 4.95372 5.16927 4.95372 4.98413 5.13885C4.79891 5.32399 4.79891 5.62331 4.98413 5.80845L7.8302 8.65463L4.98416 11.5008C4.79893 11.6859 4.79893 11.9853 4.98416 12.1704C5.02807 12.2144 5.08026 12.2493 5.13771 12.2732C5.19517 12.297 5.25676 12.3092 5.31895 12.3091C5.44016 12.3091 5.56141 12.2627 5.65375 12.1704L8.49982 9.32422L11.346 12.1704C11.3899 12.2144 11.4421 12.2493 11.4996 12.2732C11.557 12.297 11.6186 12.3092 11.6808 12.3091C11.802 12.3091 11.9233 12.2627 12.0156 12.1704C12.2008 11.9852 12.2008 11.6859 12.0156 11.5008L9.16948 8.65463Z" fill="#F5F9FC"></path>
                </svg>
                <p className="font-gotham font-light text-[13px] md:text-[15px] lg:text-[16px] xl:text-[18px]]">
                  Leads vergeten op te volgen of te laat reageren
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlnsXlink="http://www.w3.org/1999/xlink" className="shrink-0">
                  <circle cx="8.5" cy="8.5" r="8.5" fill="#012549"></circle>
                  <path d="M9.16948 8.65463L12.0156 5.80845C12.2008 5.62331 12.2008 5.32396 12.0156 5.13885C11.8305 4.95372 11.5311 4.95372 11.346 5.13885L8.49982 7.98501L5.65373 5.13885C5.4685 4.95372 5.16927 4.95372 4.98413 5.13885C4.79891 5.32399 4.79891 5.62331 4.98413 5.80845L7.8302 8.65463L4.98416 11.5008C4.79893 11.6859 4.79893 11.9853 4.98416 12.1704C5.02807 12.2144 5.08026 12.2493 5.13771 12.2732C5.19517 12.297 5.25676 12.3092 5.31895 12.3091C5.44016 12.3091 5.56141 12.2627 5.65375 12.1704L8.49982 9.32422L11.346 12.1704C11.3899 12.2144 11.4421 12.2493 11.4996 12.2732C11.557 12.297 11.6186 12.3092 11.6808 12.3091C11.802 12.3091 11.9233 12.2627 12.0156 12.1704C12.2008 11.9852 12.2008 11.6859 12.0156 11.5008L9.16948 8.65463Z" fill="#F5F9FC"></path>
                </svg>
                <p className="font-gotham font-light text-[13px] md:text-[15px] lg:text-[16px] xl:text-[18px]">
                  Uren kwijt aan repetitieve administratieve taken
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlnsXlink="http://www.w3.org/1999/xlink" className="shrink-0">
                  <circle cx="8.5" cy="8.5" r="8.5" fill="#012549"></circle>
                  <path d="M9.16948 8.65463L12.0156 5.80845C12.2008 5.62331 12.2008 5.32396 12.0156 5.13885C11.8305 4.95372 11.5311 4.95372 11.346 5.13885L8.49982 7.98501L5.65373 5.13885C5.4685 4.95372 5.16927 4.95372 4.98413 5.13885C4.79891 5.32399 4.79891 5.62331 4.98413 5.80845L7.8302 8.65463L4.98416 11.5008C4.79893 11.6859 4.79893 11.9853 4.98416 12.1704C5.02807 12.2144 5.08026 12.2493 5.13771 12.2732C5.19517 12.297 5.25676 12.3092 5.31895 12.3091C5.44016 12.3091 5.56141 12.2627 5.65375 12.1704L8.49982 9.32422L11.346 12.1704C11.3899 12.2144 11.4421 12.2493 11.4996 12.2732C11.557 12.297 11.6186 12.3092 11.6808 12.3091C11.802 12.3091 11.9233 12.2627 12.0156 12.1704C12.2008 11.9852 12.2008 11.6859 12.0156 11.5008L9.16948 8.65463Z" fill="#F5F9FC"></path>
                </svg>
                <p className="font-gotham font-light text-[13px] md:text-[15px] lg:text-[16px] xl:text-[18px]">
                  Geen inzicht in wat klanten echt willen
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlnsXlink="http://www.w3.org/1999/xlink" className="shrink-0">
                  <circle cx="8.5" cy="8.5" r="8.5" fill="#012549"></circle>
                  <path d="M9.16948 8.65463L12.0156 5.80845C12.2008 5.62331 12.2008 5.32396 12.0156 5.13885C11.8305 4.95372 11.5311 4.95372 11.346 5.13885L8.49982 7.98501L5.65373 5.13885C5.4685 4.95372 5.16927 4.95372 4.98413 5.13885C4.79891 5.32399 4.79891 5.62331 4.98413 5.80845L7.8302 8.65463L4.98416 11.5008C4.79893 11.6859 4.79893 11.9853 4.98416 12.1704C5.02807 12.2144 5.08026 12.2493 5.13771 12.2732C5.19517 12.297 5.25676 12.3092 5.31895 12.3091C5.44016 12.3091 5.56141 12.2627 5.65375 12.1704L8.49982 9.32422L11.346 12.1704C11.3899 12.2144 11.4421 12.2493 11.4996 12.2732C11.557 12.297 11.6186 12.3092 11.6808 12.3091C11.802 12.3091 11.9233 12.2627 12.0156 12.1704C12.2008 11.9852 12.2008 11.6859 12.0156 11.5008L9.16948 8.65463Z" fill="#F5F9FC"></path>
                </svg>
                <p className="font-gotham font-light text-[13px] md:text-[15px] lg:text-[16px] xl:text-[18px]">
                  Website die niet werkt of verouderd is
                </p>
              </div>
            </div>
          </div>

          {/* --------------------------------------------------card 2---------------------------------------- */}
          <div className="relative">

            {/* Desktop label (lg and up) — UNTOUCHED original */}
            <div className="hidden lg:block absolute translate-x-1/8 xl:translate-x-1/3 -translate-y-18">
              <img src="rectangle1.webp" alt="" />
              <h3 className="absolute inset-0 flex items-center justify-center font-gotham font-bold text-white lg:text-[22px] xl:text-[24px]-top-3">
                Met Mirada Intelligence
              </h3>
            </div>

            {/* Mobile / tablet label (below lg) — new pill, auto-sized, never wraps */}
            <div className="lg:hidden absolute left-1/2 -translate-x-1/2 -top-4 sm:-top-5 md:-top-6 z-10">
              <div className="bg-gradient-to-r from-cyan-400 to-sky-500 px-5 py-2 sm:px-6 sm:py-2.5 md:px-7 md:py-3 rounded-xl shadow-lg">
                <h3 className="font-gotham font-bold text-white whitespace-nowrap text-[13px] sm:text-[18px] md:text-[20px]">
                  Met Mirada Intelligence
                </h3>
              </div>
            </div>

            <div className="bg-white px-5 pt-8 pb-8 sm:px-7 sm:pt-9 sm:pb-9 md:px-[28px] md:pt-10 md:pb-9 lg:px-[35px] lg:py-[45px] rounded-3xl flex flex-col gap-3 sm:gap-4 md:gap-[16px] lg:gap-[18px] relative">
              <div className="flex gap-2 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlnsXlink="http://www.w3.org/1999/xlink" className="shrink-0">
                  <circle cx="8.5" cy="8.5" r="8.5" fill="#012549"></circle>
                  <path d="M11.8373 6.19369C11.6208 5.93536 11.2691 5.93552 11.0522 6.19369L7.51851 10.4032L5.94793 8.53232C5.73106 8.27399 5.37952 8.27399 5.16265 8.53232C4.94578 8.79065 4.94578 9.20941 5.16265 9.46774L7.12579 11.8062C7.23415 11.9353 7.37625 12 7.51836 12C7.66047 12 7.8027 11.9355 7.91107 11.8062L11.8373 7.12909C12.0542 6.87094 12.0542 6.45201 11.8373 6.19369Z" fill="#F5F9FC"></path>
                </svg>
                <p className="font-gotham font-light text-[13px] md:text-[15px] lg:text-[16px] xl:text-[18px]">
                  Handmatig elke vraag beantwoorden via telefoon en email
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlnsXlink="http://www.w3.org/1999/xlink" className="shrink-0">
                  <circle cx="8.5" cy="8.5" r="8.5" fill="#012549"></circle>
                  <path d="M11.8373 6.19369C11.6208 5.93536 11.2691 5.93552 11.0522 6.19369L7.51851 10.4032L5.94793 8.53232C5.73106 8.27399 5.37952 8.27399 5.16265 8.53232C4.94578 8.79065 4.94578 9.20941 5.16265 9.46774L7.12579 11.8062C7.23415 11.9353 7.37625 12 7.51836 12C7.66047 12 7.8027 11.9355 7.91107 11.8062L11.8373 7.12909C12.0542 6.87094 12.0542 6.45201 11.8373 6.19369Z" fill="#F5F9FC"></path>
                </svg>
                <p className="font-gotham font-light text-[13px] md:text-[15px] lg:text-[16px] xl:text-[18px]">
                  Leads vergeten op te volgen of te laat reageren
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlnsXlink="http://www.w3.org/1999/xlink" className="shrink-0">
                  <circle cx="8.5" cy="8.5" r="8.5" fill="#012549"></circle>
                  <path d="M11.8373 6.19369C11.6208 5.93536 11.2691 5.93552 11.0522 6.19369L7.51851 10.4032L5.94793 8.53232C5.73106 8.27399 5.37952 8.27399 5.16265 8.53232C4.94578 8.79065 4.94578 9.20941 5.16265 9.46774L7.12579 11.8062C7.23415 11.9353 7.37625 12 7.51836 12C7.66047 12 7.8027 11.9355 7.91107 11.8062L11.8373 7.12909C12.0542 6.87094 12.0542 6.45201 11.8373 6.19369Z" fill="#F5F9FC"></path>
                </svg>
                <p className="font-gotham font-light text-[13px] md:text-[15px] lg:text-[16px] xl:text-[18px]">
                  Uren kwijt aan repetitieve administratieve taken
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlnsXlink="http://www.w3.org/1999/xlink" className="shrink-0">
                  <circle cx="8.5" cy="8.5" r="8.5" fill="#012549"></circle>
                  <path d="M11.8373 6.19369C11.6208 5.93536 11.2691 5.93552 11.0522 6.19369L7.51851 10.4032L5.94793 8.53232C5.73106 8.27399 5.37952 8.27399 5.16265 8.53232C4.94578 8.79065 4.94578 9.20941 5.16265 9.46774L7.12579 11.8062C7.23415 11.9353 7.37625 12 7.51836 12C7.66047 12 7.8027 11.9355 7.91107 11.8062L11.8373 7.12909C12.0542 6.87094 12.0542 6.45201 11.8373 6.19369Z" fill="#F5F9FC"></path>
                </svg>
                <p className="font-gotham font-light text-[13px] md:text-[15px] lg:text-[16px] xl:text-[18px]">
                  Geen inzicht in wat klanten echt willen
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlnsXlink="http://www.w3.org/1999/xlink" className="shrink-0">
                  <circle cx="8.5" cy="8.5" r="8.5" fill="#012549"></circle>
                  <path d="M11.8373 6.19369C11.6208 5.93536 11.2691 5.93552 11.0522 6.19369L7.51851 10.4032L5.94793 8.53232C5.73106 8.27399 5.37952 8.27399 5.16265 8.53232C4.94578 8.79065 4.94578 9.20941 5.16265 9.46774L7.12579 11.8062C7.23415 11.9353 7.37625 12 7.51836 12C7.66047 12 7.8027 11.9355 7.91107 11.8062L11.8373 7.12909C12.0542 6.87094 12.0542 6.45201 11.8373 6.19369Z" fill="#F5F9FC"></path>
                </svg>
                <p className="font-gotham font-light text-[13px] md:text-[15px] lg:text-[16px] xl:text-[18px]">
                  Website die niet werkt of verouderd is
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Solutions;