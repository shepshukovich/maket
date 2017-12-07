'use strict';
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context:__dirname,
    entry: {
        main: ["./src/index.js", "./dist/CSS/input.scss"]
    },

    output: {
        publicPath: "/",
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },

    module: {
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader" },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin("./CSS/app.css")
    ],

    devServer: {
        contentBase: __dirname + "/dist/",
        hot: true,
        inline: true

    },

    devtool: "inline-source-map"
};
