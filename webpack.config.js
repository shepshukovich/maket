'use strict';
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        main: ["webpack-dev-server/client", "./src/index.js"]
    },
    output: {
        filename: "./bundle.js",
        path: path.resolve(__dirname, 'dist')

    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader" }
        ]
    },


    watch: true,
    watchOptions: {
        aggregateTimeout: 300,
        ignored: /node_modules/
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],

    devServer: {
        host: 'localhost',
        port: 8080,
        contentBase: __dirname + '/dist',
        hot: true
    }

};


