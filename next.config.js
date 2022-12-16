const { apiBaseUrl, environment } = require('./config/env');

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.(js|ts)x?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: {
                removeViewBox: false,
              },
            },
          },
        },
      ],
    });

    return config;
  },
  images: {
    domains: [
      'lubimovka.art',
      '2022.lubimovka.ru',
      'stage.dev.lubimovka.ru',
      'test.dev.lubimovka.ru',
      ...environment === 'development' ? ['source.unsplash.com'] : [],
    ],
  },
  experimental: {
    scrollRestoration: true,
    outputStandalone: true,
    esmExternals: false,
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/press-releases/:year/download',
          destination: `${apiBaseUrl}/info/press-releases/:year/download/`,
        }
      ],
    };
  },
};
