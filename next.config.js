const { baseUrl, apiBaseUrl } = require('./config/vars');

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
  publicRuntimeConfig: {
    baseUrl,
    apiBaseUrl,
  },
  experimental: {
    scrollRestoration: true,
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
