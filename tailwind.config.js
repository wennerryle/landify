/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        screen: "100vw",
      },
      colors: {
        accent: "#7C3AED",
        accentMuted: "#C4B5FD",
      },
      spacing: {
        content: "min(84.375%, 1216px)",
      },
    },
  },
  plugins: [],
};
