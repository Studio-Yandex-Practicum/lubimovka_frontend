// eslint-disable-next-line @typescript-eslint/no-var-requires,no-undef
const path = require('path');

// eslint-disable-next-line @typescript-eslint/no-var-requires,no-undef
const breakpoints = require('./src/shared/breakpoints');

// eslint-disable-next-line @typescript-eslint/no-var-requires,no-undef
const scaleSize = require('./src/shared/helpers/scaleSize')();

// eslint-disable-next-line no-undef
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
        // eslint-disable-next-line no-undef
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
    [
      'postcss-functions',
      {
        functions: {
          scaleSize,
        },
      }
    ]
  ],
};
