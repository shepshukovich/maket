const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

module.exports = {
    module: {
        loaders: [
            {test: /\.css$/, loader: "style-loader!css-loader"},
            {test: /\.scss$/, loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])},
            {
                test: /\.jsx$/, loader: 'babel-loader',
                query: {presets: ['es2015', 'react']},
                include: path.resolve(__dirname, "src")
            },
            {
                test: /\.js$/, loader: 'babel-loader',
                exclude: '/node_modules/',
                options: {
                    presets: [
                        'react',
                        //'stage-0',
                        ['env', {targets: {browsers: ['last 2 versions']}}]
                    ]
                }
            },

            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            }
        ]
    },


    plugins: [
        //new webpack.HotModuleReplacementPlugin(),
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
    node: {
        fs: 'empty',
        net: 'empty'
    },

    devtool: "inline-source-map"
};