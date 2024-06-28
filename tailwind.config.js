/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      // background: "#121212",
      background: "#000000",
      lightBackground: "#fbfefe",
      text: "#F3F4F8",
      accent: "#FF7F11",
      offWhite: "#FDFFFC",
      turquoise: "#2EC4B6",
      red: "#ff414e",
      green: "#32c256",
      orange: "#eda334",
      pink: "#fccfd4",
      black: "#011627",
      sand: "#edd7a4",
      yellow: "#dbb22a",
      gray: "#E2E8F0",
      gray400: "#6b7280",
      gray600: "#4b5563",
      blue: "#51d0de",
      neutral100: "#f5f5f5",
      neutral200: "#e5e5e5",
      neutral300: "#c1c5c9",
      neutral400: "#a3a3a3",
      neutral500: "#737373",
      neutral600: "#525252",
      neutral800: "#262626",
      neutral900: "#171717",
      neutral950: "#0a0a0a",
      babyPowder: "#f6f7f5",
      saffron: "#f4bf43"
    },

    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "0.95rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },

    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
