const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const path = require('path');

module.exports = [
  new HtmlWebpackPlugin({
    favicon: path.join(__dirname, '..', 'public', 'favicon.ico'),
    inject: true,
    template: path.join(__dirname, '..', 'public', 'index.html'),
  }),
  new CleanWebpackPlugin(),
  new MiniCssExtractPlugin({
    filename: 'css/styles.css',
  }),
];
