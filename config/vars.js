const environment = process.env.NODE_ENV || 'development';
const baseUrl = process.env.BASE_URL || (environment === 'development' && `http://localhost:${port}`) || '';
const apiBaseUrl = process.env.API_BASE_URL || '';

module.exports = {
  environment,
  baseUrl,
  apiBaseUrl,
};
