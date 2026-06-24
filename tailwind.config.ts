import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // Anchored on the Nueva Modo profile palette
          blue: "#0E7C8B", // logo teal - primary brand colour
          teal: "#0E7C8B",
          "teal-deep": "#0A4C57",
          "deep-blue": "#0A4C57", // legacy alias → deep teal (dark gradients)
          sky: "#27AAE1", // bright cyan accent
          green: "#54B948", // profile green
          orange: "#F47B20", // profile orange - primary action accent
          "orange-deep": "#DD6A12",
          gold: "#D9A521", // profile gold/mustard
          charcoal: "#33363D",
          "charcoal-deep": "#22242A",
        },
        text: {
          dark: "#1E2126",
          muted: "#5A6472",
        },
        surface: {
          light: "#F8FAFC",
          soft: "#F1F5F9",
          border: "#E2E8F0",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "Segoe UI", "Arial", "sans-serif"],
      },
      fontSize: {
        "display-2xl": ["clamp(2.75rem, 6vw, 5rem)", { lineHeight: "1.02", letterSpacing: "-0.035em", fontWeight: "800" }],
        "display-xl": ["clamp(2.5rem, 5vw, 4rem)", { lineHeight: "1.08", letterSpacing: "-0.03em", fontWeight: "800" }],
        "display-lg": ["clamp(2rem, 4vw, 3rem)", { lineHeight: "1.12", letterSpacing: "-0.025em", fontWeight: "700" }],
        "display-md": ["clamp(1.5rem, 3vw, 2.25rem)", { lineHeight: "1.18", letterSpacing: "-0.02em", fontWeight: "700" }],
        "display-sm": ["clamp(1.25rem, 2vw, 1.75rem)", { lineHeight: "1.25", letterSpacing: "-0.015em", fontWeight: "600" }],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      boxShadow: {
        card: "0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.06)",
        "card-hover": "0 8px 32px rgba(14,124,139,0.14), 0 2px 8px rgba(0,0,0,0.06)",
        teal: "0 8px 24px rgba(14,124,139,0.28)",
        orange: "0 10px 28px rgba(244,123,32,0.32)",
        blue: "0 8px 24px rgba(14,124,139,0.28)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "slide-up": "slideUp 0.5s ease-out forwards",
        "float-slow": "floatSlow 6s ease-in-out infinite",
        "pulse-ring": "pulseRing 2.4s ease-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseRing: {
          "0%": { transform: "scale(0.9)", opacity: "0.7" },
          "70%": { transform: "scale(1.6)", opacity: "0" },
          "100%": { transform: "scale(1.6)", opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
