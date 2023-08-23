// eslint-disable-next-line @typescript-eslint/no-var-requires
const { apiBaseUrl, environment } = require('./config/env');

// eslint-disable-next-line @typescript-eslint/no-var-requires,import/order
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const config = {
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
      'robinson.net',
      ...(environment === 'development' ? ['source.unsplash.com'] : []),
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
        },
      ],
    };
  },
  async redirects() {
    return [
      {
        source: '/events/:path*',
        destination: '/schedule/:path*',
        permanent: true,
      },
    ];
  },
  eslint: {
    dirs: ['src'],
  },
};

module.exports = withBundleAnalyzer(config);
