const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = function getRules(env) {
  const styleLoader = MiniCssExtractPlugin.loader;

  return [
    {
      test: /\.html$/,
      use: [
        {
          loader: 'html-loader',
          options: {
            minimize: true,
          }
        }
      ]
    },
    {
      test: /\.jsx$|\.es6$|\.js$/,
      exclude: /node_modules(?![\\/]gui-library)/,
      use: {
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
          presets: ['@babel/react']
        }
      }
    },
    {
      test: /\.(ttf|eot|woff|woff2)$/,
      type: 'asset/resource',
      generator: {
        filename: './fonts/[name].[contenthash][ext]',
      },
    },
    {
      test: /\.(svg|gif|png|jpg)$/,
      type: 'asset/resource',
      generator: {
        filename: './images/[name].[contenthash][ext]',
      },
    },
    {
      test: /\.md$/i,
      use: 'raw-loader'
    },
    {
      test: /^(?!.*?\.module).*\.(less|css)$/, //all *.css and *.less except for *.module.css and *.module.less
      use: [
        styleLoader,
        {
          loader: 'css-loader',
          options: {
            sourceMap: env === 'development'
          }
        },
        'less-loader'
      ]
    },
    {
      test: /\.module\.(less|css)$/, //*.module.css and *.module.less
      use: [
        styleLoader,
        {
          loader: 'css-loader',
          options: {
            sourceMap: env === 'development',
            modules: true,
            modules: {
              localIdentName: "[name]__[local]___[hash:base64:5]", //friendly module classNames
            }
          }
        },
        'less-loader'
      ]
    },
    {
      resourceQuery: /raw/,
      type: 'asset/source',
    },
  ];
};