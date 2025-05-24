/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    "postcss-import": {}, // Enable importing CSS files with @import
    "@tailwindcss/postcss": {}, // Tailwind CSS plugin for PostCSS processing
    autoprefixer: {}, // Automatically add vendor prefixes for better browser support
    ...(process.env.NODE_ENV === "production" ? { cssnano: {} } : {}), // Minify CSS only in production mode using cssnano
  },
};

export default config;
