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
        "grey": "rgba(153, 153, 153, 1)"
      }
    },
  },
  plugins: [],
};
export default config;
