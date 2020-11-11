const path = require('path');
const merge = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const baseConfig = require('./webpack.base');
const webConfig = require('./webConfig.json');

const config = {
  mode: 'development',
  // Tell webpack to root file of our server app
  entry: ['./src/client/client.js', './src/assets/scss/styles.scss'],
  // Tell webpack where to put output file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].min.css',
              outputPath: 'assets/css/',
            },
          },
          {
            loader: 'extract-loader',
          },
          {
            loader: 'css-loader',
            options: {
              minimize: true,
              url: true,
              root: webConfig.siteURL,
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'src/assets/images', to: 'assets/images' },
      { from: 'src/assets/important', to: '' },
    ]),
  ],
  devtool: 'inline-source-map',
};

module.exports = merge(baseConfig, config);
