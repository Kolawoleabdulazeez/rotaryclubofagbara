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
  },
},
  plugins: [],
};
export default config;
