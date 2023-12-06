/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path');

const variables = {
  ...require('./src/shared/breakpoints'),
  ...require('./src/shared/heights'),
};

module.exports = {
  plugins: [
    'postcss-flexbugs-fixes',
    ['postcss-preset-env', {
      autoprefixer: {
        flexbox: 'no-2009',
      },
      stage: 3,
      features: {
        'custom-properties': false
      }
    }],
    ['postcss-mixins', {
      mixinsDir: path.join(__dirname, 'src/shared/styles/mixins'),
    }],
    'postcss-import',
    ['postcss-simple-vars', {
      variables,
    }],
    'postcss-nested',
    ['postcss-pxtorem', {
      propList: ['*'],
      minPixelValue: 1,
    }],
  ],
};
