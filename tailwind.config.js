/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        emeraldTech: "#10B981",
        deepBlue: "#1E293B",
        electricCyan: "#0EA5E9",
        mistGray: "#F8FAFC",
        charcoalGray: "#475569",
      },
    },
  },
  plugins: [],
};

export default config;
