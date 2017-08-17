const path = require('path');
const webpack = require('webpack');
const helpers = require('./helpers');

const AotPlugin = require('@ngtools/webpack').AotPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

module.exports = {

  entry: {
    'polyfills': './public/polyfills.ts',
    'vendor': './public/vendor-aot.ts',
    'app': './public/main.ts'
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
        loader: '@ngtools/webpack'
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      minChunks: Infinity
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      chunks: ['vendor', 'app'],
      minChunks: 2
    }),
    new AotPlugin({
      tsConfigPath: './tsconfig.aot.json',
      entryModule: helpers.root('public/app/app.module#AppModule')
    }),
    new HtmlWebpackPlugin({
      template: 'config/index.html',
      chunks: ['app']
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      comments: false,
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(ENV)
      }
    }),

    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)@angular/,
      helpers.root('./src'),
      {}
    ),

    // new BundleAnalyzerPlugin({
    //   analyzerMode: 'static'
    // })
  ]
}