module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      navy: '#1A3C7A',
      gray: '#D9D9CE',
      blue: '#B7C9FF',
      yellow: '#D1A517'
    },
    fontFamily: {
      sans: ['Avenir', 'Helvetica', 'Arial', 'sans-serif']
},
    fontSmoothing: {
      webkitFontSmoothing: ['antialiased']
    }
  },
  plugins: [],
}
