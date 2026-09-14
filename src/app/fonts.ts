import localFont from "next/font/local";

export const monumentExtended = localFont({
  src: [
    { path: "../../public/fonts/MonumentExtended-Regular.otf", weight: "400", style: "normal" },
    { path: "../../public/fonts/MonumentExtended-Ultrabold.otf", weight: "800", style: "ultrabold" },
  ],
  variable: "--font-monument",
  display: "swap",
});

export const gotham = localFont({
  src: [
    { path: "../../public/fonts/GothamBook.ttf", weight: "300", style: "light" },
    { path: "../../public/fonts/GothamRegular.ttf", weight: "400", style: "normal" },
    { path: "../../public/fonts/GothamMedium.ttf", weight: "500", style: "medium" },
    { path: "../../public/fonts/GothamBold.otf", weight: "700", style: "bold" },
    { path: "../../public/fonts/GothamBlack.otf", weight: "800", style: "extrabold" },
  ],
  variable: "--font-gotham",
  display: "swap",
});