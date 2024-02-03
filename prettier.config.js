const prettierrc = require('./.prettierrc');

module.exports = {
  ...prettierrc,
  plugins: ['@trivago/prettier-plugin-sort-imports'],
};
