const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "development",
    devtool: 'source-map',
    entry: {
        main: './src/index.js',
    },
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          },
          {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader"],
          },
        ]
    },
    devServer: {
        static: {
          directory: path.join(__dirname, './dist'),
        },
        compress: true,
        port: 3000,
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js',
        assetModuleFilename: 'assets/[name][ext]',
      },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'DND',
            hash: false,
            inject: 'body',
            showErrors: false,
            template: 'index.html',
        }),
        new MiniCssExtractPlugin()
    ],
}