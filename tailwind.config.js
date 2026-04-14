/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Outfit", "Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      colors: {
        accent: {
          violet: "#7c3aed",
          cyan: "#06b6d4",
          pink: "#ec4899",
          emerald: "#10b981",
        },
        navy: {
          50: "#eef2ff",
          100: "#e0e7ff",
          800: "#1e1b4b",
          900: "#0f0e2a",
          950: "#0a0a1a",
        },
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #7c3aed 0%, #06b6d4 100%)",
        "gradient-warm": "linear-gradient(135deg, #7c3aed 0%, #ec4899 50%, #06b6d4 100%)",
      },
      animation: {
        blob: "blob 7s infinite",
        float: "float 3s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "gradient-flow": "gradient-flow 3s ease infinite",
        shimmer: "shimmer 3s linear infinite",
        orbit: "orbit 3s linear infinite",
        "cursor-blink": "cursor-blink 1s step-end infinite",
        "status-pulse": "status-pulse 2s ease-in-out infinite",
      },
      keyframes: {
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "pulse-glow": {
          "0%, 100%": {
            boxShadow: "0 0 20px rgba(124,58,237,0.15), 0 0 40px rgba(6,182,212,0.1)",
          },
          "50%": {
            boxShadow: "0 0 35px rgba(124,58,237,0.3), 0 0 70px rgba(6,182,212,0.2)",
          },
        },
        "gradient-flow": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        orbit: {
          "0%": { transform: "rotate(0deg) translateX(4px) rotate(0deg)" },
          "100%": { transform: "rotate(360deg) translateX(4px) rotate(-360deg)" },
        },
        "cursor-blink": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        "status-pulse": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.5", transform: "scale(1.5)" },
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
