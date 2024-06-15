/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      background: "#121212",
      text: "#F3F4F8",
      accent: "#FF7F11",
      lightBackground: "#FDFFFC",
      darkBlue: "#011627",
      offWhite: "#FDFFFC",
      turquoise: "#2EC4B6",
      red: "#E71D36",
      // orange: "#FF9F1C",
      orange: "#f3a712",
      pink: "#fccfd4",
      black: "#0b1a25",
      teal: "#94f7df",
      yellow: "#f7d528",
      gray: "#FFF1D0",
      blue: "#5c78f8"
    },
    
    fontSize: {
      sm: '0.8rem',
      base: '0.95rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },

    // colors: {
    //   iron: {
    //     50: "#f7f7f7",
    //     100: "#ededed",
    //     200: "#dfdfdf",
    //     300: "#d3d3d3",
    //     400: "#adadad",
    //     500: "#D3D3D3",
    //     600: "#888888",
    //     700: "#7b7b7b",
    //     800: "#676767",
    //     900: "#545454",
    //     950: "#363636",
    //   },
    //   orange: {
    //     50: "#fffcea",
    //     100: "#fff5c5",
    //     200: "#ffeb85",
    //     300: "#ffda46",
    //     400: "#ffc71b",
    //     500: "#ffa500",
    //     600: "#e27c00",
    //     700: "#bb5502",
    //     800: "#984208",
    //     900: "#7c360b",
    //     950: "#481a00",
    //   },
    //   blue: {
    //     50: "#f3f9fc",
    //     100: "#e7f2f7",
    //     200: "#c9e4ee",
    //     300: "#add8e6",
    //     400: "#62b5ce",
    //     500: "#3e9cb9",
    //     600: "#2e7e9b",
    //     700: "#26667e",
    //     800: "#235669",
    //     900: "#224858",
    //     950: "#162f3b",
    //   },
    // },
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
