import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          DEFAULT: "#0F172A",
          50: "#1e293b",
          900: "#0b1120",
          950: "#070c18"
        },
        cyanBrand: {
          DEFAULT: "#06B6D4",
          light: "#22d3ee",
          dark: "#0891b2"
        },
        purpleBrand: {
          DEFAULT: "#7C3AED",
          light: "#a855f7",
          dark: "#6d28d9"
        },
        snow: "#F8FAFC",
      },
    },
  },
  plugins: [],
} satisfies Config;
