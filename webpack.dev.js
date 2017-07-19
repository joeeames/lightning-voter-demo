const path = require('path');
const webpack = require('webpack');
const helpers = require('./helpers');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const ENV = process.env.NODE_ENV = process.env.ENV = 'development';


module.exports = {
    // devtool: 'cheap-module-eval-source-map',

    entry: {
        'polyfills': './public/polyfills.ts',
        'vendor': './public/vendor.ts',
        'app': './public/main.ts',
        'ng1': './public/index.ts'
    },

    output: {
        path: helpers.root('dist'),
        // publicPath: 'http://localhost:8080/',
        publicPath: '/',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },

    resolve: {
        extensions: ['.ts', '.js']
    },

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader']
            },
            // {
            //     test: /^((?!\/app\/).)*\.ts$/,
            //     loaders: ['awesome-typescript-loader']
            // },
            {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills', 'ng1']
        }),

        new HtmlWebpackPlugin({
            template: 'public/index.html'
        }),

        // new webpack.optimize.UglifyJsPlugin({
        //     beautify: false,
        //     comments: false,
        //     compress: {
        //         screw_ie8: true,
        //         warnings: false
        //     },
        //     mangle: {
        //         keep_fnames: true,
        //         screw_i8: true
        //     }
        // }),

        new webpack.DefinePlugin({
            'process.env': {
                'ENV': JSON.stringify(ENV)
            }
        })
    ]
};