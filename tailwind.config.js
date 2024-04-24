/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: '#ffffff',
        sealBrown: '#572DOC',
        harvestGold: '#C78E3A',
        cream: '#FDFCD4',
        earthYellow: '#E3B76A',
        licorice: '#281E18',
      },
    },
  },
  plugins: [],
}
