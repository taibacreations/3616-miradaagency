"use client";

import Link from "next/link";
import { ReactNode, useEffect, useRef, useState } from "react";

/* ---------- helpers (scan/privacy pages jaise hi) ---------- */

function useInView<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T>(null);
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
      { threshold },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}

const fadeUp = (show: boolean, distance = "translate-y-10") =>
  `transition-all duration-700 ease-out ${
    show ? "opacity-100 translate-y-0" : `opacity-0 ${distance}`
  }`;

function Reveal({
  children,
  className = "",
  delay = 0,
  threshold = 0.15,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
}) {
  const { ref, visible } = useInView<HTMLDivElement>(threshold);
  return (
    <div
      ref={ref}
      className={`${fadeUp(visible, "translate-y-8")} ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}

/* ---------- shared classes (site-wide consistent) ---------- */

const cardClass =
  "rounded-[24px] border border-black/5 bg-white shadow-[0px_4px_29.8px_0px_#00000012]";
const bodyClass =
  "font-gotham font-normal text-[16px] leading-[170%] text-[#012549]/80 xl:text-[18px]";
const containerClass = "mx-auto max-w-[1560px] xl:px-10 md:px-6 px-4";

// mobile 50px, md/lg 80px, xl 100px - 2xl pe wapis wahi values jo pehle (sectionPadding se pehle) is section mein thi
const sectionPadding110 =
  "pt-[50px] pb-[50px] md:pt-[80px] md:pb-[80px] xl:pt-[100px] xl:pb-[100px] 2xl:pt-[110px] 2xl:pb-[110px]";
const sectionPadding100 =
  "pt-[50px] pb-[50px] md:pt-[80px] md:pb-[80px] xl:pt-[100px] xl:pb-[100px] 2xl:pt-[100px] 2xl:pb-[100px]";
const sectionPaddingTop100 =
  "pb-[50px] md:pb-[80px] xl:pb-[100px] 2xl:pb-[100px]";

/* ---------- icons (viewBox 0 0 120 120, wrapper svg render ke waqt lagta hai) ---------- */

const geoAnalysisPoints = [
  {
    text: "Wordt jouw bedrijf genoemd in ChatGPT, Gemini & Google AI overviews?",
    icon: (
      <>
        <circle cx="60" cy="60" r="57" fill="white" />
        <circle cx="60" cy="60" r="50" fill="#0CC1FA" />
        <circle cx="60" cy="52" r="20" stroke="white" strokeWidth="3.5" />
        <path d="M60 40V52L68 58" stroke="white" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M42 88C46 80 53 76 60 76C67 76 74 80 78 88" stroke="white" strokeWidth="3.2" strokeLinecap="round" />
        <circle cx="32" cy="40" r="6" fill="#0CC1FA" stroke="white" strokeWidth="2.5" />
        <circle cx="88" cy="40" r="6" fill="#0CC1FA" stroke="white" strokeWidth="2.5" />
      </>
    ),
  },
  {
    text: "Is jouw content geschikt voor AI om te citeren en aan te bevelen?",
    icon: (
      <>
        <circle cx="60" cy="60" r="57" fill="white" />
        <circle cx="60" cy="60" r="50" fill="#0CC1FA" />
        <rect x="35" y="30" width="50" height="60" rx="6" stroke="white" strokeWidth="3.5" />
        <path d="M43 45H77" stroke="white" strokeWidth="3" strokeLinecap="round" />
        <path d="M43 56H77" stroke="white" strokeWidth="3" strokeLinecap="round" />
        <path d="M43 67H65" stroke="white" strokeWidth="3" strokeLinecap="round" />
        <circle cx="82" cy="82" r="14" fill="#0CC1FA" stroke="white" strokeWidth="3" />
        <path d="M76 82L80.5 86.5L89 76" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    text: "Vertrouwt de AI jouw bedrijf op basis van reviews, structuur & autoriteit?",
    icon: (
      <>
        <circle cx="60" cy="60" r="57" fill="white" />
        <circle cx="60" cy="60" r="50" fill="#0CC1FA" />
        <path d="M60 34L68 50L86 53L73 65L76 83L60 74L44 83L47 65L34 53L52 50L60 34Z" stroke="white" strokeWidth="3.4" strokeLinejoin="round" />
      </>
    ),
  },
];

const oldVsNew = {
  old: [
    "Klant zoekt op Google en scrolt 10 links langs",
    "Jij concurreert om positie 1 in blauwe links",
    "SEO alleen richt zich op klikken, niet op antwoorden",
    "Geen controle over hoe AI jouw bedrijf beschrijft",
  ],
  new: [
    "Klant vraagt het rechtstreeks aan ChatGPT of Gemini",
    "AI geeft direct één (of een paar) aanbevelingen",
    "GEO structureert content zodat AI 'm begrijpt en citeert",
    "Wij zorgen dat AI jouw bedrijf correct en positief noemt",
  ],
};

const geoServices = [
  {
    title: "AI-zichtbaarheidsaudit",
    text: "We testen tientallen relevante prompts in ChatGPT, Gemini, Perplexity en Google AI Overviews om te zien of en hoe jouw bedrijf wordt genoemd.",
  },
  {
    title: "Content & structuur optimalisatie",
    text: "We herschrijven en structureren jouw website-content (FAQ's, schema markup, heldere antwoorden) zodat AI-modellen het makkelijk kunnen lezen en citeren.",
  },
  {
    title: "Autoriteit & vermeldingen opbouwen",
    text: "We zorgen voor consistente, betrouwbare vermeldingen van jouw bedrijf op plekken die AI-modellen als bron gebruiken (reviews, directories, kennisbanken).",
  },
  {
    title: "Maandelijkse AI-rapportage",
    text: "Je ziet zwart-op-wit hoe vaak en hoe jouw bedrijf wordt genoemd in AI-antwoorden, en welke concurrenten die plek innemen.",
  },
];

const process = [
  { n: "01", title: "AI-Scan", text: "We testen hoe zichtbaar jouw bedrijf nu is in AI-zoekresultaten." },
  { n: "02", title: "Strategie & plan", text: "Concrete lijst met content- en structuurverbeteringen, geprioriteerd op impact." },
  { n: "03", title: "Implementatie", text: "Wij voeren de optimalisaties door op je website en externe bronnen." },
  { n: "04", title: "Meten & bijsturen", text: "Maandelijkse controle of AI-modellen jouw bedrijf nu wél aanbevelen." },
];

export default function GeoPage() {
  const hero = useInView<HTMLDivElement>(0.1);

  return (
    <div className="relative">
      {/* ===== Hero - spacing scan page ke banner se exact match ===== */}
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#01152b] via-[#0a2f52] to-[#124a7d]">
        <div className="max-w-[1600px] mx-auto xl:px-15 md:px-6 px-4 pt-[150px] pb-[50px] md:pt-[140px] md:pb-[80px] lg:pt-40 xl:pt-50 lg:pb-[100px]">
          <div
            ref={hero.ref}
            className={`flex w-full flex-col items-center text-center ${fadeUp(hero.visible)}`}
          >
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-[#0CC1FA]/40 bg-[#0CC1FA]/10 px-4 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0CC1FA]" />
              <span className="font-gotham text-[12px] font-bold text-[#0CC1FA] sm:text-[13px] lg:text-[16px]">
                GEO: Generative Engine Optimization
              </span>
            </div>

            <h1 className="mb-6 w-full max-w-[900px] break-words font-monument text-[26px] font-extrabold leading-[1.15] text-white sm:text-[36px] lg:text-[46px] xl:text-[54px]">
              Word aanbevolen door{" "}
              <span className="text-[#0CC1FA]">ChatGPT, Gemini &amp; Google AI</span>
            </h1>

            <p className="w-full max-w-[750px] font-gotham text-[16px] font-normal leading-relaxed text-white/80 xl:text-[18px]">
              Steeds meer mensen zoeken niet meer op Google. Ze vragen het direct aan AI.
              Wij zorgen dat jouw bedrijf het antwoord wordt dat AI-modellen geven.
            </p>

            <div
              className="mt-9 flex flex-wrap items-center justify-center gap-4"
              style={{ transitionDelay: hero.visible ? "150ms" : "0ms" }}
            >
              <Link
                href="/scan"
                className="group relative overflow-hidden h-[48px] sm:h-[52px] xl:h-[54px] px-8 rounded-[319px] bg-[#0CC1FA] font-gotham font-bold text-[15px] lg:text-[16px] text-white flex items-center justify-center gap-2 transition-all duration-500 ease-out active:scale-95"
              >
                <span className="absolute inset-0 bg-[#012549] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                <span className="relative z-10 flex items-center gap-2">
                  Check jouw AI-zichtbaarheid
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Section: Wat we analyseren (3 cards, scan-page stijl) ===== */}
      <section className="bg-[#F5F9FC] max-w-[1600px] mx-auto">
        <div className={`${containerClass} ${sectionPadding110}`}>
          <Reveal className="mx-auto max-w-[800px] text-center" threshold={0.2}>
            <h2 className="font-monument font-extrabold text-[26px] sm:text-[32px] xl:text-[40px] text-[#012549] leading-[34px] sm:leading-[40px] xl:leading-[46px]">
              Weet jij of aI jouw bedrijf aanbeveelt?
            </h2>
            <p className={`mt-4 ${bodyClass}`}>
              De meeste ondernemers hebben geen idee wat AI-modellen over hun bedrijf zeggen,
              of dat ze het überhaupt noemen.
            </p>
          </Reveal>

          <div className="mt-16 flex flex-col gap-14 md:mt-16 md:flex-row md:gap-6 xl:mt-20 xl:gap-8">
            {geoAnalysisPoints.map((point, i) => (
              <Reveal key={point.text} className="flex flex-1 md:min-w-0" delay={i * 120}>
                <div className="group relative flex w-full cursor-pointer flex-col transition-transform duration-500 ease-out hover:-translate-y-2">
                  <div className="pointer-events-none absolute left-1/2 top-[-32px] z-10 h-16 w-16 -translate-x-1/2 transition-transform duration-500 ease-out group-hover:scale-110 md:top-[-28px] md:h-14 md:w-14 xl:top-[-40px] xl:h-20 xl:w-20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 120 120"
                      fill="none"
                      className="h-full w-full"
                      aria-hidden="true"
                    >
                      {point.icon}
                    </svg>
                  </div>
                  <div className={`relative flex-1 overflow-hidden px-6 pb-7 pt-12 text-center transition-shadow duration-500 ease-out group-hover:shadow-[0_20px_50px_rgba(12,193,250,0.18)] md:px-4 md:pb-6 md:pt-10 xl:px-8 xl:pb-9 xl:pt-14 ${cardClass}`}>
                    <p className="font-gotham leading-[149%] text-[#012549] text-[16px] xl:text-[18px]">
                      {point.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Section: SEO vs GEO comparison (homepage "handmatig vs mirada" stijl) ===== */}
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#01152b] via-[#0a2f52] to-[#124a7d]">
        <div className={`${containerClass} ${sectionPadding100}`}>
          <Reveal className="mx-auto max-w-[750px] text-center" threshold={0.2}>
            <h2 className="font-monument font-extrabold text-[24px] sm:text-[30px] xl:text-[38px] text-white leading-[32px] sm:leading-[38px] xl:leading-[46px]">
              Van zoekmachine naar <span className="text-[#0CC1FA]">antwoordmachine</span>
            </h2>
          </Reveal>

          <div className="md:mt-12 mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 xl:gap-8">
            <Reveal delay={0}>
              <div className="h-full rounded-[24px] border border-red-400/20 bg-white/5 backdrop-blur px-6 py-8 sm:px-8">
                <span className="inline-block rounded-full bg-red-500/15 px-4 py-1.5 font-gotham text-[12px] font-bold text-red-300 lg:text-[16px]">
                  Traditionele SEO
                </span>
                <ul className="mt-6 flex flex-col gap-4">
                  {oldVsNew.old.map((item) => (
                    <li key={item} className="flex items-start gap-3 font-gotham text-[14px] leading-[150%] text-white/70 lg:text-[16px]">
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="h-full rounded-[24px] border border-[#0CC1FA]/40 bg-white/5 backdrop-blur px-6 py-8 sm:px-8">
                <span className="inline-block rounded-full bg-[#0CC1FA]/15 px-4 py-1.5 font-gotham text-[12px] font-bold text-[#0CC1FA] lg:text-[16px]">
                  Met GEO
                </span>
                <ul className="mt-6 flex flex-col gap-4">
                  {oldVsNew.new.map((item) => (
                    <li key={item} className="flex items-start gap-3 font-gotham text-[14px] leading-[150%] text-white lg:text-[16px]">
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#0CC1FA]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== Section: Wat wij bieden (4 service cards) ===== */}
      <section className="bg-[#F5F9FC] max-w-[1600px] mx-auto">
        <div className={`${containerClass} ${sectionPadding110}`}>
          <Reveal className="mx-auto max-w-[700px] text-center" threshold={0.2}>
            <h2 className="font-monument font-extrabold text-[26px] sm:text-[32px] xl:text-[40px] text-[#012549] leading-[34px] sm:leading-[40px] xl:leading-[46px]">
              Wat wij voor je doen
            </h2>
          </Reveal>

          <div className="md:mt-14 mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:gap-8">
            {geoServices.map((service, i) => (
              <Reveal key={service.title} delay={i * 100}>
                <div className={`h-full px-7 py-8 transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(12,193,250,0.15)] ${cardClass}`}>
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#0CC1FA]/10 font-monument text-[14px] font-extrabold text-[#0CC1FA] lg:text-[16px]">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="font-gotham text-[18px] font-bold text-[#012549] xl:text-[20px]">
                    {service.title}
                  </h3>
                  <p className={`mt-2 ${bodyClass}`}>{service.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Section: Hoe we werken (4 steps, homepage stijl) ===== */}
      <section className="bg-[#F5F9FC] max-w-[1600px] mx-auto">
        <div className={`${containerClass} ${sectionPaddingTop100}`}>
          <Reveal className="mx-auto max-w-[700px] text-center" threshold={0.2}>
            <h2 className="font-monument font-extrabold text-[26px] sm:text-[32px] xl:text-[40px] text-[#012549] leading-[34px] sm:leading-[40px] xl:leading-[46px]">
              Hoe we samenwerken
            </h2>
          </Reveal>

          <Reveal
            className="relative md:mt-12 mt-6 overflow-hidden rounded-[32px] bg-gradient-to-br from-[#01152b] via-[#0a2f52] to-[#124a7d] px-6 py-10 sm:px-10 sm:py-12"
            threshold={0.15}
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4 xl:gap-8">
              {process.map((step) => (
                <div key={step.n} className="rounded-[20px] bg-white px-6 py-7">
                  <span className="font-monument text-[28px] font-extrabold text-[#0CC1FA]/30">
                    {step.n}
                  </span>
                  <h3 className="mt-2 font-gotham text-[16px] font-bold text-[#012549] lg:text-[18px]">
                    {step.title}
                  </h3>
                  <p className="mt-2 font-gotham text-[13px] leading-[150%] text-[#012549]/70 lg:text-[16px]">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== Section: Final CTA ===== */}
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#01152b] via-[#0a2f52] to-[#124a7d]">
        <div className="pointer-events-none absolute -left-40 -bottom-40 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(12,193,250,0.2)_0%,transparent_70%)]" />
        <div className={`relative ${containerClass} ${sectionPadding100} text-center`}>
          <Reveal className="mx-auto max-w-[700px]" threshold={0.2}>
            <h2 className="font-monument font-extrabold text-[24px] sm:text-[30px] xl:text-[38px] text-white leading-[32px] sm:leading-[38px] xl:leading-[46px]">
              Klaar om gevonden te worden door AI?
            </h2>
            <p className="mt-4 font-gotham text-[15px] font-normal text-white/70 lg:text-[16px] xl:text-[17px]">
              Vraag een gratis AI-zichtbaarheidsscan aan en ontdek binnen 24 uur waar je staat.
            </p>
            <Link
              href="/scan"
              className="group relative mt-8 inline-flex overflow-hidden h-[48px] sm:h-[52px] xl:h-[54px] px-8 rounded-[319px] bg-[#0CC1FA] font-gotham font-bold text-[15px] lg:text-[16px] text-white items-center justify-center gap-2 transition-all duration-500 ease-out active:scale-95"
            >
              <span className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
              <span className="relative z-10 flex items-center gap-2 group-hover:text-[#012549] transition-colors duration-500">
                Claim gratis AI-scan
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}