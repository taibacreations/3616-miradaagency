import localFont from "next/font/local";

export const monumentExtended = localFont({
  src: [
    { path: "../../public/fonts/MonumentExtended-Regular.otf", weight: "400", style: "normal" },
    { path: "../../public/fonts/MonumentExtended-Ultrabold.otf", weight: "800", style: "normal" },
  ],
  variable: "--font-monument",
  display: "swap",
});

export const gotham = localFont({
  src: [
    { path: "../../public/fonts/GothamBook.ttf", weight: "300", style: "normal" },
    { path: "../../public/fonts/GothamRegular.ttf", weight: "400", style: "normal" },
    { path: "../../public/fonts/GothamMedium.ttf", weight: "500", style: "normal" },
    { path: "../../public/fonts/GothamBold.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-gotham",
  display: "swap",
});