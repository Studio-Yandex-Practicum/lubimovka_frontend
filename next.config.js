const { apiBaseUrl } = require('./config/vars');

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
    ],
  },
  experimental: {
    scrollRestoration: true,
    outputStandalone: true,
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
