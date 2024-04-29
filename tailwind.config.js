/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: ["Poppins", "sans-serif"],
        // serif: ["IBM Plex Mono", "serif"],
        serif: ["Playfair Display", "serif"],
      },
      colors:{
        green:{
          100: "#E0F7E9",
          200: "#C1F0D3",
          300: "#A1E9BD",
          400: "#61D18F",
          500: "#92E3A9",
          600: "#1DAA56",
          700: "#13703A",
          800: "#0D522C",
          900: "#09341D",
        },
      },
      backgroundImage: {
        "grid": "url('/assets/image/grid.svg')",
        "grid2": "url('/assets/image/grid2.svg')",
        "grid3": "url('/assets/image/grid3.svg')",
        "grid4": "url('/assets/image/grid4.svg')",
        "hero": "url('/assets/image/mi-kell.svg')",
        "hero-m": "url('/assets/image/mi-kell-m.svg')",
        "brush": "url('/assets/image/brush.svg')",
        "galaxy": "url('/public/image/galaxy.jpg')",
      },

    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}