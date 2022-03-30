const path = require('path');

const buildEslintCommand = (filenames) =>
  `next lint --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`;

module.exports = {
  '*.css': 'stylelint **/*.css --cache --allow-empty-input --fix',
  '*.{js,jsx,ts,tsx}': [buildEslintCommand],
}
