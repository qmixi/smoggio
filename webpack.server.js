const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js')
const webpackNodeExternals = require('webpack-node-externals');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const config = {
    // inform webpack that this bundle is for node.js
    target: 'node',

    // tell webpack which is the root file of server app
    entry: './src/index.js',

    // tell webpack where he should generate our output file
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },

    externals: [webpackNodeExternals()],
    plugins: [
        new ExtractTextPlugin("styles.css")
    ]
};

module.exports = merge(baseConfig, config);