import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
        display: ["Sora", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        // Refined ink scale — replaces default slate everywhere in the app
        slate: {
          50: "#F7F8FC",
          100: "#EFF1F8",
          200: "#E2E6F1",
          300: "#C9D0E3",
          400: "#9AA4C0",
          500: "#6E7994",
          600: "#4E5873",
          700: "#3A4360",
          800: "#242C46",
          900: "#141B32",
          950: "#0A0F22",
        },
        // Refined cobalt brand scale — replaces default blue everywhere
        blue: {
          50: "#EEF1FF",
          100: "#E0E6FF",
          200: "#C7D1FF",
          300: "#A4B3FF",
          400: "#7E8EFB",
          500: "#5D68F4",
          600: "#4A4DE7",
          700: "#3E3CC9",
          800: "#3433A3",
          900: "#2E3081",
          950: "#1C1C4E",
        },
        // Violet companion — replaces default indigo (Paddle button)
        indigo: {
          50: "#F3F0FF",
          100: "#E9E3FF",
          200: "#D6CBFF",
          300: "#BBA6FF",
          400: "#9C79F9",
          500: "#8352EF",
          600: "#7436DE",
          700: "#6227BD",
          800: "#52229A",
          900: "#441F7C",
          950: "#2A1053",
        },
      },
      borderRadius: {
        xl: "0.9rem",
        "2xl": "1.25rem",
        "3xl": "1.6rem",
      },
      boxShadow: {
        soft: "0 12px 30px rgba(10, 15, 34, 0.08)",
        card: "0 1px 2px rgba(10, 15, 34, 0.05), 0 8px 24px -8px rgba(10, 15, 34, 0.12)",
        "card-hover": "0 2px 4px rgba(10, 15, 34, 0.05), 0 20px 44px -12px rgba(74, 77, 231, 0.28)",
        glow: "0 0 0 1px rgba(125, 141, 251, 0.25), 0 16px 48px -12px rgba(74, 77, 231, 0.45)",
        "inner-ring": "inset 0 1px 0 rgba(255, 255, 255, 0.08)",
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #5D68F4 0%, #4A4DE7 55%, #7436DE 100%)",
        "ink-radial": "radial-gradient(1200px 600px at 80% -10%, rgba(93,104,244,0.28), transparent 60%), radial-gradient(900px 500px at 5% 110%, rgba(116,54,222,0.22), transparent 55%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
        "float-slow": "float-slow 7s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
