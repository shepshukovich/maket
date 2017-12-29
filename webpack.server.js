'use strict';

const path = require('path');
//const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const config = {
    target: 'node',
    externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
    context:__dirname,
    entry: {
        main: ["./src/index.js"]
        //, "./src/input.scss"
    },

    output: {
        publicPath: "/",
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js"
    }
};

module.exports = merge(config, baseConfig);