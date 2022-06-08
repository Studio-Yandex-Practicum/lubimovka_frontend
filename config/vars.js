const removeTrailingSlash = (url) => url.replace(/\/+$/, '');

const environment = process.env.NODE_ENV || 'development';
const port = parseInt(process.env.PORT, 10) || 3000;
const baseUrl = (process.env.NEXT_PUBLIC_BASE_URL && removeTrailingSlash(process.env.NEXT_PUBLIC_BASE_URL)) || (environment === 'development' && `http://localhost:${port}`) || '';
const apiBaseUrl = (process.env.NEXT_PUBLIC_API_BASE_URL && removeTrailingSlash(process.env.NEXT_PUBLIC_API_BASE_URL)) || (environment === 'development' && 'https://stage.dev.lubimovka.ru/api/v1') || '';

module.exports = {
  environment,
  baseUrl,
  apiBaseUrl,
  port,
};
