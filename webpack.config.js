'use strict';
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

module.exports = {
    context:__dirname,
    entry: {
        main: ["./src/index.jsx", "./src/input.scss"]
    },

    output: {
        publicPath: "/",
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },

    module: {
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.scss$/, loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader']) },
            { test: /\.jsx$/, loader: 'babel-loader',
                query: { presets: ['es2015', 'react']
                },
                include: path.resolve(__dirname, "src")
            },
            { test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin("./CSS/app.css"),
        new LodashModuleReplacementPlugin
    ],

    devServer: {
        host: "localhost",
        port: 8080,
        inline: true,
        hot: false,
        contentBase: "dist"
    },

    devtool: "inline-source-map"
};


