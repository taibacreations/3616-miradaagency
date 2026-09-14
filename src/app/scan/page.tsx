import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";

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

const analysisPoints = [
  "Aanwezigheid & correcte installatie van tracking-pixels (Meta Pixel, GA4)",
  "Mobiele gebruiksvriendelijkheid van jouw website",
  "Technische lead-lekken (SSL, laadsnelheid, conversie-blokkades)",
];

export default function ScanPage() {
  return (
    <main className="relative ">
      <Navbar />

      <section className="relative w-full overflow-hidden bg-navy-950">
        <div className="mx-auto max-w-content px-6 py-20 sm:px-8 sm:py-24 lg:py-45">

          {/* Heading block */}
          <div className="mx-auto max-w-[720px] text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#0CC1FA]/40 bg-[#0CC1FA]/10 px-4 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0CC1FA]" />
              <span className="font-gotham font-bold text-[12px] text-[#0CC1FA] sm:text-[13px]">
                100% Gratis — Geen Verplichtingen
              </span>
            </div>

            <h1 className="mb-6 font-monument font-extrabold leading-[1.1] text-white text-[clamp(28px,5vw,44px)]">
              Claim Jouw Gratis{" "}
              <span className="text-[#0CC1FA]">Pixel- &amp; Conversiescan</span>
            </h1>

            <p className="mx-auto max-w-[560px] font-gotham font-normal text-[15px] leading-relaxed text-white/70 sm:text-[17px]">
              Ontdek binnen 24 uur waar de digitale lead-lekken van jouw lokale onderneming zitten.
              Vul je gegevens in en ons systeem start direct de analyse van je website,
              tracking-pixels en mobiele conversie.
            </p>
          </div>

          {/* Form card */}
          <div className="mx-auto mt-10 max-w-[560px] rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-8 sm:px-9 sm:py-10">
            <form className="flex flex-col gap-5">
              <div>
                <label htmlFor="firstName" className="mb-2 block font-gotham font-bold text-[14px] text-white sm:text-[15px]">
                  Voornaam <span className="text-[#0CC1FA]">*</span>
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  placeholder="Jan"
                  className="w-full rounded-xl border border-white/15 bg-transparent px-4 py-3 font-gotham font-normal text-[14px] text-white outline-none transition-colors placeholder:text-white/35 focus:border-[#0CC1FA] sm:text-[15px]"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block font-gotham font-bold text-[14px] text-white sm:text-[15px]">
                  E-mailadres (Zakelijk) <span className="text-[#0CC1FA]">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="jan@jouwbedrijf.nl"
                  className="w-full rounded-xl border border-white/15 bg-transparent px-4 py-3 font-gotham font-normal text-[14px] text-white outline-none transition-colors placeholder:text-white/35 focus:border-[#0CC1FA] sm:text-[15px]"
                />
              </div>

              <div>
                <label htmlFor="companyName" className="mb-2 block font-gotham font-bold text-[14px] text-white sm:text-[15px]">
                  Bedrijfsnaam <span className="text-[#0CC1FA]">*</span>
                </label>
                <input
                  id="companyName"
                  name="companyName"
                  type="text"
                  required
                  placeholder="Jouw Bedrijf BV"
                  className="w-full rounded-xl border border-white/15 bg-transparent px-4 py-3 font-gotham font-normal text-[14px] text-white outline-none transition-colors placeholder:text-white/35 focus:border-[#0CC1FA] sm:text-[15px]"
                />
              </div>

              <div>
                <label htmlFor="website" className="mb-2 block font-gotham font-bold text-[14px] text-white sm:text-[15px]">
                  Website <span className="text-[#0CC1FA]">*</span>
                </label>
                <input
                  id="website"
                  name="website"
                  type="text"
                  required
                  placeholder="www.jouwbedrijf.nl"
                  className="w-full rounded-xl border border-white/15 bg-transparent px-4 py-3 font-gotham font-normal text-[14px] text-white outline-none transition-colors placeholder:text-white/35 focus:border-[#0CC1FA] sm:text-[15px]"
                />
                <p className="mt-2 font-gotham font-normal text-[12px] text-white/40 sm:text-[13px]">
                  &quot;https://&quot; hoeft niet — die vullen we automatisch aan.
                </p>
              </div>

              <button
                type="submit"
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-[#0CC1FA] py-4 font-gotham font-bold text-[15px] text-navy-950 transition-colors hover:bg-[#0A93C4] sm:text-[16px]"
              >
                Start Mijn Gratis Analyse
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </form>

            {/* Trust stats */}
            <div className="mt-8 grid grid-cols-3 gap-3 border-t border-white/10 pt-6">
              {trustStats.map((stat) => (
                <div key={stat.label} className="flex flex-col items-center gap-2 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                    {stat.icon}
                  </svg>
                  <span className="font-gotham font-normal text-[11px] leading-tight text-white/70 sm:text-[13px]">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Wat analyseren wij */}
          <div className="mx-auto mt-6 max-w-[560px] rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-7 sm:px-9 sm:py-8">
            <h3 className="mb-5 font-gotham font-bold text-[17px] text-white sm:text-[18px]">
              Wat analyseren wij?
            </h3>
            <div className="flex flex-col gap-4">
              {analysisPoints.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 17 17" fill="none" className="mt-0.5 shrink-0">
                    <circle cx="8.5" cy="8.5" r="7.7" stroke="#0CC1FA" strokeWidth="1.2" />
                    <path d="M5.5 8.7l2 2 4-4.4" stroke="#0CC1FA" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <p className="font-gotham font-normal text-[14px] leading-relaxed text-white/85 sm:text-[15px]">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* <div className="bg-[#F5F9FC] xl:pt-8">
                  <Footer/>
              </div>
             */}
    </main>
  );
}