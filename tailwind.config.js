/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ["Playfair Display SC", 'serif'],
        'poppins': ["Poppins", 'sans-serif'],
        'lora' : ["Lora", 'serif'],
      }
    },
  },
  plugins: [],
}

