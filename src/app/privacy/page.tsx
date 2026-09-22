"use client";

import Link from "next/link";
import { ReactNode, useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    Cookiebot?: { renew: () => void };
  }
}

/* ---------- contact (footer wale hi) ---------- */

const CONTACT_EMAIL = "info@miradaagency.nl";
const CONTACT_EMAIL_HREF = `mailto:${CONTACT_EMAIL}`;
const CONTACT_PHONE = "+31 6 4135 3424";
const CONTACT_PHONE_HREF = "tel:+31641353424";

/* ---------- helpers ---------- */

function useInView<T extends HTMLElement>(threshold = 0.1) {
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

function useActiveSection(ids: string[]) {
  const [activeId, setActiveId] = useState<string>(ids[0] ?? "");
  const intersecting = useRef<Map<string, number>>(new Map());

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            intersecting.current.set(entry.target.id, entry.boundingClientRect.top);
          } else {
            intersecting.current.delete(entry.target.id);
          }
        });

        if (intersecting.current.size > 0) {
          // Jo section sabse upar (smallest top) hai wahi active
          const topId = [...intersecting.current.entries()].sort(
            (a, b) => a[1] - b[1],
          )[0][0];
          setActiveId(topId);
        }
      },
      {
        rootMargin: "-120px 0px -60% 0px",
        threshold: 0,
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  return activeId;
}

const fadeUp = (show: boolean, distance = "translate-y-10") =>
  `transition-all duration-700 ease-out ${
    show ? "opacity-100 translate-y-0" : `opacity-0 ${distance}`
  }`;

