/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Enable class-based dark mode
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {theme: {
    extend: {
      colors: {
        yellow: {
          500: '#FFC55A',
        },
        orange: {
          500: '#FC4100',
        },
      },
    },
  },
    extend: {},
  },
  plugins: [],
};
