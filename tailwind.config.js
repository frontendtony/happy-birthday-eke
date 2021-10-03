module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        card: '0px 100px 105px rgba(0, 0, 0, 0.3), 0px 50.625px 45.7734px rgba(0, 0, 0, 0.2025), 0px 20px 17.0625px rgba(0, 0, 0, 0.15), 0px 4.375px 6.07031px rgba(0, 0, 0, 0.0975)',
      },
      fontSize: {
        small: '0.7302rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
