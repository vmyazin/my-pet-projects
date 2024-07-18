// tailwind.config.js
/** @type {import('tailwindcss').Config} */

import { colors, nextui } from "@nextui-org/react";

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: "#f7fee7",
              50: '#f7fee7',
              100: '#ecfccb',
              200: '#d9f99d',
              300: '#bef264',
              400: '#a3e635',
              500: '#84cc16',
              600: '#65a30d',
              700: '#4d7c0f',
              800: '#3f6212',
              900: '#365314',
              950: '#1a2e05',
            },
            // ... other color configurations
          },
        },
        // You can also define a dark theme if needed
      },
    }),
  ],
};
