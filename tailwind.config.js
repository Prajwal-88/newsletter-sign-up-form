/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        rorbo:"'Roboto'",
      },
      colors:{
        Tomato: 'hsl(4, 100%, 67%)',
        // Neutral
        Dark_Slate_Grey: 'hsl(234, 29%, 20%)',
        Charcoal_Grey: 'hsl(235, 18%, 26%)',
        Grey:'hsl(231, 7%, 60%)',
        White:'hsl(0, 0%, 100%)',
      },
    },
  },
  plugins: [],
}

