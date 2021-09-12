const path = require('path');

const breakpoints = require('./src/shared/breakpoints');

module.exports = {
  plugins: [
    [
      'postcss-mixins',
      {
        mixinsDir: path.join(__dirname, 'src/shared/styles/mixins'),
      }
    ],
    [
      'postcss-simple-vars',
      {
        variables: breakpoints,
      }
    ],
    'postcss-nested',
  ],
}
