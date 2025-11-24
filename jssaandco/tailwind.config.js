/** @type {import('tailwindcss').Config} */
export default {
  // Include your html and source files so Tailwind can tree-shake and generate utilities
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx,html}'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

