const path = require('path');
const webpack = require('webpack');

const helpers = require('./helpers');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const AotPlugin = require('@ngtools/webpack').AotPlugin;

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';
// var cnt = 0;
// function isFileTS(filename) {
//   if(filename.endsWith('.ts')) {
//     cnt++;
//     console.log('file', cnt, filename);
//     return true;  
//   } else {
//     return false;
//   }
// }

module.exports = {
    
    devtool: 'cheap-module-eval-source-map',
    entry: {
        'polyfills': './public/polyfills.ts',
        'vendor': './public/vendor-aot.ts',
        'app': './public/main-aot.ts'//,
        // 'ng1': './public/index.ts'
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
        loaders: [
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
            name: ['app', 'vendor', 'polyfills']
        }),

        new AotPlugin({
            tsConfigPath: './tsconfig.aot.json',
            entryModule: helpers.root('public/app/app.module#AppModule')
        }),

        new HtmlWebpackPlugin({
            template: 'config/prod/index.html'
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