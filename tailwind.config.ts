import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        ink: "#140009",
        wine: {
          DEFAULT: "#4d0020",
          deep: "#1e000d",
          mid: "#2e0014",
        },
        parchment: {
          DEFAULT: "#ecebd8",
          80: "#edecd9cc",
        },
        magenta: {
          DEFAULT: "#ff0073",
          deep: "#eb006a",
        },
      },
      fontFamily: {
        serif: ["var(--font-ancizar)", "Georgia", "Times New Roman", "serif"],
      },
      fontSize: {
        "display-xl": [
          "clamp(3.5rem, 8vw, 7rem)",
          { lineHeight: "0.95", letterSpacing: "-0.03em", fontWeight: "300" },
        ],
        "display-l": [
          "clamp(2.5rem, 5vw, 4.5rem)",
          { lineHeight: "1", letterSpacing: "-0.02em", fontWeight: "300" },
        ],
        "display-m": [
          "clamp(2rem, 3.5vw, 3rem)",
          { lineHeight: "1.1", letterSpacing: "-0.015em", fontWeight: "400" },
        ],
        heading: [
          "clamp(1.5rem, 2.5vw, 2rem)",
          { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "400" },
        ],
        subhead: [
          "1.25rem",
          { lineHeight: "1.4", letterSpacing: "0", fontWeight: "400" },
        ],
        "body-l": ["1.125rem", { lineHeight: "1.65", fontWeight: "300" }],
        body: ["1rem", { lineHeight: "1.65", fontWeight: "300" }],
        caption: [
          "0.875rem",
          { lineHeight: "1.5", letterSpacing: "0.08em", fontWeight: "400" },
        ],
        eyebrow: [
          "0.75rem",
          { lineHeight: "1.4", letterSpacing: "0.15em", fontWeight: "600" },
        ],
      },
      maxWidth: {
        container: "1280px",
      },
      borderColor: {
        DEFAULT: "rgb(236 235 216 / 0.1)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
