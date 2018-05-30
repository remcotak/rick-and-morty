const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html')
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new webpack.NamedModulesPlugin(), // Named modules plugin so the console says which module is reloaded
    new webpack.HotModuleReplacementPlugin(),
    new ManifestPlugin()
  ],
  devServer: {
    contentBase: './dist', // Serve files from ./dist folder
    hot: true, // Enable Hot Module Replacement
    historyApiFallback: true, // configuring the fallback URL
    open: true
  }
});
