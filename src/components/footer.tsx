"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";


const services = [
  "AI Automatiseringen",
  "AI Chatbots",
  "Website Ontwikkeling",
  "Online Advertenties (Google & Meta)",
];

const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="8"
    height="9"
    viewBox="0 0 8 9"
    fill="none"
    className="shrink-0"
  >
    <path
      d="M7.5 4.33008L-4.07833e-07 8.66021L-2.92811e-08 -4.94421e-05L7.5 4.33008Z"
      fill="white"
    ></path>
  </svg>
);

const contacts = [
  {
    label: "info@miradaintelligence.nl",
    href: "mailto:info@miradaintelligence.nl",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="13"
        height="10"
        viewBox="0 0 13 10"
        fill="none"
      >
        <path
          d="M11.4054 0C12.0445 0 12.5852 0.540772 12.5852 1.17987C12.5852 1.57315 12.3886 1.91728 12.0936 2.13851L6.75965 6.14514C6.46468 6.36636 6.09597 6.36636 5.80101 6.14514L0.46703 2.13851C0.172064 1.91728 0 1.57315 0 1.17987C0 0.540772 0.516191 0 1.17987 0H11.4054ZM5.33398 6.78423C5.89933 7.2021 6.66133 7.2021 7.22668 6.78423L12.5852 2.75302V7.86577C12.5852 8.75067 11.8724 9.43893 11.0121 9.43893H1.57315C0.688255 9.43893 0 8.75067 0 7.86577V2.75302L5.33398 6.78423Z"
          fill="#036DAB"
        ></path>
      </svg>
    ),
  },
  {
    label: "+31 6 4135 3424",
    href: "tel:+31641353424",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="13"
        height="13"
        viewBox="0 0 14 14"
        fill="none"
      >
        <path
          d="M13.0851 9.90038L12.4705 12.4867C12.3937 12.8708 12.0864 13.1268 11.7023 13.1268C5.24941 13.1012 0 7.85183 0 1.3989C0 1.01479 0.230462 0.707512 0.614565 0.630691L3.20086 0.0161264C3.55935 -0.0606942 3.94346 0.144161 4.0971 0.47705L5.30062 3.2682C5.42866 3.60109 5.35184 3.98519 5.07016 4.19005L3.68739 5.31675C4.55802 7.08362 5.99201 8.51761 7.78449 9.38824L8.91119 8.00547C9.11604 7.7494 9.50015 7.64697 9.83304 7.77501L12.6242 8.97853C12.9571 9.15778 13.1619 9.54188 13.0851 9.90038Z"
          fill="#036DAB"
        ></path>
      </svg>
    ),
  },
];

