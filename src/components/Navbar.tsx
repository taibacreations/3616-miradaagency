"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "./ui/Button";

const navLinks = [
  { label: "Diensten", href: "#diensten" },
  { label: "Werkwijze", href: "#werkwijze" },
  { label: "Gratis Scan", href: "#gratis-scan" },
  { label: "Over Mij", href: "#over-mij" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute -top-4.5 left-0 z-50 w-full">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-8">
        <div className="grid grid-cols-2 items-center py-6 lg:grid-cols-[1fr_auto_1fr] lg:py-9">
          {/* Left nav links - desktop only */}
          <nav className="hidden items-center gap-5 xl:gap-10 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-gotham xl:text-[18px] tracking-wide text-white/90 transition-colors hover:text-accent"
              >
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
                className="font-gotham text-base text-white/90"
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