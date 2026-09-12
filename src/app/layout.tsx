import type { Metadata } from "next";
import { monumentExtended, gotham } from "./fonts";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Mirada Agency",
  description: "AI & Marketing voor lokale ondernemers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" className={cn("font-sans", geist.variable)}>
      <body className={`${monumentExtended.variable} ${gotham.variable} font-gotham antialiased`}>
        {children}
      </body>
    </html>
  );
}