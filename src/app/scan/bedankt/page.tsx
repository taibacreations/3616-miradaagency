"use client";

import Link from "next/link";
import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const reportItems = [
  {
    title: "Pixel-installatie check",
    text: "We controleren of je Meta Pixel en GA4 correct zijn geïnstalleerd en data bijhouden.",
    icon: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="M20 20l-3.5-3.5" />
      </>
    ),
  },
  {
    title: "Mobiele conversie-analyse",
    text: "Hoe presteren bezoekers op mobiel? Waar haken ze af?",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M8 12.5l2.7 2.7L16 9.8" />
      </>
    ),
  },
  {
    title: "Technische lead-lekken",
    text: "SSL-status, laadsnelheid en technische blokkades die klanten kosten.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" />
      </>
    ),
  },
  {
    title: "Concreet actieplan",
    text: "Geen vage adviezen — maar specifieke stappen om de lekken direct te dichten.",
    icon: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </>
    ),
  },
];

const fade = (show: boolean, delay = 0) => ({
  transitionDelay: show ? `${delay}ms` : "0ms",
});

const fadeClass = (show: boolean) =>
  `transition-all duration-700 ease-out ${
    show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
  }`;

// Header wala hi container
const containerClass = "mx-auto max-w-[1560px] xl:px-10 md:px-6 px-4";

// Eased (smoothstep) gradient: transparent -> #F5F9FC (245,249,252)
// Beech ke stops curve banate hain, is liye koi sharp edge nahi dikhta
const softFade = `linear-gradient(to bottom,
  rgba(245,249,252,0) 0%,
  rgba(245,249,252,0.028) 10%,
  rgba(245,249,252,0.104) 20%,
  rgba(245,249,252,0.216) 30%,
  rgba(245,249,252,0.352) 40%,
  rgba(245,249,252,0.5) 50%,
  rgba(245,249,252,0.648) 60%,
  rgba(245,249,252,0.784) 70%,
  rgba(245,249,252,0.896) 80%,
  rgba(245,249,252,0.972) 90%,
  rgba(245,249,252,1) 100%)`;

function BedanktContent() {
  const params = useSearchParams();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const naam = (params.get("naam") || "").trim();
  const email = (params.get("email") || "").trim();
  const website = (params.get("website") || "").trim();

  return (
    <div className="relative min-h-screen bg-[#F5F9FC]">
      {/* ===== Hero (navy) — bottom par bohat smooth fade ===== */}
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#01152b] via-[#0a2f52] to-[#124a7d]">
        {/* soft glows (pure CSS) */}
        <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(12,193,250,0.25)_0%,transparent_70%)]" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(12,193,250,0.15)_0%,transparent_70%)]" />

        {/* Bottom fade: navy -> #F5F9FC (lamba + eased) */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[280px] md:h-[340px] lg:h-[400px]"
          style={{ backgroundImage: softFade }}
        />

        <div
          className={`relative ${containerClass} flex flex-col items-center pb-[320px] pt-[120px] text-center md:pb-[380px] md:pt-[140px] lg:pb-[440px] lg:pt-[170px] ${""}`}
        >
          {/* Check icon */}
          <div
            className={`flex h-[72px] w-[72px] items-center justify-center rounded-full border-2 border-[#0CC1FA]/60 bg-[#0CC1FA]/10 md:h-20 md:w-20 ${fadeClass(mounted)}`}
            style={fade(mounted, 0)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#0CC1FA"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="9" />
              <path d="M8 12.5l2.7 2.7L16 9.8" />
            </svg>
          </div>

          {/* Heading */}
          <h1
            className={`mt-8 break-words font-monument text-[26px] font-extrabold leading-[1.2] text-white sm:text-[34px] xl:text-[44px] ${fadeClass(mounted)}`}
            style={fade(mounted, 100)}
          >
            {naam ? `Top, ${naam}!` : "Top!"} <span aria-hidden="true">✅</span>
          </h1>

          {/* Text */}
          <p
            className={`mt-5 max-w-[640px] font-gotham text-[14px] font-normal leading-[170%] text-white/75 sm:text-[16px] xl:text-[18px] ${fadeClass(mounted)}`}
            style={fade(mounted, 200)}
          >
            {website ? (
              <>
                We zijn direct begonnen met de analyse van{" "}
                <span className="break-words font-bold text-[#0CC1FA]">{website}</span>.
              </>
            ) : (
              <>We zijn direct begonnen met de analyse van jouw website.</>
            )}{" "}
            Binnen 24 uur ontvang je een gedetailleerd rapport
            {email ? (
              <>
                {" "}
                op <span className="break-words font-bold text-white">{email}</span>.
              </>
            ) : (
              <>.</>
            )}
          </p>
        </div>
      </section>

      {/* ===== Content — card fade ke upar overlap karta hai ===== */}
      <section className="relative z-10 pb-16">
        <div
          className={`${containerClass} -mt-[270px] flex flex-col items-center md:-mt-[330px] lg:-mt-[390px]`}
        >
          {/* Report card */}
          <div
            className={`w-full max-w-[680px] rounded-3xl border border-black/5 bg-white px-5 py-8 text-left shadow-[0px_10px_40px_0px_#0000001a] sm:px-8 sm:py-10 ${fadeClass(mounted)}`}
            style={fade(mounted, 300)}
          >
            <h2 className="mb-7 text-center font-gotham text-[16px] font-bold text-[#012549] sm:text-[18px]">
              Wat staat er in jouw rapport?
            </h2>

            <ul className="flex flex-col gap-6">
              {reportItems.map((item) => (
                <li key={item.title} className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0CC1FA]/15">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#0CC1FA"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {item.icon}
                    </svg>
                  </span>
                  <div>
                    <p className="font-gotham text-[14px] font-bold text-[#012549] sm:text-[15px]">
                      {item.title}
                    </p>
                    <p className="mt-1 font-gotham text-[12px] leading-[160%] text-[#012549]/60 sm:text-[13px]">
                      {item.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Tip */}
          <div
            className={`mt-6 w-full max-w-[680px] rounded-2xl border border-[#0CC1FA]/30 bg-[#0CC1FA]/10 px-5 py-4 text-center font-gotham text-[13px] leading-[160%] text-[#012549]/80 sm:text-[14px] ${fadeClass(mounted)}`}
            style={fade(mounted, 400)}
          >
            <span aria-hidden="true">💡</span>{" "}
            <span className="font-bold text-[#012549]">Tip:</span> Controleer ook je
            spam-map, soms belandt ons rapport daar.
          </div>

          {/* Back link */}
          <Link
            href="/"
            className={`group mt-10 inline-flex items-center gap-2 font-gotham text-[14px] text-[#012549]/70 transition-colors hover:text-[#0CC1FA] sm:text-[15px] ${fadeClass(mounted)}`}
            style={fade(mounted, 500)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-300 group-hover:-translate-x-1"
            >
              <path d="M19 12H5M11 6l-6 6 6 6" />
            </svg>
            Terug naar homepage
          </Link>
        </div>
      </section>
    </div>
  );
}

// useSearchParams ke liye Suspense zaroori hai
export default function BedanktPage() {
  return (
    <Suspense fallback={<main className="min-h-screen bg-[#F5F9FC]" />}>
      <BedanktContent />
    </Suspense>
  );
}