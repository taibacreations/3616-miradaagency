"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

// TODO: contact section wala AJAX endpoint yahan daalo
const ENDPOINT = "/api/scan";

type Status = "idle" | "loading" | "success" | "error";

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

const trustStats = [
  {
    label: "Geen verplichtingen",
    icon: (
      <path d="M12 2L4 5v6c0 5 3.5 9 8 11 4.5-2 8-6 8-11V5l-8-3z" stroke="#0CC1FA" strokeWidth="1.5" strokeLinejoin="round" />
    ),
  },
  {
    label: "Resultaat binnen 24u",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" stroke="#0CC1FA" strokeWidth="1.5" />
        <path d="M12 7v5l3 3" stroke="#0CC1FA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    label: "100% gratis",
    icon: (
      <path d="M12 2l2.9 6.3 6.9.6-5.2 4.6 1.6 6.8L12 16.9 5.8 20.3l1.6-6.8L2.2 8.9l6.9-.6L12 2z" stroke="#0CC1FA" strokeWidth="1.3" strokeLinejoin="round" />
    ),
  },
];

// NOTE: icons yahan sirf inner shapes hain (viewBox 0 0 120 120).
// Wrapper <svg> render ke waqt lagta hai — nested <svg> nahi.
const analysisPoints = [
  {
    text: "Aanwezigheid & correcte installatie van tracking-pixels (Meta Pixel, GA4)",
    icon: (
      <>
        <circle cx="60" cy="60" r="57" fill="white" />
        <circle cx="60" cy="60" r="50" fill="#0CC1FA" />

        <rect x="34" y="31" width="52" height="42" rx="7" stroke="white" strokeWidth="3.5" />
        <path d="M35 44H85" stroke="white" strokeWidth="3.5" />
        <circle cx="42" cy="37.5" r="2.3" fill="white" />
        <circle cx="49.5" cy="37.5" r="2.3" fill="white" />

        <path d="M49 52L43 58L49 64" stroke="white" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M71 52L77 58L71 64" stroke="white" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M64 50L56 66" stroke="white" strokeWidth="3.4" strokeLinecap="round" />

        <circle cx="38" cy="79" r="12" fill="#0CC1FA" stroke="white" strokeWidth="3" />
        <path d="M32.5 83C34.5 78.5 36.5 76 39 76C42 76 43.5 80.5 46 83" stroke="white" strokeWidth="2.8" strokeLinecap="round" />
        <path d="M32 83C34 79 35.5 77.5 37.5 77.5C40.5 77.5 42 82 44.5 82" stroke="white" strokeWidth="2.8" strokeLinecap="round" />

        <circle cx="82" cy="79" r="12" fill="#0CC1FA" stroke="white" strokeWidth="3" />
        <circle cx="76.5" cy="83" r="2.5" fill="white" />
        <rect x="80" y="76" width="4" height="7" rx="2" fill="white" />
        <rect x="86" y="71" width="4" height="12" rx="2" fill="white" />

        <circle cx="60" cy="87" r="13" fill="#0CC1FA" stroke="white" strokeWidth="3" />
        <path d="M53.5 87L58 91.5L67 81.5" stroke="white" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    text: "Mobiele gebruiksvriendelijkheid van jouw website",
    icon: (
      <>
        <circle cx="60" cy="60" r="57" fill="white" />
        <circle cx="60" cy="60" r="50" fill="#0CC1FA" />
        <rect x="38" y="27" width="44" height="66" rx="8" stroke="white" strokeWidth="3.5" />
        <path d="M53 33H67" stroke="white" strokeWidth="3.5" strokeLinecap="round" />
        <circle cx="60" cy="86" r="2.5" fill="white" />
        <rect x="45" y="43" width="30" height="7" rx="2.5" fill="white" />
        <rect x="45" y="55" width="13" height="13" rx="2.5" fill="white" />
        <rect x="62" y="55" width="13" height="13" rx="2.5" fill="white" />
        <rect x="45" y="73" width="30" height="5" rx="2.5" fill="white" />
        <circle cx="82" cy="77" r="12" fill="#0CC1FA" stroke="white" strokeWidth="3" />
        <path d="M76.5 77L80.5 81L88 73" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M91 59C94 62 95 65 95 69M96 54C99 58 101 63 101 68" stroke="white" strokeWidth="2.8" strokeLinecap="round" />
      </>
    ),
  },
  {
    text: "Technische lead-lekken (SSL, laadsnelheid, conversie-blokkades)",
    icon: (
      <>
        <circle cx="60" cy="60" r="57" fill="white" />
        <circle cx="60" cy="60" r="50" fill="#0CC1FA" />

        <rect x="34" y="32" width="52" height="45" rx="7" stroke="white" strokeWidth="3.5" />

        <path d="M35 45H85" stroke="white" strokeWidth="3.5" />
        <circle cx="42" cy="39" r="2.5" fill="white" />
        <circle cx="50" cy="39" r="2.5" fill="white" />

        <path d="M46 59C49 54 55 52 61 53" stroke="white" strokeWidth="3.2" strokeLinecap="round" />
        <path d="M61 53L59 59" stroke="white" strokeWidth="3.2" strokeLinecap="round" />

        <rect x="65" y="54" width="13" height="12" rx="2.5" stroke="white" strokeWidth="3" />
        <path d="M68 54V51C68 47.7 70.2 45.5 73 45.5C75.8 45.5 78 47.7 78 51V54" stroke="white" strokeWidth="3" strokeLinecap="round" />
        <circle cx="71.5" cy="60" r="1.5" fill="white" />

        <path d="M60 82L77 101H43L60 82Z" fill="#0CC1FA" stroke="white" strokeWidth="3.5" strokeLinejoin="round" />
        <path d="M60 89V94" stroke="white" strokeWidth="3.2" strokeLinecap="round" />
        <circle cx="60" cy="97" r="1.8" fill="white" />

        <path d="M39 84H51" stroke="white" strokeWidth="3" strokeLinecap="round" />
        <path d="M39 90H47" stroke="white" strokeWidth="3" strokeLinecap="round" />
      </>
    ),
  },
];

// Contact section wali exact classes
const inputClass =
  "w-full mt-2 border border-[#E5E7EB] rounded-[10px] px-4 py-3 font-gotham text-[14px] sm:text-[16px] text-[#0A192F] placeholder:text-black placeholder:font-gotham placeholder:text-[14px] sm:placeholder:text-[16px] outline-none transition-all duration-300 focus:border-[#0CC1FA] focus:ring-2 focus:ring-[#0CC1FA]/20";
const labelClass = "font-monument text-[13px] sm:text-[14px] text-[#333333]";

const fadeUp = (show: boolean, distance = "translate-y-10") =>
  `transition-all duration-700 ease-out ${
    show ? "opacity-100 translate-y-0" : `opacity-0 ${distance}`
  }`;

export default function ScanPage() {
  const [status, setStatus] = useState<Status>("idle");
  const router = useRouter();

  const hero = useInView<HTMLDivElement>(0.1);
  const heading = useInView<HTMLHeadingElement>(0.2);
  const cards = useInView<HTMLDivElement>(0.15);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "loading") return;

    const form = e.currentTarget;
    const fd = new FormData(form);

    // "https://" hoeft niet — automatisch aanvullen
    let website = String(fd.get("website") || "").trim();
    if (website && !/^https?:\/\//i.test(website)) {
      website = `https://${website}`;
    }

    const payload = {
      firstName: String(fd.get("firstName") || "").trim(),
      email: String(fd.get("email") || "").trim(),
      companyName: String(fd.get("companyName") || "").trim(),
      website,
    };

    setStatus("loading");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Request failed");

      const query = new URLSearchParams({
        naam: payload.firstName,
        email: payload.email,
        website: payload.website,
      });

      form.reset();
      router.push(`/scan/bedankt?${query.toString()}`);
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="relative">
            {/* ===== Section 1: navy bg, heading (full width) → form | image ===== */}
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#01152b] via-[#0a2f52] to-[#124a7d]">
        <div className="max-w-[1600px] mx-auto xl:px-15 md:px-6 px-4 pt-[150px] pb-[50px] md:pt-[140px] md:pb-[80px] lg:pt-40 xl:pt-50 lg:pb-[100px]">
          <div ref={hero.ref}>
            {/* ===== Top: badge + heading + paragraph (FULL WIDTH) ===== */}
            <div
              className={`flex w-full flex-col ${fadeUp(hero.visible)}`}
              style={{ transitionDelay: hero.visible ? "0ms" : "0ms" }}
            >
              <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-[#0CC1FA]/40 bg-[#0CC1FA]/10 px-4 py-2 mx-auto">
                <span className="h-1.5 w-1.5 rounded-full bg-[#0CC1FA]" />
                <span className="font-gotham font-bold text-[12px] text-[#0CC1FA] sm:text-[13px]">
                  100% Gratis · Geen Verplichtingen
                </span>
              </div>

              <h1 className="md:mb-6 mb-3 w-full md:max-w-[700px] text-center mx-auto break-words font-monument font-extrabold leading-[1.15] text-white text-[26px] sm:text-[30px] md:text-[24px] lg:text-[30px] xl:text-[36px] 2xl:text-[44px]">
                Claim Jouw Gratis{" "}
                <span className="text-[#0CC1FA]">Pixel &amp; Conversiescan</span>
              </h1>

              <p className="w-full md:max-w-[950px] text-center mx-auto font-gotham font-normal text-[16px] leading-relaxed text-white/80 xl:text-[18px]">
                Ontdek binnen 24 uur waar de digitale lead-lekken van jouw lokale onderneming zitten.
                Vul je gegevens in en ons systeem start direct de analyse van je website,
                tracking-pixels en mobiele conversie.
              </p>
            </div>

            {/* ===== Bottom: form | image (dono ki height barabar) ===== */}
            <div className="md:mt-10 mt-6 grid grid-cols-1 items-stretch gap-8 md:grid-cols-2 lg:gap-10">
              {/* Form card — contact card jaisi (white, rounded-[24px], #E5E7EB border) */}
              <div
                className={`w-full rounded-[24px] border border-[#E5E7EB] bg-white px-6 py-8 sm:px-9 sm:py-10 ${fadeUp(hero.visible)}`}
                style={{ transitionDelay: hero.visible ? "150ms" : "0ms" }}
              >
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div>
                    <label htmlFor="firstName" className={labelClass}>
                      Voornaam <span className="text-[#0CC1FA]">*</span>
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      placeholder="Jan"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className={labelClass}>
                      E-mailadres (Zakelijk) <span className="text-[#0CC1FA]">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="jan@jouwbedrijf.nl"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="companyName" className={labelClass}>
                      Bedrijfsnaam <span className="text-[#0CC1FA]">*</span>
                    </label>
                    <input
                      id="companyName"
                      name="companyName"
                      type="text"
                      required
                      placeholder="Jouw Bedrijf BV"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="website" className={labelClass}>
                      Website <span className="text-[#0CC1FA]">*</span>
                    </label>
                    <input
                      id="website"
                      name="website"
                      type="text"
                      required
                      placeholder="www.jouwbedrijf.nl"
                      className={inputClass}
                    />
                    <p className="mt-2 font-gotham font-normal text-[12px] text-black/40 sm:text-[13px]">
                      &quot;https://&quot; hoeft niet, die vullen we automatisch aan.
                    </p>
                  </div>

                  {/* Button — contact button jaisa (slide effect + spinner) */}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="group relative overflow-hidden mt-[1.5vh] w-full h-[48px] sm:h-[52px] xl:h-[54px] rounded-[319px] bg-[#0CC1FA] font-gotham font-bold text-[15px] md:text-[13px] xl:text-[16px] text-white flex items-center justify-center gap-2 transition-all duration-500 ease-out active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <span className="absolute inset-0 bg-[#012549] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                    <span className="relative z-10 flex items-center gap-2">
                      {status === "loading" ? (
                        <>
                          <svg
                            className="animate-spin h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                            />
                          </svg>
                          Bezig met versturen...
                        </>
                      ) : (
                        <>
                          Start Mijn Gratis Analyse
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </>
                      )}
                    </span>
                  </button>

                  {status === "error" && (
                    <p
                      role="alert"
                      className="mt-3 font-gotham text-[13px] sm:text-[14px] text-red-600 text-center"
                    >
                      Er ging iets mis. Probeer het opnieuw.
                    </p>
                  )}
                </form>

                {/* Trust stats */}
                <div className="mt-8 grid grid-cols-3 gap-3 border-t border-[#E5E7EB] pt-6">
                  {trustStats.map((stat) => (
                    <div key={stat.label} className="flex flex-col items-center gap-2 text-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                        {stat.icon}
                      </svg>
                      <span className="font-gotham font-normal text-[11px] leading-tight text-black/70 sm:text-[13px]">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image: form card ki poori height ke barabar */}
              <div
                className={`relative h-[260px] w-full sm:h-[340px] md:h-auto ${fadeUp(hero.visible)}`}
                style={{ transitionDelay: hero.visible ? "300ms" : "0ms" }}
              >
                <img
                  src="/scan.webp"
                  alt=""
                  className="absolute inset-0 h-full w-full rounded-3xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Section 2: 3 cards ===== */}
      <section className="bg-[#F5F9FC] max-w-[1600px] mx-auto">
        <div className="max-w-[1200px] mx-auto xl:px-15 md:px-6 px-4 pt-[50px] md:pt-[80px] lg:pt-[100px]">
          <h2
            ref={heading.ref}
            className={`text-center font-monument font-extrabold text-[26px] sm:text-[32px] xl:text-[40px] text-[#012549] tracking-[0.02em] leading-[34px] sm:leading-[40px] xl:leading-[46px] ${fadeUp(heading.visible, "translate-y-6")}`}
          >
            Wat analyseren wij?
          </h2>

          {/* Mobile: column | md+: row */}
          <div
            ref={cards.ref}
            className="mt-16 flex flex-col gap-14 md:mt-16 md:flex-row md:gap-6 xl:mt-20 xl:gap-8"
          >
            {analysisPoints.map((point, i) => (
              <div
                key={point.text}
                className={`flex flex-1 md:min-w-0 ${fadeUp(cards.visible, "translate-y-8")}`}
                style={{ transitionDelay: cards.visible ? `${i * 120}ms` : "0ms" }}
              >
                <div className="group relative flex w-full cursor-pointer flex-col transition-transform duration-500 ease-out hover:-translate-y-2">
                  {/* Icon: card ke upar, beech mein (absolute) — koi shadow/blur nahi */}
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

                  {/* Card */}
                  <div className="relative flex-1 overflow-hidden rounded-[24px] border border-black/5 bg-white px-6 pb-7 pt-12 text-center shadow-[0px_4px_29.8px_0px_#00000012] transition-shadow duration-500 ease-out group-hover:shadow-[0_20px_50px_rgba(12,193,250,0.18)] md:px-4 md:pb-6 md:pt-10 xl:px-8 xl:pb-9 xl:pt-14">
                    <p className="font-gotham leading-[149%] text-[#012549] text-[16px] xl:text-[18px]">
                      {point.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}