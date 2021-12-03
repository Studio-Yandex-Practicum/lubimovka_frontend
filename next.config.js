/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line @typescript-eslint/no-var-requires
// eslint-disable-next-line no-undef
const webpack = require('webpack');

// eslint-disable-next-line no-undef
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
              }
            }
          }
        }
      ],
    });

    config.plugins.push(new webpack.DefinePlugin({
      // eslint-disable-next-line no-undef
      'process.env.ORIGIN': JSON.stringify(process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://lubimovka.ru'),
    }));

    return config;
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://lubimovka.kiryanov.ru/api/v1/:path*/',
      },
    ];
  },
  images: {
    domains: [
      'lubimovka.kiryanov.ru',
      'loveopium.ru',
      'cdnn21.img.ria.ru',
      'img-fotki.yandex.ru',
      'www.m24.ru',
      'www.hist.msu.ru',
      'lh3.googleusercontent.com',
      'api.um.mos.ru',
      'radiovera.ru',
      'pp.userapi.com',
      'avatars.mds.yandex.net',
      'needguide.ru',
      'cozymoscow.me',
    ],
  },
};
