/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin': 'spin 3s linear infinite',
      },
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(circle, rgba(0,0,0,1) 36%, rgba(255,255,255,0) 100%)",
        "gradient-conic":
          "radial-gradient(circle, rgba(0,0,0,1) 36%, rgba(255,255,255,0) 100%)",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        purple: "#3f3cbb",
        midnight: "#121063",
        metal: "#565584",
        tahiti: "#3ab7bf",
        silver: "#ecebff",
        "bubble-gum": "#ff77e9",
        bermuda: "#78dcca",
        slate: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          400: "#94a3b8",
          500: " #64748b",
          800: "#1e293b",
          900: "#0f172a",
          950: "#020617",
        },
        neutral: {
          50: "#fafafa",
          300: "#d4d4d4",
          600: "#525252",
          800: "#262626",
          950: "#0a0a0a",
        },
        green: {
          50: "#f0fdf4",
          300: "#86efac",
          600: "#16a34a",
          800: "#166534",
          950: "#052e16",
        },
        blue: {
          50: "#eff6ff",
          300: "#93c5fd",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          950: "#172554",
        },
      },
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
};
