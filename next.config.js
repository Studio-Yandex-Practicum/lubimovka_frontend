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
