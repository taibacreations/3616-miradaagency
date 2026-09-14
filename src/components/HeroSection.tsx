import Image from "next/image";
import Button from "./ui/Button";

const features = [
  "Transparante werkwijze",
  "Technisch waterdicht",
  "Vast aanspreekpunt",
  "Meetbare resultaten",
];

export default function HeroSection() {
  return (
    <section id="hero" className="relative h-[105vh] w-full overflow-hidden">

      <div className="absolute inset-0 z-0">
        <Image
          src="/banner.webp"
          alt="Team dat AI-workflows bespreekt"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[70%] xl:object-center "
        />
      </div>

      <div className="relative mt-[60px] z-10 mx-auto flex h-full max-w-content flex-col justify-center px-6 lg:px-8">
        <div className="max-w-full sm:max-w-full lg:max-w-[700px]">
          {/* Eyebrow + Heading */}
          <div className="animate-fade-in-left flex items-center-safe gap-2 md:gap-6">
            <span className="w-1 h-[100px] md:h-[120px] lg:h-[155px] shrink-0 rounded-full bg-white/80" />
            <div>
              <p className="md:mb-3 lg:mb-5 font-gotham font-light text-white/90 text-[15px] md:text-[17px] lg:text-[18px] xl:text-[20px]">
                Slimme AI-Workflows &amp; Converterende Websites
              </p>

              <h1 className="font-monument font-extrabold tracking-widest md:leading-14 lg:leading-16 text-white text-[28px] md:text-[40px] lg:text-[50px] xl:text-[60px]">
                Voor Lokale
                <br />
                Ondernemers.
              </h1>
            </div>
          </div>

          {/* Subheading */}
          <p className="animate-fade-in-left [animation-delay:150ms] mt-3 mb-3 font-gotham font-light text-white text-[15px] md:text-[17px] lg:text-[18px]  xl:text-[20px]">
            AI &amp; Marketing Voor Lokale Ondernemers
          </p>

          {/* Paragraph */}
          <p className="animate-fade-in-left [animation-delay:300ms] mb-[28px] max-w-[620px] font-gotham font-light leading-relaxed text-white/90 text-[13px] md:text-[15px] lg:text-[16px] xl:text-[18px] capitalize">
            Wij dichten de online lead-lekken van ambitieuze bedrijven, automatiseren
            handmatig werk en transformeren websiteverkeer in loyale klanten uit de regio.
          </p>

          {/* CTAs */}
          <div className="animate-fade-in-left [animation-delay:450ms] mb-12 flex flex-wrap items-center gap-2 lg:gap-6 lg:mb-[51px]">
            <Button href="/scan" variant="primary" className="lg:pl-[25px] lg:pr-[12px] lg:py-[13px]" icon>
              Claim Jouw Gratis Scan
            </Button>
            <Button href="#diensten" variant="link">
              Ontdek onze diensten
            </Button>
          </div>
        </div>

        {/* Feature checklist card */}
        <div className="animate-fade-in-left [animation-delay:600ms] w-full rounded-[20px] border border-white/80 bg-white/[0.10] px-4 py-7.5 backdrop-blur-md sm:max-w-[530px]">
          <div className="w-fit mx-auto grid grid-cols-1 gap-x-[20px] gap-y-[8px] sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-[9px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <g clipPath="url(#clip0_54_460)">
                    <path d="M8.30203 15.2201C12.1229 15.2201 15.2203 12.1227 15.2203 8.30185C15.2203 4.48101 12.1229 1.38361 8.30203 1.38361C4.48119 1.38361 1.38379 4.48101 1.38379 8.30185C1.38379 12.1227 4.48119 15.2201 8.30203 15.2201Z" stroke="white" strokeWidth="1.38365" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M6.22656 8.30186L7.61021 9.68551L10.3775 6.91821" stroke="white" strokeWidth="1.38365" strokeLinecap="round" strokeLinejoin="round"></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_54_460">
                      <rect width="16.6038" height="16.6038" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
                <span className="font-gotham font-light text-[13px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-white">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}