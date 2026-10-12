"use client";

import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "Thomas de Vries",
    company: "De Vries Installatietechniek",
    review:
      "De samenwerking voelde persoonlijk en duidelijk. Er werd goed geluisterd naar onze wensen en we wisten steeds waar we aan toe waren.",
    rating: 4,
    image: "/client1.webp",
  },
  {
    name: "Sophie Jansen",
    company: "Jansen Marketing & Advies",
    review:
      "Fijn om met iemand te werken die ingewikkelde zaken begrijpelijk maakt. De communicatie was helder en we konden snel schakelen.",
    rating: 5,
    image: "/client2.webp",
  },
  {
    name: "Daan Bakker",
    company: "Bakker Automotive",
    review:
      "We hebben samen gekeken waar we tijd konden besparen en processen slimmer konden inrichten. De praktische aanpak sprak ons erg aan.",
    rating: 4,
    image: "/client3.webp",
  },
];

const Testimonials = () => {
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
      { threshold: 0.1 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="ervaringen"
      className="bg-white pb-3 2xl:pt-[12.5vh] xl:pt-[10vh] lg:pt-[80px] md:pt-[80px] pt-[50px] pb-0"
    >
      <div className="max-w-[1560px] mx-auto px-4 md:px-6 xl:px-10">
        {/* Section heading */}
        <div
          className={`max-w-[680px] mx-auto text-center transition-all duration-700 motion-reduce:transition-none ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-[14px] sm:text-[16px] font-semibold text-[#0A78AE]">
            Ervaringen van klanten
          </p>

          <h2 className="font-bold text-[26px] sm:text-[32px] xl:text-[38px] text-[#012549] leading-[1.15] tracking-tight mt-2">
            Samenwerken begint met vertrouwen
          </h2>

          <p className="text-[14px] sm:text-[16px] text-[#3B4B5E] leading-normal mt-3">
            Goede samenwerking draait om duidelijke communicatie, praktische
            oplossingen en samen vooruitgaan.
          </p>
        </div>

        {/* Testimonial cards */}
        <div
          className={`mt-8 xl:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 xl:gap-4 transition-opacity duration-700 motion-reduce:transition-none ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          {testimonials.map((item, i) => (
            <article
              key={i}
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-[#F5F9FC] p-5 xl:p-6 ring-1 ring-[#E1ECF4] transition duration-300 hover:-translate-y-1 hover:bg-white hover:ring-[#0A78AE]/30 hover:shadow-[0_12px_10px_-12px_rgba(1,37,73,0.25)]"
            >
              

              {/* Big quote mark */}
              <span
                aria-hidden="true"
                className="absolute right-5 top-2 text-[72px] leading-none font-serif text-[#0A78AE]/10 select-none"
              >
                &rdquo;
              </span>

              {/* Stars */}
              <div
                className="relative flex gap-0.5 text-[18px] leading-none"
                role="img"
                aria-label={`${item.rating} van 5 sterren`}
              >
                {Array.from({ length: 5 }).map((_, star) => (
                  <span
                    key={star}
                    className={
                      star < item.rating ? "text-[#F5A623]" : "text-[#D5E2EC]"
                    }
                  >
                    ★
                  </span>
                ))}
              </div>

              {/* Review */}
              <p className="relative text-[15px] leading-[1.55] text-[#24364B] mt-3 flex-1">
                {item.review}
              </p>

              {/* Customer details */}
              <div className="flex items-center gap-3 mt-4 pt-4 border-t border-[#DCE8F1]">
                <div className="w-11 h-11 rounded-full shrink-0 overflow-hidden bg-[#DDECF6] ring-2 ring-white">
                  <img
                    src={item.image}
                    alt={`Foto van ${item.name}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>

                <div className="min-w-0">
                  <h3 className="font-semibold text-[15px] leading-tight text-[#012549]">
                    {item.name}
                  </h3>
                  <p className="text-[13px] leading-tight text-[#5B6B7C] mt-0.5">
                    {item.company}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;