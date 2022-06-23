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
        light:'#F6FBFF',
      }
    },
  },
  plugins: [],
}