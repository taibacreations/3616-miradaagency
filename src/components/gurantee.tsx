"use client";

import { useEffect, useRef, useState } from "react";

const Gurantee = () => {
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
    <section className="bg-white pt-[5vh] lg:pt-[3vh] xl:pt-[9vh] 2xl:pt-[7vh] pb-[8vh] xl:pb-[13vh]">
      {/* md:items-stretch -> dono columns ki height hamesha barabar */}
      <div
        ref={ref}
        className="max-w-[1560px] mx-auto 2xl:px-4 xl:px-2 md:px-6 px-4 flex flex-col md:flex-row md:items-stretch justify-around gap-8 lg:gap-6 xl:gap-5"
      >
        <div
          className={`w-full lg:w-[700px] xl:w-[540px] 2xl:w-[678px] transition-all duration-700 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: visible ? "0ms" : "0ms" }}
        >
          {/* mobile par natural height (h-auto), md+ par wrapper ki full height (md:h-full) */}
          <img
            src="/gurantee.png"
            alt="gurantee"
            className="rounded-[24px] w-full h-auto md:h-full object-cover"
          />
        </div>
        {/* min-height hata di: ab height image ke hisaab se decide hoti hai */}
        <div
          className={`bg-[#F5F9FC] rounded-[24px] w-full lg:w-[600px] xl:w-[730px] 2xl:w-[725px] flex flex-col justify-center h-auto px-[6%] md:px-[3%] xl:px-[5.5%] py-[4%] lg:py-[3.5%] lg:pt-[3.5%] transition-all duration-700 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: visible ? "150ms" : "0ms" }}
        >
          <h3 className="text-[28px] sm:text-[32px] xl:text-[34px] font-bold">
            Wat wij garanderen
          </h3>

          <div className="flex flex-col gap-4 mt-[3vh]">
            <div className="flex items-start gap-3">
              <img
                src="/gurantee-check.png"
                alt="check"
                className="w-[16px] sm:w-[17px] xl:w-[19px] h-auto"
              />
              <h4 className=" text-black text-[16px] sm:text-[18px] xl:text-[20px] -mt-[5px] md:-mt-[6px] lg:-mt-[5px]">
                Technisch waterdichte implementatie
              </h4>
            </div>
            <div className="flex items-start gap-3">
              <img
                src="/gurantee-check.png"
                alt="check"
                className="w-[16px] sm:w-[17px] xl:w-[19px] h-auto"
              />
              <h4 className=" text-black text-[16px] sm:text-[18px] xl:text-[20px] -mt-[5px] md:-mt-[6px] lg:-mt-[5px]">
                Wekelijks contact over de voortgang
              </h4>
            </div>
            <div className="flex items-start gap-3">
              <img
                src="/gurantee-check.png"
                alt="check"
                className="w-[16px] sm:w-[17px] xl:w-[19px] h-auto"
              />
              <h4 className=" text-black text-[16px] sm:text-[18px] xl:text-[20px] -mt-[5px] md:-mt-[6px] lg:-mt-[5px]">
                Transparante rapportages in begrijpelijk Nederlands
              </h4>
            </div>
            <div className="flex items-start gap-3">
              <img
                src="/gurantee-check.png"
                alt="check"
                className="w-[16px] sm:w-[17px] xl:w-[19px] h-auto "
              />
              <h4 className=" text-black text-[16px] sm:text-[18px] xl:text-[20px] -mt-[5px] md:-mt-[6px] lg:-mt-[5px]">
                Meetbare resultaten binnen de afgesproken termijn
              </h4>
            </div>
            <div className="flex items-start gap-3">
              <img
                src="/gurantee-check.png"
                alt="check"
                className="w-[16px] sm:w-[17px] xl:w-[19px] h-auto"
              />
              <h4 className=" text-black text-[16px] sm:text-[18px] xl:text-[20px] -mt-[5px] md:-mt-[6px] lg:-mt-[5px]">
                Geen lange contracten, flexibel en schaalbaar
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gurantee;