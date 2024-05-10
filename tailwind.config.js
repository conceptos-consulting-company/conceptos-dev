/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        left: 'rgba(0,0,0,0.5)',
        right: 'rgba(0,0,0,0.7)',
        clear: 'rgba(0,0,0,0)',
        orilla: 'yellow'
      },
    },
  },
  plugins: [],
}

