const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js')

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
    }
}

module.exports = merge(baseConfig, config);