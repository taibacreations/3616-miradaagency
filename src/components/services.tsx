"use client";

import { useEffect, useRef, useState } from "react";

const services = [
  {
    image: "/services1.png",
    title: "High-Converting websites",
    description:
      "Wij bouwen loeistrakke, pixel-perfecte websites...",
    fullDescription:
      "Wij bouwen loeistrakke, pixel-perfecte websites die specifiek zijn ontworpen om lokale bezoekers om te zetten in betalende klanten. Volledig geoptimaliseerd voor mobiel, razendsnel en technisch waterdicht zodat je geen klant meer misloopt.",
    bullets: [
      "Pixel-perfect design dat vertrouwen wekt",
      "Razendsnel & technisch waterdicht",
      "SEO-geoptimaliseerd voor lokale vindbaarheid",
      "Live in 2 tot 4 weken",
    ],
  },
  {
    image: "/services2.png",
    title: "AI & workflow automation",
    description:
      "Eliminate repetitive manual work in your...",
    fullDescription:
      "Elimineer repetitief handmatig werk in je onderneming. Wij bouwen slimme AI-workflows en koppelingen die je leadopvolging, administratie of klantbeheer 24/7 automatisch laten draaien. Meer rust, minder overhead.",
    bullets: [
      "24/7 automatische leadopvolging",
      "AI-koppelingen tussen je systemen",
      "Minder handmatig werk, minder fouten",
      "Schaalbaar mee met je groei",
    ],
  },
  {
    image: "/services4.webp",
    title: "AI chatbots",
    description:
      "Een slimme chatbot op je website die bezoekers direct antwoord geeft...",
fullDescription:
  "Een slimme chatbot op je website die bezoekers direct antwoord geeft, ook 's avonds en in het weekend. Hij vangt terugkerende vragen over openingstijden, tarieven en beschikbaarheid automatisch op, en schakelt door naar jou zodra er een echte aanvraag binnenkomt.",
    bullets: [
      "Beantwoordt standaardvragen 24/7",
      "Getraind op jouw diensten en tarieven",
      "Schakelt door naar jou bij echte aanvragen",
      "Minder telefoontjes, meer gekwalificeerde leads",
    ],
  },
  {
    image: "/services3.png",
    title: "Regional marketing & retargeting",
    description: "We drive targeted traffic to your business via...",
    fullDescription:
      "Wij brengen gericht verkeer naar je bedrijf via strategische, lokale campagnes (Meta & Google) op jouw verzorgingsgebied. Met de juiste tracking zorgen we dat misgelopen bezoekers uit de regio alsnog converteren.",
    bullets: [
      "Lokale Google & Meta campagnes",
      "Meta Pixel correct geïnstalleerd",
      "Retargeting van website-bezoekers",
      "Maandelijkse rapportage in helder Nederlands",
    ],
  },
];

const ServiceCard = ({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);

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
    <div
      ref={ref}
      data-open={open}
      role="button"
      tabIndex={0}
      aria-expanded={open}
      onClick={() => setOpen((prev) => !prev)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setOpen((prev) => !prev);
        }
      }}
      className={`group relative w-full h-[430px] cursor-pointer transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: visible ? `${index * 120}ms` : "0ms" }}
    >
      {/* Arrow — hides on hover/click; image is untouched */}
      <img
        src="/arrow.png"
        alt="arrow"
        className="absolute w-[29px] h-auto right-3 top-3 z-10 transition-all duration-300 ease-out group-hover:opacity-0 group-hover:scale-50 group-hover:rotate-45 group-data-[open=true]:opacity-0 group-data-[open=true]:scale-50 group-data-[open=true]:rotate-45"
      />

      {/* Image — completely static, no scale/move on hover */}
      <img
        src={service.image}
        alt={service.title}
        className="absolute inset-0 w-full h-full object-cover rounded-[24px]"
      />

      {/* White box — moves from bottom-overlap to top of the image on hover/click */}
            <div className="absolute left-1/2 -translate-x-1/2 w-[90%] max-w-[376px] top-[335px] group-hover:top-[20px] lg:group-hover:top-[150px] xl:group-hover:top-[20px] group-data-[open=true]:top-[20px] lg:group-data-[open=true]:top-[150px] xl:group-data-[open=true]:top-[20px] bg-white xl:rounded-[22px] rounded-[18px] xl:px-7 px-4 py-[1.5vh] service-shadow transition-all duration-500 ease-out overflow-hidden z-20      hover:h-auto    h-[110px] sm:h-[115px] lg:h-[100px] xl:h-[150px] 2xl:h-[135px]    group-data-[open=true]:h-auto    flex flex-col justify-center">
        <h3 className="xl:text-[20px] text-[16px] font-gotham font-bold xl:leading-[28px] text-[#0A192F]">
          {service.title}
        </h3>

        <p className="font-gotham text-[14px] xl:text-[18px] text-black xl:leading-[22px] mt-[.5vh] transition-all duration-300 ease-out group-hover:opacity-0 group-hover:h-0 group-hover:mt-0 group-hover:overflow-hidden group-data-[open=true]:opacity-0 group-data-[open=true]:h-0 group-data-[open=true]:mt-0 group-data-[open=true]:overflow-hidden">
          {service.description}
        </p>

        <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] group-data-[open=true]:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
          <div className="overflow-hidden">
            <p className="font-gotham text-[16px] lg:text-[14px] xl:text-[18px] text-black leading-[18px]  xl:leading-[22px] mt-[.8vh]">
              {service.fullDescription}
            </p>
            <ul className="flex flex-col gap-2 mt-[1.4vh] pt-[.4vh] border-t border-black/10">
              {service.bullets.map((bullet) => (
<li
  key={bullet}
  className="flex items-start gap-2 font-gotham text-[14px] text-[#0A192F]"
>
  <span className="mt-[6px] w-[6px] h-[6px] rounded-full bg-[#0CC1FA] shrink-0" />
  {bullet}
</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="diensten" className="max-w-[1560px] mx-auto xl:px-10 md:px-6 px-4 2xl:pt-[12.5vh] 2xl:pb-[12.5vh] xl:pt-[10vh] xl:pb-[15.5vh] lg:pb-[10px] lg:pt-[80px] md:py-[80px] py-[50px]">
      <div>
        <div>
          <div
            ref={headerRef}
            className={`flex flex-col md:flex-row justify-between gap-6 xl:gap-0 transition-all duration-700 ease-out ${
              headerVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            <h2 className="font-monument font-extrabold text-[26px] sm:text-[32px] xl:text-[40px] text-[#012549] tracking-[0.02em] 2xl:max-w-[511px] max-w-[480px] leading-[34px] sm:leading-[40px] xl:leading-[46px]">
              Waar we jouw bedrijf mee laten groeien
            </h2>
            <h4 className="font-gotham font-normal text-[16px] xl:text-[18px] max-w-[546px] leading-[22.8px]">
              Geen vage marketingpraat, wel keiharde systemen die voor regionaal
              rendement werken.
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-y-12 gap-x-6 md:mt-[5vh] mt-[2vh]">
            {services.map((service, i) => (
              <ServiceCard service={service} index={i} key={service.title} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
