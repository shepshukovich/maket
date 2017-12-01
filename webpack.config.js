'use strict';
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: ["./home.js", 'input.scss'],
    output: {
        filename: "./sborka/build.js"

    },
    module: {

        rules: [
            /*
            your other rules for JavaScript transpiling go in here
            */
            { // regular css files
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    loader: 'css-loader?importLoaders=1',
                }),
            },
            { // sass / scss loader for webpack
                test: /\.(sass|scss)$/,
                loader: ExtractTextPlugin.extract(['css-loader', 'scss-loader'])
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({ // define where to save the file
            filename: 'sborka/build.nashCSS.css',
            allChunks: true,
        }),
    ],
};