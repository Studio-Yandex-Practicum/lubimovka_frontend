export function webpack(config) {
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
  return config;
}

export function rewrites() {
  return {
    fallback: [
      {
        source: '/api/:path*',
        destination: 'https://real-backend-url/:path*',
      },
    ],
  };
}
