import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#FFFFFF",
        bone: "#F6F3EF",
        ink: "#231712",
        graphite: "#5C4F47",
        muted: "#8A7A6F",
        line: "#E4DCD2",
        rule: "#2317121a",
        rose: "#C96A5A",
        rosed: "#B4574A",
        clay: "#6B4C4C",
        d0: "#160F0B",
        d1: "#1F1712",
        fg: "#F0E8E4",
      },
      fontFamily: {
        sans: ["var(--font-display)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: { wrap: "1200px" },
      transitionTimingFunction: { out: "cubic-bezier(.16,1,.3,1)" },
    },
  },
  plugins: [],
};

export default config;
