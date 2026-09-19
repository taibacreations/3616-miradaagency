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
    <section className="bg-white pt-[7vh] pb-[8vh] xl:pb-[13vh]">
      <div
        ref={ref}
        className="max-w-[1560px] mx-auto xl:px-10 md:px-6 px-4 flex flex-col md:flex-row justify-between items-center gap-8 lg:gap-6 xl:gap-10"
      >
        <div
          className={`w-full lg:w-[500px] xl:w-[540px] 2xl:w-[678px] transition-all duration-700 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: visible ? "0ms" : "0ms" }}
        >
          <img
            src="/gurantee.png"
            alt="gurantee"
            className="rounded-[24px] w-full h-auto"
          />
        </div>
        <div
          className={`bg-[#F5F9FC] rounded-[24px] w-full lg:w-[600px] xl:w-[700px] 2xl:w-[725px] h-auto lg:min-h-[340px] xl:min-h-[365px] px-[6%] sm:px-[5.5%] py-[4%] lg:py-[3.5%] lg:pt-[3.5%] transition-all duration-700 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: visible ? "150ms" : "0ms" }}
        >
          <h3 className="font-gotham text-[20px] sm:text-[22px] xl:text-[24px] font-bold">
            Wat wij garanderen
          </h3>

          <div className="flex flex-col gap-4 mt-[1vh]">
            <div className="flex items-center gap-3">
              <img
                src="/gurantee-check.png"
                alt="check"
                className="w-[16px] sm:w-[17px] xl:w-[19px] h-auto"
              />
              <h4 className="font-gotham text-black text-[16px] sm:text-[18px] xl:text-[20px]">
                Technisch waterdichte implementatie
              </h4>
            </div>
            <div className="flex items-center gap-3">
              <img
                src="/gurantee-check.png"
                alt="check"
                className="w-[16px] sm:w-[17px] xl:w-[19px] h-auto"
              />
              <h4 className="font-gotham text-black text-[16px] sm:text-[18px] xl:text-[20px]">
                Wekelijks contact over de voortgang
              </h4>
            </div>
            <div className="flex items-center gap-3">
              <img
                src="/gurantee-check.png"
                alt="check"
                className="w-[16px] sm:w-[17px] xl:w-[19px] h-auto"
              />
              <h4 className="font-gotham text-black text-[16px] sm:text-[18px] xl:text-[20px]">
                Transparante rapportages in begrijpelijk Nederlands
              </h4>
            </div>
            <div className="flex items-center gap-3">
              <img
                src="/gurantee-check.png"
                alt="check"
                className="w-[16px] sm:w-[17px] xl:w-[19px] h-auto"
              />
              <h4 className="font-gotham text-black text-[16px] sm:text-[18px] xl:text-[20px]">
                Meetbare resultaten binnen de afgesproken termijn
              </h4>
            </div>
            <div className="flex items-center gap-3">
              <img
                src="/gurantee-check.png"
                alt="check"
                className="w-[16px] sm:w-[17px] xl:w-[19px] h-auto"
              />
              <h4 className="font-gotham text-black text-[16px] sm:text-[18px] xl:text-[20px]">
                Geen lange contracten — flexibel en schaalbaar
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gurantee;