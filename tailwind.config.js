module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light:'#7344ff',
          DEFAULT:"#5B25F5",
          dark:"#3200e8",
        },
        secondary:{
          light:'#43AFFF',
          DEFAULT:'#0C99EF',
        },
        light:'#F6FBFF',
        dark: {
          DEFAULT: "#17191C",
          200: "#24262B",
          300: "#3D3F44",
        }
      }
    },
  },
  plugins: [],
}