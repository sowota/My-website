module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    
    extend: {
      colors:{
        primary:'#002C37',
        accent:'#00A6E0',
        cream:'#303030',
        dGray:'#363636',
        gold:'#FFD700',
        bLight:'rgba(150, 175, 184,.2)', 
        bWork:'rgba(150, 175, 184,.8)', 
        lGray:'#bfbfbf'

      },
      backgroundImage:{
        'work':"url('../public/work.png')",
        'hero':"url('../public/wave.jpg')"
      },
      fontFamily: {
        'mon': ['Montserrat', 'sans-serif'],
        'cor':['Cardo', 'serif'] 
      },
    },
  },
  plugins: [],
}
