const nextConfig = {
  reactStrictMode: false,
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['svg-inline-loader'],
    });

    const rules = config.module.rules
      .find(rule => typeof rule.oneOf === 'object')
      .oneOf.filter(rule => Array.isArray(rule.use));
    rules.forEach(rule => {
      rule.use.forEach(moduleLoader => {
        if (
          moduleLoader.loader !== undefined &&
          moduleLoader.loader.includes('css-loader') &&
          typeof moduleLoader.options.modules === 'object'
        ) {
          moduleLoader.options = {
            ...moduleLoader.options,
            modules: {
              ...moduleLoader.options.modules,
              exportLocalsConvention: 'camelCase',
            },
          };
        }
      });
    });

    return config;
  },
};

module.exports = nextConfig;
