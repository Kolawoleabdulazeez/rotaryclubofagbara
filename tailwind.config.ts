import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rotary: {
          azure: "#0067C8",
          royal: "#17458F",
          royalDark: "#0B2A5B",
          gold: "#F7A81B",
          goldSoft: "#FFC85C",
          cardinal: "#A6192E",
        },
      },
      keyframes: {
        breathe: {
          "0%, 100%": { transform: "scale(1) translate(0, 0)", opacity: "0.55" },
          "50%": { transform: "scale(1.12) translate(2%, -2%)", opacity: "0.85" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        floatY: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseDot: {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.4)", opacity: "0.6" },
        },
      },
      animation: {
        breathe: "breathe 14s ease-in-out infinite",
        marquee: "marquee 22s linear infinite",
        floatY: "floatY 5s ease-in-out infinite",
        pulseDot: "pulseDot 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;