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
        graySixtyp: "#09080F99",
        grayEightyp: "#09080FCC",
        greenTenp: "#309C081A",
        green: "#309C08",
        whiteThirtyp: "#FFFFFF4D",
        grayFivep: "#09080F0D",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

