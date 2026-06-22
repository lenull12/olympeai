import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        "background-alt": "#0a0a0a",
        card: "#111111",
        foreground: "#ffffff",
        "foreground-alt": "#888888",
        "border-subtle": "#1a1a1a",
        "border-strong": "#222222",
        accent: "#e0e0e0",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.02em",
        widest2: "0.4em",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        "grid-drift": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(60px)" },
        },
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        blink: "blink 1s step-end infinite",
        "grid-drift": "grid-drift 8s linear infinite",
      },
      backgroundImage: {
        "gradient-text": "linear-gradient(180deg, #ffffff 0%, #999999 100%)",
        "gradient-radial-glow":
          "radial-gradient(circle at 50% 0%, rgba(255,255,255,0.08) 0%, rgba(0,0,0,0) 60%)",
      },
    },
  },
  plugins: [],
};
export default config;
