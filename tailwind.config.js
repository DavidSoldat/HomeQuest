/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          black: '#121113',
          white: '#F7F7F2',
          navy: '#1D3557',
          gray: '#F1FAEE',
          coral: '#E63946',
          darkGray: '#333333',
          lightGray: '#FAFAFA',
          blue: '#275DA2',
        },
      },
    },
  },
  plugins: [],
};
