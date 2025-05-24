import { dirname } from "path"; // Import dirname to get directory path
import { fileURLToPath } from "url"; // Convert file URL to path
import { FlatCompat } from "@eslint/eslintrc"; // Import FlatCompat for ESLint config compatibility

const __filename = fileURLToPath(import.meta.url); // Get current file path
const __dirname = dirname(__filename); // Get current directory path

const compat = new FlatCompat({
  baseDirectory: __dirname, // Set base directory for compatibility
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"), // Extend Next.js recommended ESLint configs
];

export default eslintConfig; // Export ESLint configuration
