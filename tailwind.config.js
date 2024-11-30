/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          md: '2.5rem',
          lg: '3rem',
          xl: '3.5rem',
          '2xl': '5rem',
        }
      },
    }
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [{
      "light": {
        ...require("daisyui/src/theming/themes")['light'],
        "primary": "#027fac",
        "primary-content": "#ffffff",
      }
    }, "dark"],
  },
}

