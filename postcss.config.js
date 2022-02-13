const path = require('path');

const breakpoints = require('./src/shared/breakpoints');
const scale = require('./src/shared/helpers/scale')();

module.exports = {
  plugins: [
    'postcss-flexbugs-fixes',
    [
      'postcss-preset-env',
      {
        'autoprefixer': {
          'flexbox': 'no-2009',
        },
        'stage': 3,
        'features': {
          'custom-properties': false
        }
      }
    ],
    [
      'postcss-mixins',
      {
        mixinsDir: path.join(__dirname, 'src/shared/styles/mixins'),
      }
    ],
    'postcss-import',
    [
      'postcss-simple-vars',
      {
        variables: breakpoints,
      }
    ],
    'postcss-nested',
    [
      'postcss-functions',
      {
        functions: {
          scale,
        },
      }
    ]
  ],
};
