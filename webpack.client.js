const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js')
var webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const config = {
    // tell webpack which is the root file of client app
    entry: './src/client/client.js',

    // tell webpack where he should generate our output file
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    node: {
        fs: 'empty'
    },
    plugins: [
        new webpack.DefinePlugin({
        "process.env": {
            GEOCODING_API_KEY: process.env.GEOCODING_API_KEY,
            AIRLY_API_KEY: process.env.AIRLY_API_KEY,
        }
        }),
        new ExtractTextPlugin("styles.css")
    ]
}

module.exports = merge(baseConfig, config);