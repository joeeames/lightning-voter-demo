const path = require('path');
const webpack = require('webpack');
const helpers = require('./helpers');

const HtmlWebpackPlugin = require('html-webpack-plugin');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

module.exports = {

  entry: {
    'ng1': './public/index.ts'
  },

  output: {
    path: helpers.root('dist/aot'),
    publicPath: '/',
    filename: '[name].bundle.js',
    chunkFilename: '[id].chunk.js'
  },

  resolve: {
    extensions: ['.ts', '.js']
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader', 'angular2-template-loader']
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'ng1',
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      comments: false,
      compress: {
        warnings: false
      },
      mangle: false
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(ENV)
      }
    }),

    // new BundleAnalyzerPlugin({
    //   analyzerMode: 'static'
    // })
  ]
}