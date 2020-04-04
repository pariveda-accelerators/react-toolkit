const path = require('path');
module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.tsx?$/,
    use: [
      {
        loader: require.resolve('ts-loader'),
        options: {
          reportFiles: ['stories/**/*.{ts|tsx}'],
        },
      },
    ],
  });
  config.resolve.extensions.push('.ts', '.tsx');
  config.resolve.alias = Object.assign(config.resolve.alias, {
    foundations: path.resolve(__dirname, '../src/foundations'),
    utils: path.resolve(__dirname, '../src/utils'),
  });
  return config;
};
