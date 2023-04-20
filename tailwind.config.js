/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        peach: '#E7816B',
        lightPeach: '#FFAD9B',
        veryLightPeach: '#FDF3F0',
        black: '#1D1C1E',
        gray: '#979797',
        darkGray: '#333136',
        lightGray: '#F1F3F5',
        placeholder: '#e6e3dc',
      },
    },
  },
  plugins: [],
}
