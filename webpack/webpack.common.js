const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const resolve = require('./webpack.common.resolve.js').resolve;

module.exports = {
  resolve,
  entry: {
    app: './src/client/start.jsx'
  },
  output: {
    path: path.resolve(__dirname, '../build'),
    publicPath: '/',
    filename: '[name].[contenthash].js'
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: 'src/client/html/index.html',
      filename: './index.html',
      favicon: 'src/client/html/favicon.png',
      chunks: ['app'],
      cache: true
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    })
  ],
  optimization: {
    runtimeChunk: 'single', // single runtime bundle for all chunks
    // put node_modules into separate bundles
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  }
};
