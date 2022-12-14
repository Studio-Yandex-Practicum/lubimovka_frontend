const path = require('path');

const breakpoints = require('./src/shared/breakpoints');
const heights = require('./src/shared/heights');

const variables = Object.assign({}, breakpoints, heights);

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
    }]
  ],
};
