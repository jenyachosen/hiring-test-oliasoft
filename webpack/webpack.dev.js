const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const getRules = require('./webpack.common.rules.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    client: {
      overlay: true,
    },
    open: true
  },
  module: {
    rules: getRules('development')
  },
});
