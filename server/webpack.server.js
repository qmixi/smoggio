const path = require('path');

module.exports = {
    // inform webpack that this bundle is for node.js
    target: 'node',

    // tell webpack which is the root file of server app
    entry: './src/index.js',

    // tell webpack where he should generate our output file
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },

    // tell webpack to run babel on the each file
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: '/node_modules/',
                options: {
                    presets: ['react', 'stage-0', ['env', { targets: { browsers: 'last 2 versions' } }]]
                }
            }
        ]
    }
}