const Footer = () => {
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
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const anim = (show: boolean) =>
    `transition-all duration-700 ease-out ${
      show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
    }`;

  const linkText =
    "font-gotham text-[14px] sm:text-[16px] xl:text-[18px] leading-[20px] xl:leading-normal";
  const headingText =
    "font-monument text-[20px] sm:text-[22px] xl:text-[24px] text-white";


  const router = useRouter();
  const pathname = usePathname();
  const pendingScrollId = useRef<string | null>(null);

  const scrollToSection = (id: string) => {
    const target = document.getElementById(id);
    if (!target) return;

    const offset = window.innerHeight * 0.1; // header wala hi 10% offset
    const top = target.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({ top, behavior: "smooth" });
  };

  // Home par navigate hone ke baad pending section tak scroll karo
  useEffect(() => {
    if (pathname === "/" && pendingScrollId.current) {
      const id = pendingScrollId.current;
      const timer = setTimeout(() => {
        scrollToSection(id);
        pendingScrollId.current = null;
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  const handleFooterClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    e.preventDefault();

    // Doosre page (/scan, /privacy...) par ho to pehle home par jao
    if (pathname !== "/") {
      pendingScrollId.current = id;
      router.push("/");
      return;
    }

    scrollToSection(id);
  };

  // Logo: home par ho to top par scroll, warna home page par jao
  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (pathname !== "/") {
      router.push("/");
      return;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      className="text-white pt-[8vh] sm:pt-[10vh] xl:pt-[12.8vh] overflow-hidden"
    >
      <div className="2xl:px-15 xl:px-10 md:px-6 px-4">
        {/* Image + bar dono isi wrapper mein => width hamesha barabar */}
        <div className="max-w-[1800px] mx-auto">
          {/* Card: <lg gradient (work jaisa) | lg+ footer.png */}
          <div
            className="relative rounded-t-[28px] lg:rounded-none
            bg-gradient-to-br from-[#01152b] via-[#0a2f52] to-[#124a7d] lg:bg-none
            pt-10 sm:pt-14 md:pt-16 pb-10 sm:pb-14 md:pb-16 lg:py-0"
          >
            {/* lg+: image apni natural ratio mein, height auto */}
            <img
              src="/footer.png"
              alt="footer background"
              className="hidden lg:block w-full h-auto lg:pb-[30px] xl:pb-0"
            />

            {/* Content: <lg normal flow | lg+ image ke upar centered */}
            <div
              className="px-5 sm:px-8 md:px-12 lg:px-[6%] xl:px-[8%] 2xl:px-[9.7%]
              lg:absolute lg:inset-x-0 lg:top-[10%] lg:bottom-[40px] lg:flex lg:items-center"
            >
              <div className="w-full flex flex-col lg:flex-row lg:justify-between lg:items-center gap-8 md:gap-10 lg:gap-6">
                {/* ROW 1 (md): Logo + description */}
                <div
                  className={`flex flex-col md:flex-row md:items-center gap-4 md:gap-8 lg:flex-col lg:items-start lg:gap-3 xl:gap-4 lg:w-[35%] 2xl:max-w-[486px] ${anim(visible)}`}
                  style={{ transitionDelay: visible ? "0ms" : "0ms" }}
                >
                  <Link href="/" onClick={handleLogoClick}>
                    <img
                      src="/logo.svg"
                      alt="logo"
                      className="w-[200px] md:w-[200px] md:shrink-0 lg:w-[170px] xl:w-[clamp(220px,15.3vw,294px)] h-auto"
                    />
                  </Link>
                  <p
                    className={`${linkText} md:flex-1 md:max-w-[340px] lg:flex-none lg:max-w-none text-white capitalize`}
                  >
                    AI-oplossingen, automatiseringen én online marketing voor
                    lokale ondernemers. Meer tijd, meer klanten, meer groei.
                  </p>
                </div>

                {/* ROW 2 (md): Diensten + Contact */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 md:gap-6 lg:w-[55%] lg:gap-4 ">
                  {/* Diensten */}
                  <div
                    className={`lg:max-w-[210px] xl:max-w-none ${anim(visible)}`}
                    style={{ transitionDelay: visible ? "150ms" : "0ms" }}
                  >
                    <h3 className={headingText}>Diensten</h3>
                    <div className="flex flex-col gap-3 mt-3 xl:mt-4 ">
                      {services.map((label) => (
                        <div key={label} className="flex items-center gap-3 hover:text-[#0CC1FA]">
                          <ArrowIcon />
                          <Link
                            href="/#service"
                            onClick={(e) => handleFooterClick(e, "service")}
                            className={linkText}
                          >
                            {label}
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Contact */}
                  <div
                    className={`md:shrink-0 ${anim(visible)}`}
                    style={{ transitionDelay: visible ? "300ms" : "0ms" }}
                  >
                    <h3 className={headingText}>Contact</h3>
                    <div className="flex flex-col gap-3 xl:gap-4 mt-3 xl:mt-4">
                      {contacts.map((item) => (
                        <div
                          key={item.label}
                          className="flex items-center gap-3 hover:text-[#0CC1FA]"
                        >
                          <div className="bg-white rounded-full w-[25px] h-[25px] flex justify-center items-center shrink-0">
                            {item.icon}
                          </div>
                          <Link
                            href={item.href}
                            className={`${linkText} break-words`}
                          >
                            {item.label}
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar: <lg card se jura hua (no gap) | lg+ image ke bottom par overlap */}
          <div
            className={`relative z-10 bg-[#0CC1FA] w-full min-h-[50px] lg:h-[60px] px-4 py-3 lg:py-0
             lg:-mt-[45px]
            flex justify-center items-center text-center font-gotham text-white
            text-[14px] sm:text-[16px] xl:text-[18px] leading-[18px] xl:leading-normal
            ${anim(visible)}`}
            style={{ transitionDelay: visible ? "450ms" : "0ms" }}
          >
            © 2026 Mirada Management B.V. Alle rechten voorbehouden. | KvK:
            42084347
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
