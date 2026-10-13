"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { scrollToSectionId } from "@/lib/scroll";

// Page ke sections ke order mein hi rakhna
const sectionLinks = [
  { label: "Diensten", href: "/#diensten" },
  { label: "Waarom wij", href: "/#waarom-wij" },
  { label: "Automatisering", href: "/#automatisering" },
  { label: "Werkwijze", href: "/#werkwijze" },
  { label: "Over ons", href: "/#over" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
];

// Sections jinka menu link nahi hai. Jab ye screen par hon to koi link
// highlight nahi hota (Offers, Result, Gurantee).
const SPY_ONLY_IDS = ["voordelen", "resultaat", "garantie"];

// Desktop: 5 links left of the logo; right = 2 links + GEO + Gratis scan
const LEFT_COUNT = 5;
const leftLinks = sectionLinks.slice(0, LEFT_COUNT);
const rightLinks = sectionLinks.slice(LEFT_COUNT);

// Separate pages
const pageLinks = {
  geo: { label: "GEO", href: "/geo" },
  scan: { label: "Gratis scan", href: "/scan" },
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  const router = useRouter();
  const pathname = usePathname();
  const pendingScrollId = useRef<string | null>(null);

  // Click-scroll ke dauran spy ko rok do (highlight flicker na ho)
  const autoScrolling = useRef(false);
  const releaseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const updateActiveRef = useRef<(() => void) | null>(null);

  const armRelease = () => {
    if (releaseTimer.current) clearTimeout(releaseTimer.current);
    releaseTimer.current = setTimeout(() => {
      autoScrolling.current = false;
      updateActiveRef.current?.();
    }, 200);
  };

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

  // Scrollspy: har scroll par fresh measure (layout shift se kharab nahi hota)
  useEffect(() => {
    if (pathname !== "/") return;

    const linkIds = sectionLinks.map((l) => l.href.split("#")[1]);
    const allIds = [...linkIds, ...SPY_ONLY_IDS];
    let ticking = false;

    const updateActive = () => {
      ticking = false;
      const line = window.innerHeight * 0.3;

      let current = "";
      let bestTop = -Infinity;
      for (const id of allIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top <= line && top > bestTop) {
          bestTop = top;
          current = id;
        }
      }

      // Spy-only sections (Offers/Result/Gurantee) => koi link active nahi
      setActiveSection(linkIds.includes(current) ? current : "");
    };

    updateActiveRef.current = updateActive;

    const onScroll = () => {
      if (autoScrolling.current) {
        armRelease();
        return;
      }
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(updateActive);
      }
    };

    updateActive();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (releaseTimer.current) clearTimeout(releaseTimer.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Doosre page se aane ke baad pending section tak scroll (retry ke sath)
  useEffect(() => {
    if (pathname !== "/" || !pendingScrollId.current) return;
    const id = pendingScrollId.current;
    let tries = 0;
    let timer: ReturnType<typeof setTimeout>;

    const attempt = () => {
      if (scrollToSection(id) || tries++ > 15) {
        pendingScrollId.current = null;
        return;
      }
      timer = setTimeout(attempt, 100);
    };

    timer = setTimeout(attempt, 150);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Direct URL jaise /#faq kholne par bhi sahi position par scroll
  useEffect(() => {
    if (pathname !== "/") return;
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;
    const timer = setTimeout(() => scrollToSection(hash), 400);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Home se hat kar kisi aur page par jao to highlight clear
  useEffect(() => {
    if (pathname !== "/") setActiveSection("");
  }, [pathname]);

  const scrollToSection = (id: string) => {
    if (!scrollToSectionId(id)) return false;
    autoScrolling.current = true;
    armRelease();
    setActiveSection(id);
    return true;
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    // Separate pages (/scan, /geo): normal navigation, menu band karo
    if (!href.includes("#")) {
      setIsOpen(false);
      return;
    }

    const id = href.split("#")[1];
    e.preventDefault();

    const wasOpen = isOpen;
    setIsOpen(false);

    if (pathname !== "/") {
      pendingScrollId.current = id;
      router.push("/");
      return;
    }

    // Mobile menu ke body-lock hatne ka intezar, phir scroll
    if (wasOpen) {
      setTimeout(() => scrollToSection(id), 80);
    } else {
      scrollToSection(id);
    }
  };

  const isSectionActive = (href: string) =>
    pathname === "/" && activeSection === href.split("#")[1];

  const isPageActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  const geoActive = isPageActive(pageLinks.geo.href);
  const scanActive = isPageActive(pageLinks.scan.href);

  const renderDesktopLink = (
    link: (typeof sectionLinks)[number],
    delayIndex: number,
  ) => {
    const active = isSectionActive(link.href);
    return (
      // Wrapper entrance animation (delay ke sath) sambhalta hai
      <span
        key={link.label}
        className="inline-block transition-[opacity,transform] duration-700 ease-out"
        style={{
          transitionDelay: mounted ? `${150 + delayIndex * 80}ms` : "0ms",
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(-10px)",
        }}
      >
        {/* Link par sirf fast color transition, koi delay nahi */}
        <Link
          href={link.href}
          aria-current={active ? "location" : undefined}
          onClick={(e) => handleNavClick(e, link.href)}
          className={`group relative block whitespace-nowrap text-[15px] 2xl:text-[18px] leading-[100%] transition-colors duration-300 ease-out ${
            active ? "text-[#0CC1FA]" : "text-white"
          }`}
        >
          {link.label}
          <span
            className={`absolute left-0 -bottom-1 h-[1px] bg-[#0CC1FA] transition-all duration-300 ease-out ${
              active ? "w-full" : "w-0 group-hover:w-full"
            }`}
          />
        </Link>
      </span>
    );
  };

  return (
    <section>
      <div
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ease-out ${
          scrolled
            ? "bg-[#012549]/95 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.35)]"
            : "bg-transparent backdrop-blur-0"
        }`}
      >
        {/* Mobile/tablet: flex (logo left, hamburger right).
            xl+: 3-column grid -> left links | centered logo | right links + GEO + button */}
        <div
          className={`relative flex items-center justify-between gap-6 xl:grid xl:grid-cols-[1fr_auto_1fr] max-w-[1560px] mx-auto xl:px-10 md:px-6 px-4 pt-[1vh] pb-1 transition-all duration-700 ease-out ${
            scrolled ? "xl:py-3" : "xl:py-6"
          } ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
        >
          {/* Left column (xl+): 5 links */}
          <nav className="hidden xl:flex items-center justify-start gap-5 2xl:gap-8 min-w-0">
            {leftLinks.map((link, i) => renderDesktopLink(link, i))}
          </nav>

          {/* Logo — centered on xl+, left on smaller screens */}
          <Link
            href="/"
            className={`relative z-10 shrink-0 justify-self-center transition-all duration-700 ease-out ${
              mounted ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          >
            <Image
              src={"/logo.svg"}
              height={100}
              width={100}
              alt="Logo"
              className={`h-auto transition-all duration-500 ease-out ${
                scrolled
                  ? "w-[90px] lg:w-[110px] xl:w-[110px] mt-[-10px] xl:mt-0"
                  : "w-[120px] xl:w-[130px] 2xl:w-[150px]"
              }`}
            />
          </Link>

          {/* Right column (xl+): Over mij, Contact, GEO (underlined link), Gratis scan (button) */}
          <div className="hidden xl:flex items-center justify-end gap-5 2xl:gap-8 min-w-0">
            <nav className="flex items-center gap-5 2xl:gap-8">
              {rightLinks.map((link, i) =>
                renderDesktopLink(link, LEFT_COUNT + i),
              )}

              {/* GEO: simple page link, always underlined */}
              <span
                className="inline-block transition-[opacity,transform] duration-700 ease-out"
                style={{
                  transitionDelay: mounted
                    ? `${150 + (LEFT_COUNT + rightLinks.length) * 80}ms`
                    : "0ms",
                  opacity: mounted ? 1 : 0,
                  transform: mounted ? "translateY(0)" : "translateY(-10px)",
                }}
              >
                <Link
                  href={pageLinks.geo.href}
                  aria-current={geoActive ? "page" : undefined}
                  onClick={(e) => handleNavClick(e, pageLinks.geo.href)}
                  className={`block whitespace-nowrap text-[15px] 2xl:text-[18px] leading-[100%] underline underline-offset-[6px] decoration-1 transition-colors duration-300 ease-out hover:text-[#0CC1FA] ${
                    geoActive ? "text-[#0CC1FA]" : "text-white"
                  }`}
                >
                  {pageLinks.geo.label}
                </Link>
              </span>
            </nav>

            <div
              className="flex shrink-0 items-center transition-all duration-700 ease-out"
              style={{
                transitionDelay: mounted ? "650ms" : "0ms",
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(-10px)",
              }}
            >
              <PillButton
                href={pageLinks.scan.href}
                active={scanActive}
                onClick={(e) => handleNavClick(e, pageLinks.scan.href)}
              >
                {pageLinks.scan.label}
              </PillButton>
            </div>
          </div>

          {/* Hamburger (below xl) */}
          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
            className={`xl:hidden relative z-10 flex items-center justify-center w-10 h-10 shrink-0 transition-all duration-700 ease-out ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
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
          </button>
        </div>
      </div>

      {/* Mobile / Tablet Sidebar — below xl */}
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
          className={`absolute right-0 top-0 h-full w-[80%] max-w-[340px] bg-[#0a0a0a] px-8 py-10 flex flex-col gap-2 shadow-2xl overflow-y-auto transition-transform duration-500 ease-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            aria-label="Close menu"
            onClick={() => setIsOpen(false)}
            className="self-end mb-8 w-10 h-10 flex items-center justify-center text-white text-2xl transition-transform duration-300 hover:rotate-90"
          >
            ×
          </button>

          <nav className="flex flex-col gap-6">
            {sectionLinks.map((link, i) => {
              const active = isSectionActive(link.href);
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  aria-current={active ? "location" : undefined}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-[22px] transition-all duration-500 ease-out hover:pl-2 hover:text-[#0CC1FA] ${
                    active ? "text-[#0CC1FA] pl-2" : "text-white"
                  }`}
                  style={{
                    transitionDelay: isOpen ? `${150 + i * 60}ms` : "0ms",
                    opacity: isOpen ? 1 : 0,
                    transform: isOpen ? "translateX(0)" : "translateX(20px)",
                  }}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* Separate pages, visually split from the anchors */}
            <div
              className="mt-2 pt-8 border-t border-white/15 flex flex-col gap-6 transition-all duration-500 ease-out"
              style={{
                transitionDelay: isOpen ? "600ms" : "0ms",
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? "translateY(0)" : "translateY(12px)",
              }}
            >
              <Link
                href={pageLinks.geo.href}
                aria-current={geoActive ? "page" : undefined}
                onClick={(e) => handleNavClick(e, pageLinks.geo.href)}
                className={`text-[22px] underline underline-offset-[6px] decoration-1 transition-all duration-500 ease-out hover:pl-2 hover:text-[#0CC1FA] ${
                  geoActive ? "text-[#0CC1FA] pl-2" : "text-white"
                }`}
              >
                {pageLinks.geo.label}
              </Link>

              <PillButton
                full
                href={pageLinks.scan.href}
                active={scanActive}
                onClick={(e) => handleNavClick(e, pageLinks.scan.href)}
              >
                {pageLinks.scan.label}
              </PillButton>
            </div>
          </nav>
        </div>
      </div>
    </section>
  );
};

const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="10"
    height="10"
    viewBox="0 0 10 10"
    fill="none"
    className="transition-transform duration-500 ease-out group-hover:rotate-[45deg]"
  >
    <path
      d="M9.28027 0.750001C9.28027 0.335787 8.94449 4.2594e-07 8.53027 5.73454e-07L1.78027 1.51986e-07C1.36606 1.51986e-07 1.03027 0.335786 1.03027 0.75C1.03027 1.16421 1.36606 1.5 1.78027 1.5H7.78027V7.5C7.78027 7.91421 8.11606 8.25 8.53027 8.25C8.94449 8.25 9.28027 7.91421 9.28027 7.5L9.28027 0.750001ZM0.530273 8.75L1.0606 9.28033L9.0606 1.28033L8.53027 0.75L7.99994 0.21967L-5.66393e-05 8.21967L0.530273 8.75Z"
      fill="currentColor"
    />
  </svg>
);

/**
 * Gratis scan button (the only button in the header).
 * default: solid cyan, hover fills white
 * active (on /scan): navy #012549 with cyan ring + aria-current="page"
 */
const PillButton = ({
  href,
  active = false,
  full = false,
  onClick,
  children,
}: {
  href: string;
  active?: boolean;
  full?: boolean;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  children: React.ReactNode;
}) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      className={`group relative overflow-hidden flex justify-center items-center gap-3 font-semibold text-[16px] border-2 h-[50px] rounded-[319px] pl-6 pr-3 whitespace-nowrap transition-all duration-500 ease-out ${
        full ? "w-full" : ""
      } ${
        active
          ? "bg-[#012549] border-[#0CC1FA] text-white"
          : "bg-[#0CC1FA] border-[#0CC1FA] text-white hover:text-[#0CC1FA] shadow-[0_6px_20px_rgba(12,193,250,0.35)]"
      }`}
    >
      {!active && (
        <span className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
      )}
      <span className="relative z-10">{children}</span>
      <span
        className={`relative z-10 rounded-full w-[30px] h-[30px] flex justify-center items-center shrink-0 transition-colors duration-500 ease-out ${
          active
            ? "bg-white text-[#012549]"
            : "bg-white text-[#0CC1FA] group-hover:bg-[#0CC1FA] group-hover:text-white"
        }`}
      >
        <ArrowIcon />
      </span>
    </Link>
  );
};

export default Header;