module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // o 'media' o 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Rajdhani', 'sans-serif'],
      },
      animation: {
        // Define tus animaciones personalizadas aquí
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
