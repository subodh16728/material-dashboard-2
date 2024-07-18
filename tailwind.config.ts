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
        "bookings": "linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25));",
        "users": "linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232));",
        "revenues": "linear-gradient(195deg, rgb(102, 187, 106), rgb(67, 160, 71));",
        "followers": "linear-gradient(195deg, rgb(236, 64, 122), rgb(216, 27, 96));"
      },
      width: {
        '46': '11.5rem'
      },
      height: {
        '34': '8.5rem',
        '0.25': '0.0625rem'
      },
      boxShadow: {
        "bookings": "rgba(0, 0, 0, 0.14) 0rem 0.25rem 1.25rem 0rem, rgba(64, 64, 64, 0.4) 0rem 0.4375rem 0.625rem -0.3125rem;",
        "users": "rgba(0, 0, 0, 0.14) 0rem 0.25rem 1.25rem 0rem, rgba(0, 187, 212, 0.4) 0rem 0.4375rem 0.625rem -0.3125rem;",
        "revenues": "rgba(0, 0, 0, 0.14) 0rem 0.25rem 1.25rem 0rem, rgba(76, 175, 79, 0.4) 0rem 0.4375rem 0.625rem -0.3125rem;",
        "followers": "rgba(0, 0, 0, 0.14) 0rem 0.25rem 1.25rem 0rem, rgba(233, 30, 98, 0.4) 0rem 0.4375rem 0.625rem -0.3125rem;",
      }
    },
  },
  plugins: [],
};
export default config;
