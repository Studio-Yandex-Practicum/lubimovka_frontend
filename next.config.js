const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const { apiBaseUrl, environment } = require('./config/env');

const config = {
  webpack(config, { isServer }) {
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

    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        async_hooks: false,
      };

      config.resolve.alias = {
        ...config.resolve.alias,
        'msw/node': false,
      };
    }

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
    esmExternals: 'loose',
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
