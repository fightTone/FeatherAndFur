/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a1a1a',
          accent: '#10b981'
        },
        background: {
          dark: '#121212',
          card: '#1e1e1e'
        }
      }
    },
  },
  plugins: [],
}