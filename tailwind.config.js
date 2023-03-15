/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "color-primary": "white",
        "color-secondary": "#4D4D4D",
      },
      width: {
        "25%": "25%",
        "50%": "50%",
        "75%": "75%",
        "100%": "100%",
        //vw
        "20vw": "20vw",
        "50vw": "50vw",
        "40vw": "40vw",
        "50vw": "50vw",
        "60vw": "60vw",
        "70vw": "70vw",
        "80vw": "80vw",
        "90vw": "90vw",
        "100vw": "100vw",
      },
      fontSize: {
        "20px": "20px",
        "18px": "18px",
        "16px": "16px",
        "10px": "10px",
      },
      borderWidth: {
        1: "1px",
      },
      translate: {
        "50N": "-50%",
      },
    },
  },
  plugins: [],
};
