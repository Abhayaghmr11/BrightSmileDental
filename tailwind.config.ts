import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      screens: {
        "ipad-pro": "1025px",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
      colors: {
        primary: "#3B82F6",
        background: "#FFFFFF",
        secondary: "#F7F7F7",
        foreground: "#030303",
        secondary_foreground: "#7B7B7B",
        border_color: "#D8D8D8",
      },
      fontSize: {
        banner_text: "44px",
        heading: "36px",
        sub_heading: "22px",
        paragraph: "16px",
        nav: "15px",
        label: "14px",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
