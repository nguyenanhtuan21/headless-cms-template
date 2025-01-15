/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/styles/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'primary-home': '#2680eb',
      },
      boxShadow: {
        'header': '3px -10px 30px -5px #000',
      },
      fontFamily: {
        'inter': ['"Inter"', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
