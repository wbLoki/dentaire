const { nextui } = require('@nextui-org/react');

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: '#DBEFFA',
        darkBlue: '#11517E',
        purple: '#583FBC',
        mauve: '#DBDEFA',
        rose: '#F6DBFA',
        peach: '#FADBE2',
        orange: '#FF8C4B',
        'blue-100': '#ebf8ff', // Light blue
        'blue-50': '#f0f9ff',  // Very light blue
      },
      backgroundImage: {
        'hero-image': "url('../media/cabinet/happy.jpg')",
      },
    },
  },
  darkMode: 'class',
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require('flowbite/plugin'),
    nextui({
      addCommonColors: true,
      prefix: 'nextui',
      defaultTheme: 'light',
      defaultExtendTheme: 'light',
      themes: {
        light: {
          colors: {
            primary: '#11517E',
            secondary: '#BAB9B9',
          },
        },
      },
    }),
  ],
};
