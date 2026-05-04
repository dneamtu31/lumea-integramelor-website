/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          blue: "#93B2D1",
          yellow: "#F6D365",
          red: "#AD3945",
          ink: "#0B0F19",
          paper: "#F8FAFC",
        },
      },
      boxShadow: {
        soft: "0 10px 30px rgba(11, 15, 25, 0.12)",
      },
    },
  },
  plugins: [],
};

