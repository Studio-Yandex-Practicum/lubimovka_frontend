const webpack = require('webpack');

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

    config.plugins.push(new webpack.DefinePlugin({
      'process.env.ORIGIN': JSON.stringify(process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://lubimovka.ru'),
    }));

    return config;
  },
  rewrites() {
    return {
      fallback: [
        {
          source: '/api/:path*',
          destination: 'https://real-backend-url/:path*',
        },
      ],
    };
  }
};
