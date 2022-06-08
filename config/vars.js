const environment = process.env.NODE_ENV || 'development';
const port = parseInt(process.env.PORT, 10) || 3000;
const baseUrl = process.env.BASE_URL || (environment === 'development' && `http://localhost:${port}`) || '';
const apiBaseUrl = process.env.API_BASE_URL || (environment === 'development' && 'https://stage.dev.lubimovka.ru/api/v1') || '';

module.exports = {
  environment,
  baseUrl,
  apiBaseUrl,
  port,
};
