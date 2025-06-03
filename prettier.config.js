/* eslint-disable @typescript-eslint/no-require-imports */
module.exports = {
  semi: true,
  tabWidth: 2,
  printWidth: 100,
  singleQuote: false,
  trailingComma: "all",
  jsxSingleQuote: false,
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: "always",
  endOfLine: "lf",
  proseWrap: "preserve",
  quoteProps: "as-needed",
  htmlWhitespaceSensitivity: "css",
  plugins: [
    require("prettier-plugin-tailwindcss"),
    require("prettier-plugin-organize-imports"),
    require("prettier-plugin-sort-json"),
    require("prettier-plugin-packagejson"),
  ],
};
