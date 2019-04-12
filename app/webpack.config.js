const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const config = require('./config')

module.exports = (env = {}) => ({
    mode: env.production ? 'production' : 'development',

    entry: {
        bundle: './src/index.tsx'
    },
    output: {
        filename: '[name].[hash:8].js',
        path: path.resolve(__dirname, 'build')
    },

    devtool: env.production ? 'source-map' : 'inline-source-map',

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },

    module: {
        rules: [
            {test: /\.tsx?$/, loader: 'awesome-typescript-loader'},
            {enforce: 'pre', test: /\.js$/, loader: 'source-map-loader'}
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
            outputPath: '/'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],

    devServer: {
        hot: true,
        contentBase: path.resolve(__dirname, 'build'),
        compress: true,
        host: config.host,
        port: config.port,
        historyApiFallback: true,
        proxy: config.proxy
    }
})