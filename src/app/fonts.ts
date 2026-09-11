import localFont from "next/font/local";

export const monumentExtended = localFont({
  src: "../../public/fonts/MonumentExtended-Ultrabold.ttf",
  weight: "800",
  style: "normal",
  variable: "--font-monument",
  display: "swap",
});

export const gotham = localFont({
  src: [
    { path: "../../public/fonts/Gotham-Book.ttf", weight: "350", style: "normal" },
    { path: "../../public/fonts/Gotham-Regular.ttf", weight: "400", style: "normal" },
    { path: "../../public/fonts/Gotham-Medium.ttf", weight: "500", style: "normal" },
    { path: "../../public/fonts/Gotham-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-gotham",
  display: "swap",
});