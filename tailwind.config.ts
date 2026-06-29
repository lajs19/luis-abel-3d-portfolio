import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#07111f",
        panel: "#0c1729",
        line: "#20324f",
        accent: "#66d9ef",
        accentSoft: "#9be7f5",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(102, 217, 239, 0.18), 0 24px 80px rgba(4, 10, 20, 0.45)",
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(circle at top, rgba(102, 217, 239, 0.18), transparent 45%), radial-gradient(circle at bottom right, rgba(47, 83, 147, 0.24), transparent 40%)",
      },
      fontFamily: {
        sans: ["Aptos", "Segoe UI", "system-ui", "sans-serif"],
        display: ["Aptos", "Segoe UI", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
