const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        webSite: "./src/index.js"
    }, stats: {
        children: true,
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    }, devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        port: 9004,
        hot: false,
        open: true,
        devMiddleware: {
            writeToDisk: true,
        }
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
                options: {
                    minimize: true
                }
            },
            {
                test: /\.(sc|sa|c)ss$/i,
                exclude: /bootstrap\.scss/i,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        esModule: false,
                    },
                }, "css-loader","sass-loader"],
            },
            {
                test: /bootstrap\.scss$/i,
                use: [{


                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        esModule: false,
                    },
                }, "rtlcss-loader","sass-loader"]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: "./images/[name][ext]"
                }
            },
            {
                test: /\.(woff|svg|ttf|eot|woff2)$/i,
                type: 'asset/resource',
                generator: {
                    filename: "./fonts/[name][ext]"
                }
            },

        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html"
            , template: "./src/index.html"
        } ),
        new HtmlWebpackPlugin({  
            filename: "product.html"
            , template: "./src/product.html"
        } ),
        new HtmlWebpackPlugin({
            filename: "search.html"
            , template: "./src/search.html"
        } ),
        new HtmlWebpackPlugin({
            filename: "payment.html",
            template:"./src/payment.html"
        })
        ,new HtmlWebpackPlugin({
            filename: "contact.html"
            , template: "./src/contact.html"
        } )
        ,new HtmlWebpackPlugin({
            filename: "checkout.html"
            , template: "./src/checkout.html"
        } )
        , new MiniCssExtractPlugin({
            filename: "css/style.css"
        }),
        new CssMinimizerPlugin()
    ]
};