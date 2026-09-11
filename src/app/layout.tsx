import type { Metadata } from "next";
import { monumentExtended, gotham } from "./fonts";
import "./globals.css";

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
    <html lang="nl">
      <body className={`${monumentExtended.variable} ${gotham.variable} font-gotham antialiased`}>
        {children}
      </body>
    </html>
  );
}