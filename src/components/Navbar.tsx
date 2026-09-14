"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Button from "./ui/Button";

const navLinks = [
  { label: "Diensten", href: "/#diensten", id: "diensten" },
  { label: "Werkwijze", href: "/#werkwijze", id: "werkwijze" },
  { label: "Gratis Scan", href: "/scan", id: "scan" },
  { label: "Over Mij", href: "/#over-mij", id: "over-mij" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const intersectingRef = useRef<Record<string, boolean>>({});

  // load animation trigger
  useEffect(() => {
    const raf = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  // scrolled state -> toggles blurred bg
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // active section tracking (scroll-spy + route check)
  useEffect(() => {
    if (pathname === "/scan") {
      setActive("scan");
      return;
    }

    const trackedIds = ["hero", ...navLinks.filter((l) => l.id !== "scan").map((l) => l.id)];
    const sections = trackedIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (sections.length === 0) return;

    intersectingRef.current = {};

    const recompute = () => {
      if (intersectingRef.current["hero"]) {
        setActive("");
        return;
      }
      const match = navLinks.find(
        (l) => l.id !== "scan" && intersectingRef.current[l.id]
      );
      setActive(match ? match.id : "");
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          intersectingRef.current[entry.target.id] = entry.isIntersecting;
        });
        recompute();
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  const linkClass = (id: string) => {
    const isActive = active === id;
    return `font-gotham text-[13px] md:text-[15px] lg:text-[16px] xl:text-[18px] tracking-wide transition-colors duration-300 ${
      isActive
        ? "rounded-full bg-[#012549] px-4 py-1.5 text-white"
        : "relative text-white/90 hover:text-accent after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-accent after:transition-all after:duration-300 after:content-[''] hover:after:w-full"
    }`;
  };

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-[transform,opacity] duration-[4500ms] ease-out ${
        mounted ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
      }`}
    >
      {/* Scroll-triggered blurred background layer - apni alag, independent transition rakhti hai */}
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-0 -z-10 bg-navy-900/70 backdrop-blur-md shadow-md transition-opacity duration-500 ease-out ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
      />

      <div className="mx-auto max-w-[1500px] px-6 lg:px-8">
        <div className="grid grid-cols-2 items-center py-4 lg:grid-cols-[1fr_auto_1fr] lg:py-6">
          {/* Left nav links - desktop only */}
          <nav className="hidden items-center gap-5 xl:gap-10 lg:flex">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={linkClass(link.id)}>
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Logo - centered on desktop */}
          <Link
            href="/"
            className="col-start-1 justify-self-start lg:col-start-2 lg:justify-self-center lg:translate-x-19"
          >
            <Image
              src="/logo.webp"
              alt="Mirada Agency"
              width={168}
              height={109}
              priority
              className="h-auto w-[100px] sm:w-[120px] lg:w-[150px] xl:w-[169px]"
            />
          </Link>

          {/* Contact button - desktop only */}
          <div className="col-start-2 hidden justify-self-end lg:col-start-3 lg:flex">
            <Button href="#contact" variant="primary" icon>
              Contact
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu openen"
            aria-expanded={open}
            className="col-start-2 justify-self-end text-white lg:hidden"
          >
            {open ? (
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu panel */}
        {open && (
          <div className="flex flex-col bg-navy-900 p-4 rounded-2xl gap-5 lg:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={
                  active === link.id
                    ? "w-fit rounded-full bg-[#012549] px-4 py-1.5 text-[13px] md:text-[15px] text-white font-gotham"
                    : "font-gotham text-base text-white/90"
                }
              >
                {link.label}
              </Link>
            ))}
            <Button href="#contact" variant="primary" icon>
              Contact
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}