const atImport = require("postcss-import")
const autoprefixer = require("autoprefixer");
const nesting = require("tailwindcss/nesting");
const tailwindcss = require("tailwindcss");

const config = {
  plugins: [
    atImport(),
    nesting(),
    //Some plugins, like tailwindcss/nesting, need to run before Tailwind,
    tailwindcss(),
    //But others, like autoprefixer, need to run after,
    autoprefixer
  ]
};

module.exports = config;
