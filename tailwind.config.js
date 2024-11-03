/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purpleBg: "#9538E2",
        graySixtyp: "#09080F99"
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

