import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#012549", // extracted from screenshot bg
          900: "#0A2F5C",
        },
        accent: "#0CC1FA", // extracted from Contact / Claim button
      },
      fontFamily: {
        monument: ["var(--font-monument)", "sans-serif"],
        gotham: ["var(--font-gotham)", "sans-serif"],
      },
      maxWidth: {
        content: "1500px",
      },
    },
  },
  plugins: [],
};

export default config;