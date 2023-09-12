/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,cjs,jsx}"],
  theme: {
    extend: {
      gradientColorStops: theme => ({
        'blue-gradient-start': theme('colors.blue.300'),
        'blue-gradient-end': theme('colors.blue.400'),
      }),
    },
  },
  plugins: [],
}

