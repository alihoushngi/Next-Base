const config = {
  plugins: [
    "postcss-import",
    "@tailwindcss/postcss",
    "tailwindcss",
    "autoprefixer",
    ...(process.env.NODE_ENV === "production" ? ["cssnano"] : []),
  ],
};

export default config;
