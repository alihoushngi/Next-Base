/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/Search/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/Search/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      // 🌈 Custom color palette
      colors: {
        primary: {
          DEFAULT: "#22092C", // Main brand color
          light: "#3C1850", // Lighter shade of primary
          dark: "#150620", // Darker shade of primary
          contrast: "#FFFFFF", // Text color on primary background
        },
        secondary: {
          DEFAULT: "#872341",
          light: "#A74A57",
          dark: "#5E182B",
          contrast: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#BE3144",
          light: "#D95660",
          dark: "#8A2030",
          contrast: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#F05941",
          light: "#F37A66",
          dark: "#B03930",
          contrast: "#000000",
        },
      },

      // 🔤 Font families for typography
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Main body font
        heading: ["Poppins", "sans-serif"], // Heading font
      },

      // 🔠 Custom font sizes
      fontSize: {
        body: "1rem", // Regular text
        heading: "1.875rem", // Main headings
        subheading: "1.25rem", // Subheadings
        small: "0.875rem", // Small text
      },

      // 📏 Custom spacing scale
      spacing: {
        layout: "2rem", // Outer layout spacing
        section: "1.5rem", // Section padding/margin
        element: "1rem", // UI element spacing
        gap: "0.75rem", // Grid/list gaps
      },

      // 🟦 Border radius settings
      borderRadius: {
        btn: "0.5rem", // Buttons
        card: "1rem", // Cards and containers
        input: "0.375rem", // Input fields
      },

      // 🌫 Shadow system
      boxShadow: {
        soft: "0 1px 2px rgba(0,0,0,0.05)", // Subtle shadows
        medium: "0 4px 6px rgba(0,0,0,0.1)", // Medium emphasis
        strong: "0 10px 15px rgba(0,0,0,0.2)", // Strong shadow
        focus: "0 0 0 3px rgba(37, 99, 235, 0.5)", // Input focus outline
      },

      // ⏱ Default transition duration
      transitionDuration: {
        DEFAULT: "200ms",
      },
    },
  },

  // 🧩 Optional Tailwind plugins
  plugins: [],
};
