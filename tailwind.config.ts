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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        custom: "4px 4px 10px rgba(0, 0, 0, 0.1)",
        hover: "4px 4px 10px rgba(0, 0, 0, 0.6)",
      },
    },
  },
  plugins: [],
} satisfies Config;
