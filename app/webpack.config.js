const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const config = require('./config')

module.exports = (env = {}) => ({
    mode: env.production ? 'production' : 'development',

    entry: {
        bundle: './src/index.tsx'
    },
    output: {
        filename: env.production ? '[name].[hash:8].js' : '[name].js',
        path: path.resolve(__dirname, 'build')
    },

    devtool: env.production ? 'source-map' : 'inline-source-map',

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },

    module: {
        rules: [
            {test: /\.(t|j)sx?$/, loader: 'babel-loader'},
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            }
        ]
    },

    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all'
                }
            }
        }
    },

    plugins:  [
        new MiniCssExtractPlugin({
            filename: "bundle.css",
            chunkFilename: "bundle.[chunkhash:8].css"
        }),
        new HtmlWebpackPlugin({
            template: 'index.html',
            outputPath: '/'
        }),
        new webpack.HotModuleReplacementPlugin(),
        ...(env.production ? [new CleanWebpackPlugin()] : [])
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