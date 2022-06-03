const { createProxyMiddleware } = require('http-proxy-middleware');

const { apiBaseUrl, environment } = require('../../config/vars');
const { apiPath } = require('../../src/shared/constants/api-path');

const options = {
  target: apiBaseUrl,
  pathRewrite: {
    [`^${apiPath}`]: '',
  },
  changeOrigin: true,
  logLevel: environment === 'development' ? 'debug' : 'info',
};

const apiProxyMiddleware = createProxyMiddleware(options);

module.exports = {
  apiProxyMiddleware,
};

