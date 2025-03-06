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
        'blue-50': '#f0f9ff', // Very light blue
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
      addCommonColors: false,
      prefix: 'nextui',
      defaultTheme: 'light',
      defaultExtendTheme: 'light',
      themes: {
        light: {
          colors: {
            primary: '#F5F5F5', // Light Gray
            secondary: '#D3D3D3', // Soft Gray
            foreground: '#1E1E1E', // Dark Gray for text
            background: '#FFFFFF', // Pure White
            border: '#BDBDBD', // Border Gray
            accent: '#888888', // Medium Gray (for highlights)
            muted: '#AAAAAA', // Lighter muted color
            card: '#EFEFEF', // Card background
            success: '#1E1E1E', // Dark Gray
            'success-foreground': '#E0E0E0', // Off-White
          },
        },
        dark: {
          colors: {
            primary: '#1E1E1E', // Dark Gray
            secondary: '#BDBDBD', // Light Gray
            foreground: '#E0E0E0', // Off-White
            background: '#121212', // True Black
            border: '#3C3C3C', // Soft Gray
            accent: '#888888', // Medium Gray (for buttons, highlights)
            muted: '#777777', // Slightly darker gray
            card: '#1A1A1A', // Darker background for cards
            success: '#F5F5F5', // Light Gray
            'success-foreground': '#1E1E1E', // Dark Gray for text
          },
        },
      },
    }),
  ],
};
