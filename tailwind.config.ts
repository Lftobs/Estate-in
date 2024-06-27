import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "background-black": "rgba(38, 38, 38, 1)",
        "purple": "rgba(112, 59, 247, 1)"
      },
      backgroundColor: {
        "background-black": "rgba(38, 38, 38, 1)",
        "purple": "rgba(112, 59, 247, 1)",
        "grey": "rgba(153, 153, 153, 1)",
        "black-btn": "rgba(20, 20, 20, 1)",
        "black": "rgba(38, 38, 38, 1)",
        "hero-img-bg": "rgba(26, 26, 26, 1)"
      },
      colors : {
        "border-black": "rgba(38, 38, 38, .9)"
      }
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1636px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
};
export default config;
