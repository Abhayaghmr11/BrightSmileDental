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
      fontSize: {
        banner_text: "44px", //?44px
        heading: "40px",  //?40px
        sub_heading: '16px', //? 16px
        paragraph: '14px', //? 14px
        nav: '15px', //? 15px
        label: '12px' //? 12 px

      },
    },
  },
  plugins: [],
} satisfies Config;
