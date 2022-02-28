const environment = process.env.NODE_ENV || 'development';
const baseUrl = process.env.BASE_URL || (environment === 'development' && 'http://localhost:3000') || '';

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer:/\.(js|ts)x?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: {
                removeViewBox: false,
              }
            }
          }
        }
      ],
    });

    return config;
  },
  images: {
    domains: [
      'stage.dev.lubimovka.ru',
      'lubimovka.kiryanov.ru',
      'test.dev.lubimovka.ru',
      '2022.lubimovka.ru'
    ],
  },
  publicRuntimeConfig: {
    baseUrl,
  }
};
