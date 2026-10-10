/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#0E0F13",      // Updated: Hero & Footer dark background
          orange: "#CE8E14",    // Updated: Primary accent buttons, highlight text, stat numbers
          orangeHover: "#B87D10", // Updated: Matching hover state for accent buttons
          cardBg: "#FFFFFF",
          bgLight: "#F8FAFC",   // Light section backgrounds
          iconBg: "#EFF6FF",    // Circular blue tint icon containers
          textDark: "#0F172A",
          textMuted: "#64748B",
        },
      },
      fontFamily: {
        sans: ["Inter", "Plus Jakarta Sans", "sans-serif"],
      },
      borderRadius: {
        card: "16px",
        btn: "8px",
      },
      boxShadow: {
        card: "0 10px 30px -5px rgba(0, 0, 0, 0.05)",
        cardHover: "0 20px 40px -10px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
