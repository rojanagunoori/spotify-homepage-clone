// postcss.config.js
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},  // ✅ NOT "tailwindcss"
    autoprefixer: {},
  },
};