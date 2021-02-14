const path = require('path');
const { merge } = require('webpack-merge');
const commonwp = require('./webpack.common');

module.exports = merge(commonwp, {
  mode: 'production',
  entry: './src/js/controller.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[contenthash].js',
  },
});
