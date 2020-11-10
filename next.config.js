const {
  WebpackBundleSizeAnalyzerPlugin,
} = require('webpack-bundle-size-analyzer');
const withSass = require('@zeit/next-sass');
const withLess = require('@zeit/next-less');
const withCSS = require('@zeit/next-css');

const { ANALYZE } = process.env;

module.exports = withCSS({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]___[hash:base64:5]',
  },
  ...withLess(
    withSass({
      lessLoaderOptions: {
        javascriptEnabled: true,
      },
      webpack(config, { dev }) {
        if (ANALYZE) {
          config.plugins.push(new WebpackBundleSizeAnalyzerPlugin('stats.txt'));
        }

        if (dev) {
          config.module.rules.push({
            test: /\.(ts|tsx|js|jsx)$/,
            loader: 'eslint-loader',
            exclude: ['/node_modules/', '/.next/', '/.git/'],
            enforce: 'pre',
          });
        }

        return config;
      },
    }),
  ),
});
