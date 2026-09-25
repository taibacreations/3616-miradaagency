import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import SmoothScroll from "@/components/SmoothScroll";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AI-Workflows & Websites voor Lokale Ondernemers | Mirada Agency",
  description:
    "Dicht je online lead-lekken met slimme AI-workflows en technisch waterdichte websites. Voor ambitieuze lokale ondernemers die meetbaar willen groeien. Claim je gratis scan.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      data-scroll-behavior="smooth"
      lang="nl"
      className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} h-full antialiased`}
    >
      <head>
        <Script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="b362c421-fd32-498d-baba-e61c710a40fa"
          data-blockingmode="auto"
          strategy="beforeInteractive"
        />
      </head>

      <body className="min-h-full flex flex-col overflow-x-hidden">
        <SmoothScroll>
          <main>
            <Header />
            {children}
            <Footer />
          </main>
        </SmoothScroll>
      </body>
    </html>
  );
}