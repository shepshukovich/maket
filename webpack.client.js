'use strict';
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const config = {
    context:__dirname,
    entry: {
        main: ["./src/client/client.js"]    //, "./src/input.scss"
    },

    output: {
        publicPath: "/",
        path: path.resolve(__dirname, "public"),
        filename: "bundle.js"
    }
};

module.exports = merge(config, baseConfig);