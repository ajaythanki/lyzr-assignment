import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        parch: "#F9F5F1",
        cream: "#F2EDE8",
        linen: "#EBE5DC",
        warm: "#E6DFD5",
        ink: "#2A1F1A",
        muted: "#7A6A60",
        subtle: "#A8998E",
        rose: "#C96A5A",
        rosem: "#D4847A",
        mahogany: "#6B4C4C",
        mauve: "#8A6060",
        line: "#D4CBC0",
        line2: "#E6E0D6",
        d0: "#160F0B",
        d1: "#1E1610",
        fg: "#F0E8E4",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      maxWidth: {
        wrap: "1240px",
      },
      boxShadow: {
        soft: "0 2px 14px rgba(40,20,10,.06)",
        lift: "0 10px 36px rgba(40,20,10,.09)",
        panel: "0 30px 70px rgba(40,20,10,.13)",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(.16,1,.3,1)",
      },
    },
  },
  plugins: [],
};

export default config;
