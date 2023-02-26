const environment = process.env.NODE_ENV || 'development';
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || '';
const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || '';
const googleAnalyticsTrackingId = process.env.NEXT_PUBLIC_GA_TRACKING_ID || '';

module.exports = {
  environment,
  baseUrl,
  apiBaseUrl,
  googleAnalyticsTrackingId,
};
