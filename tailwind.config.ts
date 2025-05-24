import type { Config } from "tailwindcss";

// Define the Tailwind CSS configuration object
const config: Config = {
  content: [
    // Paths to all files that use Tailwind classes
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}", // Feature-specific folders
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}", // Reusable UI components
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}", // App directory (Next.js app router)
  ],

  theme: {
    // You can customize your design system here
    // e.g., colors, fonts, spacing, etc.
  },
};

export default config;
