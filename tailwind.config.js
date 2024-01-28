/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'transparent': 'transparent',
      'blue': '#1fb6ff',
      'pOrange': '#d6511c',
      'pDOrange': '#D1491E',
      'pLOrange': '#d8861c',
      'white': '#ffffff',
      'liteBlack': '#111',
      'black': '#000000',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      poppins: ['Poppins', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'banner': "url('../image/banner.png')"
      },
      spacing: {
        // '128': '32rem'
      },
      borderRadius: {
        // '4xl': '2rem',
      },
      transitionDuration: {
        '4': '0.4s',
      },
      keyframes: {
        banner: {
          '0%': { transform: 'translate(0x, 0)', opacity: '0.8' },
          '25%': { transform: 'translate(0x, 40px)', opacity: '1' },
          '50%': { transform: 'translate(40px, 40px)', opacity: '0.8' },
          '75%': { transform: 'translate(40px, 0)', opacity: '1' },
          '100%': { transform: 'translate(0, 0)', opacity: '0.8' },
        }
      },
      animation: {
        banner: 'banner 10s linear infinite',
      }
    },
  },
  plugins: [],
}

