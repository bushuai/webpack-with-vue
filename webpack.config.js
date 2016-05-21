var webpack = require('webpack'),
    path = require('path')

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
        publicPath: 'dist/'
    },
    resolveLoader: {
        root: path.join(__dirname, 'node_modules')
    },
    devServer: {
        historyApiFallback: true
    },
    devtool: '#eval-source-map',
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/
        }, {
            test: /\.(scss|css)$/,
            loader: 'style!css!autoprefixer!sass'
        }, {
            test: /\.vue$/,
            loader: 'vue'
        }, {
            test: /\.(png|jpg|gif|svg)$/,
            loader: 'url',
            query: {
                limit: 10000,
                name: '[name].[ext]?[hash]'
            }
        }]
    }
}
