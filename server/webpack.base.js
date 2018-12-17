module.exports = {
    // tell webpack to run babel on the each file
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: '/node_modules/',
                query: {
                    cacheDirectory: true,
                    plugins: [
                        'transform-decorators-legacy',
                        "transform-class-properties"
                    ],
                    presets: ['es2015', 'react', 'stage-1', ['env', { targets: { browsers: 'last 2 versions' } }]]
                }
            }
        ]
    }
}