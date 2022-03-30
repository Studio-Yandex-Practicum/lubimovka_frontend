const { createProxyMiddleware } = require('http-proxy-middleware');

const { apiPath } = require('../../src/shared/constants/api-path');
const environment = process.env.NODE_ENV || 'development';
const apiBaseUrl = process.env.API_BASE_URL || (environment === 'development' && 'https://stage.dev.lubimovka.ru/api/v1') || '';

const options = {
  target: apiBaseUrl,
  pathRewrite: {
    [`^${apiPath}`]: '',
  },
  changeOrigin: true,
  logLevel: environment === 'development' ? 'debug' : 'info',
};

const apiProxy = createProxyMiddleware(options);

module.exports = {
  apiProxy
};