function Reveal({
  children,
  id,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  id?: string;
  className?: string;
  delay?: number;
}) {
  const { ref, visible } = useInView<HTMLDivElement>(0.08);
  return (
    <div
      id={id}
      ref={ref}
      className={`${fadeUp(visible, "translate-y-8")} ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}

/* ---------- shared classes ---------- */

// Inner cards (white, halka border + shadow) — outer section cards ab nahi hain
const innerCardClass =
  "rounded-2xl border border-black/5 bg-white shadow-[0px_4px_20px_0px_#0000000d]";
const bodyClass =
  "font-gotham font-normal text-[16px] leading-[170%] text-[#012549]/80 md:text-[16px] xl:text-[18px]";
const linkClass =
  "text-[#0CC1FA] underline-offset-4 transition-colors hover:text-[#0A93C4] hover:underline";

// Header wala hi container
const containerClass =
  "mx-auto max-w-[1560px] xl:px-10 md:px-6 px-4";

/* ---------- small components ---------- */

function SectionBlock({
  id,
  number,
  title,
  children,
  last = false,
}: {
  id: string;
  number: string;
  title: string;
  children: ReactNode;
  last?: boolean;
}) {
  return (
    <Reveal
      id={id}
      className={` ${
        last ? "" : "border-b border-black/10 pb-10 md:pb-12"
      }`}
    >
      <div className="mb-5 flex items-center gap-4">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0CC1FA] font-monument text-[14px] font-extrabold text-white">
          {number}
        </span>
        <h2 className="font-gotham text-[20px] font-bold leading-tight text-[#012549] xl:text-[24px]">
          {title}
        </h2>
      </div>
      {children}
    </Reveal>
  );
}

function SubTitle({ children }: { children: ReactNode }) {
  return (
    <h3 className="mb-3 font-gotham text-[16px] font-bold text-[#012549] xl:text-[18px]">
      {children}
    </h3>
  );
}

function BulletList({ items, cols = false }: { items: string[]; cols?: boolean }) {
  return (
    <ul
      className={`mt-4 grid gap-x-6 gap-y-3 px-5 py-5 ${innerCardClass} ${
        cols ? "sm:grid-cols-2 xl:grid-cols-3" : ""
      }`}
    >
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 font-gotham text-[14px] leading-[150%] text-[#012549] xl:text-[15px]"
        >
          <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#0CC1FA]" />
          {item}
        </li>
      ))}
    </ul>
  );
}

/* ---------- content ---------- */

const toc = [
  { id: "wie-zijn-wij", n: "1", title: "Wie zijn wij?" },
  { id: "gegevens", n: "2", title: "Welke gegevens verzamelen we?" },
  { id: "waarom", n: "3", title: "Waarom verzamelen we deze gegevens?" },
  { id: "bewaartermijn", n: "4", title: "Hoe lang bewaren we jouw gegevens?" },
  { id: "cookies", n: "5", title: "Cookies" },
  { id: "rechten", n: "6", title: "Jouw rechten (AVG)" },
  { id: "beveiliging", n: "7", title: "Beveiliging" },
  { id: "klachten", n: "8", title: "Klachten" },
];

const contactFormData = [
  "Naam",
  "E-mailadres",
  "Telefoonnummer (optioneel)",
  "Bedrijfsnaam",
  "Website URL",
  "Je bericht",
];

const analyticsData = [
  "Bezochte pagina's en sessieduur",
  "Klikgedrag op knoppen en links",
  "Apparaattype (mobiel, desktop, tablet)",
  "Herkomst van bezoek (Google, direct, social media)",
  "Geanonimiseerd IP-adres",
];

const purposes = [
  {
    title: "Contact & Scan Aanvragen",
    text: "Om contact met je op te nemen en de gevraagde dienst te leveren. Grondslag: uitvoering van een overeenkomst / gerechtvaardigd belang.",
  },
  {
    title: "Google Analytics",
    text: "Om inzicht te krijgen in websitegebruik en onze website te verbeteren. Grondslag: toestemming (via cookiebanner).",
  },
];

const retention = [
  { label: "Contactformulier gegevens", value: "Maximaal 2 jaar na laatste contact" },
  { label: "Scan aanvraag gegevens", value: "Maximaal 2 jaar na aanvraag" },
  { label: "Google Analytics data", value: "14 maanden (Google standaard)" },
];

const rights = [
  { title: "Recht op inzage", text: "Je kunt opvragen welke gegevens we van je hebben." },
  { title: "Recht op correctie", text: "Je kunt onjuiste gegevens laten corrigeren." },
  { title: "Recht op verwijdering", text: "Je kunt verzoeken jouw gegevens te verwijderen." },
  { title: "Recht op bezwaar", text: "Je kunt bezwaar maken tegen verwerking van jouw gegevens." },
  { title: "Recht op overdracht", text: "Je kunt jouw gegevens opvragen in een leesbaar formaat." },
  { title: "Recht op intrekking", text: "Je kunt toestemming voor cookies op elk moment intrekken." },
];

/* ---------- page ---------- */

export default function PrivacyPage() {
  const hero = useInView<HTMLDivElement>(0.1);
  const activeId = useActiveSection(toc.map((t) => t.id));

  return (
    <div className="relative">
      {/* ===== Hero ===== */}
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#01152b] via-[#0a2f52] to-[#124a7d]">
        {/* soft glow (pure CSS, no image) */}
        <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(12,193,250,0.25)_0%,transparent_70%)]" />

        <div
          className={`relative ${containerClass} pb-[60px] pt-[120px] md:pb-[90px] md:pt-[140px] lg:pb-[110px] lg:pt-[170px]`}
        >
          <div ref={hero.ref} className={`flex flex-col ${fadeUp(hero.visible)}`}>
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-[#0CC1FA]/40 bg-[#0CC1FA]/10 px-4 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0CC1FA]" />
              <span className="font-gotham text-[12px] font-bold text-[#0CC1FA] sm:text-[13px]">
                Juridisch
              </span>
            </div>

            <h1 className="mb-5 break-words font-monument text-[26px] font-extrabold leading-[1.15] text-white sm:text-[36px] lg:text-[44px] xl:text-[52px]">
              Privacy<span className="text-[#0CC1FA]">beleid</span>
            </h1>

            <p className="font-gotham text-[14px] font-normal text-white/70 xl:text-[16px]">
              Laatst bijgewerkt: 14 juni 2026
            </p>
          </div>
        </div>
      </section>

      {/* ===== Content ===== */}
      <section className="bg-[#F5F9FC]">
        <div
          className={`${containerClass} py-[50px] md:pt-[80px] md:pb-0 lg:pt-[100px] lg:pb-[10px]`}
        >
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[260px_1fr] lg:gap-12 xl:gap-16">
            {/* TOC card (desktop only) — ye card rehne diya */}
            <aside className="hidden lg:block">
              <nav className="sticky top-[120px] rounded-[24px] border border-black/5 bg-white p-6 shadow-[0px_4px_29.8px_0px_#00000012]">
                <ul className="flex flex-col gap-1">
                  {toc.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className={`flex items-start gap-3 rounded-xl px-3 py-2 font-gotham text-[14px] xl:text-[16px] leading-[140%] transition-colors ${
                          activeId === item.id
                            ? "bg-[#0CC1FA]/10 text-[#012549]"
                            : "text-[#012549]/80 hover:bg-[#0CC1FA]/10 hover:text-[#012549]"
                        }`}
                      >
                        <span className="font-bold text-[#0CC1FA]">{item.n}.</span>
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>

            {/* Content — koi outer cards nahi */}
            <div className="flex min-w-0 flex-col gap-10 md:gap-12">
              {/* Intro */}
              <Reveal className="border-b border-black/10 pb-10 md:pb-12">
                <p className={bodyClass}>
                  Mirada Management B.V., handelend onder de naam Mirada Agency, hecht veel
                  waarde aan de bescherming van jouw persoonsgegevens. In dit privacybeleid
                  leggen we uit welke gegevens we verzamelen, waarom we dat doen en hoe we
                  daarmee omgaan. We handelen in overeenstemming met de Algemene Verordening
                  Gegevensbescherming (AVG).
                </p>
              </Reveal>

              {/* 1 */}
              <SectionBlock id="wie-zijn-wij" number="1" title="Wie zijn wij?">
                <p className={bodyClass}>
                  Mirada Management B.V., handelend onder de naam Mirada Agency, is
                  verantwoordelijk voor de verwerking van persoonsgegevens zoals beschreven in
                  dit privacybeleid.
                </p>

                <dl
                  className={`mt-6 flex flex-col gap-2 border-l-[3px] border-l-[#0CC1FA] px-5 py-5 font-gotham text-[14px] leading-[150%] text-[#012549] xl:text-[15px] ${innerCardClass}`}
                >
                  <div>
                    <dt className="inline font-bold">Bedrijfsnaam: </dt>
                    <dd className="inline">
                      Mirada Management B.V., handelend onder de naam Mirada Agency
                    </dd>
                  </div>
                  <div>
                    <dt className="inline font-bold">KvK-nummer: </dt>
                    <dd className="inline">42084347</dd>
                  </div>
                  <div>
                    <dt className="inline font-bold">E-mail: </dt>
                    <dd className="inline">
                      <a href={CONTACT_EMAIL_HREF} className={`${linkClass} break-words`}>
                        {CONTACT_EMAIL}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="inline font-bold">Telefoon: </dt>
                    <dd className="inline">
                      <a href={CONTACT_PHONE_HREF} className={linkClass}>
                        {CONTACT_PHONE}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="inline font-bold">Website: </dt>
                    <dd className="inline">miradaagency.nl</dd>
                  </div>
                </dl>
              </SectionBlock>

              {/* 2 */}
              <SectionBlock id="gegevens" number="2" title="Welke gegevens verzamelen we?">
                <SubTitle>A. Contactformulier &amp; Scan Aanvraag</SubTitle>
                <p className={bodyClass}>
                  Wanneer je ons contactformulier invult of een gratis scan aanvraagt,
                  verzamelen we de volgende gegevens:
                </p>
                <BulletList items={contactFormData} cols />

                <div className="mt-8">
                  <SubTitle>B. Google Analytics (Statistieken)</SubTitle>
                  <p className={bodyClass}>
                    Met jouw toestemming gebruiken we Google Analytics 4 om anonieme
                    bezoekersstatistieken bij te houden. Dit omvat:
                  </p>
                  <BulletList items={analyticsData} cols />
                  <p className="mt-4 rounded-xl bg-[#0CC1FA]/10 px-4 py-3 font-gotham text-[13px] leading-[160%] text-[#012549]/80 xl:text-[14px]">
                    IP-adressen worden geanonimiseerd. We delen deze gegevens niet met derden
                    voor commerciële doeleinden.
                  </p>
                </div>
              </SectionBlock>

              {/* 3 */}
              <SectionBlock id="waarom" number="3" title="Waarom verzamelen we deze gegevens?">
                <ul className="flex flex-col gap-5">
                  {purposes.map((p) => (
                    <li key={p.title} className="flex items-start gap-3">
                      <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#0CC1FA]" />
                      <div>
                        <p className="font-gotham text-[16px] font-bold text-[#012549] xl:text-[18px]">
                          {p.title}
                        </p>
                        <p className={`mt-1 ${bodyClass}`}>{p.text}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </SectionBlock>

              {/* 4 */}
              <SectionBlock
                id="bewaartermijn"
                number="4"
                title="Hoe lang bewaren we jouw gegevens?"
              >
                <div className="flex flex-col">
                  {retention.map((row, i) => (
                    <div
                      key={row.label}
                      className={`flex flex-col gap-1 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6 ${
                        i !== retention.length - 1 ? "border-b border-black/10" : ""
                      } ${i === 0 ? "pt-0" : ""}`}
                    >
                      <span className="font-gotham text-[16px] font-bold text-[#012549] xl:text-[18px]">
                        {row.label}
                      </span>
                      <span className="font-gotham text-[14px] text-[#012549]/60 sm:text-right xl:text-[16px]">
                        {row.value}
                      </span>
                    </div>
                  ))}
                </div>
              </SectionBlock>

              {/* 5 */}
              <SectionBlock id="cookies" number="5" title="Cookies">
                <p className={bodyClass}>
                  Wij gebruiken Cookiebot om jouw cookietoestemming te beheren. Bij je eerste
                  bezoek aan onze website verschijnt een cookiebanner waarin je keuzes kunt
                  maken over welke cookies je accepteert.
                </p>

                <div className="mt-5 flex flex-col gap-3">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-md bg-emerald-100 px-3 py-1 font-gotham text-[12px] font-bold text-emerald-700">
                      Noodzakelijk
                    </span>
                    <span className="font-gotham text-[14px] text-[#012549]/80 xl:text-[15px]">
                      Altijd actief — nodig voor de basisfunctionaliteit van de website.
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-md bg-blue-100 px-3 py-1 font-gotham text-[12px] font-bold text-blue-700">
                      Statistieken
                    </span>
                    <span className="font-gotham text-[14px] text-[#012549]/80 xl:text-[15px]">
                      Google Analytics — alleen na jouw toestemming.
                    </span>
                  </div>
                </div>

                <p className="mt-6 border-t border-black/10 pt-5 font-gotham text-[13px] leading-[160%] text-[#012549]/60 xl:text-[14px]">
                  Je kunt je cookievoorkeuren op elk moment aanpassen via de{" "}
                  <button
                    type="button"
                    onClick={() => window.Cookiebot?.renew()}
                    className={linkClass}
                  >
                    cookie-instellingen
                  </button>{" "}
                  in de footer.
                </p>
              </SectionBlock>

              {/* 6 */}
              <SectionBlock id="rechten" number="6" title="Jouw rechten (AVG)">
                <p className={bodyClass}>
                  Op grond van de AVG heb je de volgende rechten met betrekking tot jouw
                  persoonsgegevens:
                </p>

                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {rights.map((r) => (
                    <div
                      key={r.title}
                      className={`border-l-[3px] border-l-[#0CC1FA] px-5 py-5 transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(12,193,250,0.15)] ${innerCardClass}`}
                    >
                      <p className="font-gotham text-[15px] font-bold text-[#012549] xl:text-[16px]">
                        {r.title}
                      </p>
                      <p className="mt-1 font-gotham text-[13px] leading-[150%] text-[#012549]/60 xl:text-[14px]">
                        {r.text}
                      </p>
                    </div>
                  ))}
                </div>

                <p className="mt-6 font-gotham text-[13px] leading-[160%] text-[#012549]/60 xl:text-[14px]">
                  Om gebruik te maken van je rechten, neem je contact op via{" "}
                  <Link href={CONTACT_EMAIL_HREF} className={`${linkClass} break-words`}>
                    {CONTACT_EMAIL}
                  </Link>
                  . We reageren binnen 30 dagen.
                </p>
              </SectionBlock>

              {/* 7 */}
              <SectionBlock id="beveiliging" number="7" title="Beveiliging">
                <p className={bodyClass}>
                  We nemen passende technische en organisatorische maatregelen om jouw
                  persoonsgegevens te beveiligen tegen ongeautoriseerde toegang, verlies of
                  misbruik. Onze website maakt gebruik van een beveiligde HTTPS-verbinding.
                </p>
              </SectionBlock>

              {/* 8 */}
              <SectionBlock id="klachten" number="8" title="Klachten" last>
                <p className={bodyClass}>
                  Heb je een klacht over hoe wij omgaan met jouw persoonsgegevens? Neem dan
                  eerst contact met ons op. Je hebt ook het recht om een klacht in te dienen
                  bij de{" "}
                  <a
                    href="https://autoriteitpersoonsgegevens.nl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    Autoriteit Persoonsgegevens
                  </a>
                  .
                </p>
              </SectionBlock>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}