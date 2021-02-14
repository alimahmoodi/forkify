const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const commonwp = require('./webpack.common');
const path = require('path');

module.exports = merge(commonwp, {
  mode: 'production',
  entry: './src/js/controller.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
});
