import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        cream: "#f5efe7",
        pine: "#495e57",
        mint: "#00bfa6",
        ink: "#141817",
        muted: "#4c5451",
        soft: "#e9ded1"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      borderRadius: {
        figma: "93px"
      },
      boxShadow: {
        nav: "0 10px 28px rgba(20, 24, 23, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
