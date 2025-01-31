import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3B82F6",
        background: '#FFFFFF',
        secondary: '#F7F7F7',
        foreground: "#030303",
        secondary_foreground: "#7B7B7B",
        border_color: '#D8D8D8'
      },
    },
  },
  plugins: [],
} satisfies Config;
