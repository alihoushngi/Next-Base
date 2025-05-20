/* eslint-disable @typescript-eslint/no-require-imports */
module.exports = {
	plugins: [
		require("prettier-plugin-tailwindcss"),
		require("prettier-plugin-organize-imports"),
		require("prettier-plugin-sort-json"),
	],
	tabWidth: 2,
	semi: false,
	singleQuote: false,
	trailingComma: "none",
	printWidth: 100,
	bracketSpacing: false,
	arrowParens: "avoid",
};
