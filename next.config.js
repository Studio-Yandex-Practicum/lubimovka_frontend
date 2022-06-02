const { baseUrl } = require('./config/vars');

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
      'stage.dev.lubimovka.ru',
      'lubimovka.art',
      'test.dev.lubimovka.ru',
      '2022.lubimovka.ru',
    ],
  },
  publicRuntimeConfig: {
    baseUrl,
  },
  experimental: {
    scrollRestoration: true,
  },
};
