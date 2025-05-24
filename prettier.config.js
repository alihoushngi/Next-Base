/* eslint-disable @typescript-eslint/no-require-imports */
module.exports = {
  semi: true, // Add semicolons at the end of statements
  tabWidth: 2, // Number of spaces per indentation level
  printWidth: 100, // Specify the line length that the printer will wrap on
  singleQuote: false, // Use double quotes instead of single quotes
  trailingComma: "all", // Print trailing commas wherever possible (ES5+)
  jsxSingleQuote: false, // Use double quotes in JSX attributes
  bracketSpacing: true, // Print spaces between brackets in object literals
  bracketSameLine: false, // Put the closing bracket of JSX elements on a new line
  arrowParens: "always", // Always include parentheses around arrow function parameters
  endOfLine: "lf", // Set the line ending style to Unix (LF)
  proseWrap: "preserve", // Control how prose is wrapped. "preserve" keeps original formatting
  quoteProps: "as-needed", // Change quoting of object properties only when necessary
  htmlWhitespaceSensitivity: "css", // Handle whitespace sensitivity based on CSS display property
  plugins: [
    require("prettier-plugin-tailwindcss"), // Tailwind CSS classes sorting plugin
    require("prettier-plugin-organize-imports"), // Plugin to organize and sort import statements
    require("prettier-plugin-sort-json"), // Plugin to sort JSON files
    require("prettier-plugin-packagejson"), // Plugin to sort package.json properties
  ],
};
