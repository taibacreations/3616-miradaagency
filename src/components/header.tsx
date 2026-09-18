"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Diensten", href: "#" },
  { label: "Werkwijze", href: "#" },
  { label: "Gratis Scan", href: "#" },
  { label: "Over Mij", href: "#" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <section>
      <div
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ease-out ${
          scrolled
            ? "bg-black/40 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.15)]"
            : "bg-transparent backdrop-blur-0"
        }`}
      >
        <div
          className={`relative flex justify-between items-center max-w-[1560px] mx-auto xl:px-10 md:px-6 px-4 pt-[2vh] pb-2 transition-all duration-700 ease-out ${
            scrolled ? "xl:py-6" : "xl:py-12"
          } ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
        >
          {/* Logo — left on mobile/tablet, absolute-centered on lg+ */}
          <Link
            href="/"
            className={`relative z-10 transition-all duration-700 ease-out xl:absolute xl:left-1/2 xl:-translate-x-1/2 ${
              scrolled ? "xl:top-1" : "xl:top-1"
            } ${mounted ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
          >
            <Image
              src={"/logo.svg"}
              height={100}
              width={100}
              alt="Logo"
              className={`h-auto transition-all duration-500 ease-out ${
                scrolled ? "w-[90px] lg:w-[120px]" : "w-[120px] xl:w-[140px] 2xl:w-[168px]"
              }`}
            />
          </Link>

          {/* Desktop Nav — visible only lg+ */}
          <nav className="hidden xl:flex gap-10 items-center">
            {navLinks.map((link, i) => (
              <Link
                key={link.label}
                className="group relative font-gotham font-light text-[18px] leading-[100%] text-white transition-all duration-700 ease-out"
                style={{
                  transitionDelay: mounted ? `${150 + i * 80}ms` : "0ms",
                  opacity: mounted ? 1 : 0,
                  transform: mounted ? "translateY(0)" : "translateY(-10px)",
                }}
                href={link.href}
              >
                {link.label}
                <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-white transition-all duration-300 ease-out group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Right side: hamburger (below xl) / contact button (xl+) */}
          <div className="relative z-10">
            <Link href={"#"}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              onClick={() => setIsOpen((prev) => !prev)}
              className={`xl:hidden relative flex items-center justify-center w-10 h-10 shrink-0 transition-all duration-700 ease-out ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-4"
              }`}
            >
              <span className="relative block w-6 h-[14px]">
                <span
                  className={`absolute left-0 top-0 block w-6 h-[2px] bg-white rounded-full transition-all duration-300 ease-out origin-center ${
                    isOpen ? "rotate-45 top-[6px]" : "rotate-0"
                  }`}
                />
                <span
                  className={`absolute left-0 top-[6px] block w-6 h-[2px] bg-white rounded-full transition-all duration-300 ease-out ${
                    isOpen ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"
                  }`}
                />
                <span
                  className={`absolute left-0 bottom-0 block w-6 h-[2px] bg-white rounded-full transition-all duration-300 ease-out origin-center ${
                    isOpen ? "-rotate-45 bottom-[6px]" : "rotate-0"
                  }`}
                />
              </span>
            </Link>

            <div
              className={`hidden xl:block transition-all duration-700 ease-out ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-4"
              }`}
              style={{ transitionDelay: mounted ? "450ms" : "0ms" }}
            >
              <ContactButton />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile / Tablet Sidebar — up to lg */}
      <div
        className={`fixed inset-0 z-[60] xl:hidden transition-opacity duration-500 ease-out ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          onClick={() => setIsOpen(false)}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />

        <div
          className={`absolute right-0 top-0 h-full w-[80%] max-w-[340px] bg-[#0a0a0a] px-8 py-10 flex flex-col gap-2 shadow-2xl transition-transform duration-500 ease-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            aria-label="Close menu"
            onClick={() => setIsOpen(false)}
            className="self-end mb-10 w-10 h-10 flex items-center justify-center text-white text-2xl transition-transform duration-300 hover:rotate-90"
          >
            &times;
          </button>

          <nav className="flex flex-col gap-8">
            {navLinks.map((link, i) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-gotham font-light text-[22px] text-white transition-all duration-500 ease-out hover:pl-2 hover:text-[#0CC1FA]"
                style={{
                  transitionDelay: isOpen ? `${150 + i * 80}ms` : "0ms",
                  opacity: isOpen ? 1 : 0,
                  transform: isOpen ? "translateX(0)" : "translateX(20px)",
                }}
              >
                {link.label}
              </Link>
            ))}

            {/* Contact button appears here, only while sidebar opens */}
            <div
              className="mt-6 transition-all duration-500 ease-out w-full"
              style={{
                transitionDelay: isOpen ? "550ms" : "0ms",
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? "translateY(0)" : "translateY(12px)",
              }}
            >
              <ContactButton full />
            </div>
          </nav>
        </div>
      </div>
    </section>
  );
};

const ContactButton = ({ full = false }: { full?: boolean }) => {
  return (
    <Link href={"#"}
      className={`group relative overflow-hidden flex justify-center items-center gap-3 font-gotham font-medium text-[16px] text-white h-[50px] rounded-[319px] transition-all duration-500 ease-out bg-[#0CC1FA] hover:shadow-[0_8px_30px_rgba(12,193,250,0.55)] active:scale-95 ${
        full ? "w-full" : "w-[134px]"
      }`}
    >
      {/* sliding color layer on hover */}
      <span className="absolute inset-0 bg-gradient-to-r from-[#0aa8dd] to-[#0CC1FA] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />

      <span className="relative z-10 transition-transform duration-300 ease-out">
        Contact
      </span>

      <div className="relative z-10 bg-white rounded-full w-[30px] h-[30px] flex justify-center items-center transition-transform duration-500 ease-out">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          className="transition-transform duration-500 ease-out group-hover:rotate-[45deg]"
        >
          <path
            d="M9.28027 0.750001C9.28027 0.335787 8.94449 4.2594e-07 8.53027 5.73454e-07L1.78027 1.51986e-07C1.36606 1.51986e-07 1.03027 0.335786 1.03027 0.75C1.03027 1.16421 1.36606 1.5 1.78027 1.5H7.78027V7.5C7.78027 7.91421 8.11606 8.25 8.53027 8.25C8.94449 8.25 9.28027 7.91421 9.28027 7.5L9.28027 0.750001ZM0.530273 8.75L1.0606 9.28033L9.0606 1.28033L8.53027 0.75L7.99994 0.21967L-5.66393e-05 8.21967L0.530273 8.75Z"
            fill="#0CC1FA"
          ></path>
        </svg>
      </div>
    </Link>
  );
};

export default Header;
