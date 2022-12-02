// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const isProduction = process.env.NODE_ENV == 'production';

const stylesHandler = MiniCssExtractPlugin.loader;

const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    devServer: {
        open: true,
        host: 'localhost',
        watchFiles: ['./src/*', './src/**/*'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Home page',
            filename: 'index.html',
            template: './src/index.pug',
        }),
        new HtmlWebpackPlugin({
            title: 'Web Development',
            filename: 'webdev.html',
            template: './src/webdev.pug',
        }),
        new HtmlWebpackPlugin({
            title: 'Free intro to JavaScript',
            filename: 'introjs.html',
            template: './src/introjs.pug',
        }),
        new HtmlWebpackPlugin({
            title: 'English',
            filename: 'english.html',
            template: './src/english.pug',
        }),
        new HtmlWebpackPlugin({
            title: 'Ukrainian',
            filename: 'ukrainian.html',
            template: './src/ukrainian.pug',
        }),
        new HtmlWebpackPlugin({
            title: 'Remote',
            filename: 'remote.html',
            template: './src/remote.pug',
        }),
        new HtmlWebpackPlugin({
            title: 'About',
            filename: 'about.html',
            template: './src/about.pug',
        }),
        new HtmlWebpackPlugin({
            title: 'Contact',
            filename: 'contact.html',
            template: './src/contact.pug',
        }),

        new MiniCssExtractPlugin(),

        new CopyWebpackPlugin({
            patterns: [
                {from: path.resolve(__dirname, "src/images"), to: path.resolve(__dirname, "dist/images")},
            ],
        }),

        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                loader: 'babel-loader',
            },
            {
                test: /\.s[ac]ss$/i,
                use: [stylesHandler, 'css-loader', 'postcss-loader', 'sass-loader'],
            },
            {
                test: /\.css$/i,
                use: [stylesHandler, 'css-loader', 'postcss-loader'],
            },
            // {
            //     test: /\.(png|jpg)$/,
            //     use: [{ loader: 'file-loader'}]
            // },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset/resource',
                // type: 'asset',
            },
            {
                test: /\.pug$/,
                loader: 'pug-loader',
            }

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
        
        
    } else {
        config.mode = 'development';
    }
    return config;
};
