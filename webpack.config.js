const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const autoprefixer = require('autoprefixer');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

let con = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, "./dist"),
        filename: "index_bundle.js"
    },
    module: {
        rules:[
            {
                test: /\.js$/,
                //exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                },
            },
            {
                test: /\.scss$/,
                //use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"]
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                autoprefixer({
                                    browsers:['ie >= 8', 'last 4 version']
                                })
                            ],
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            
                        }
                    }
                ],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/test.html'
        })
    ],
    optimization: {
        minimizer: [new UglifyJsPlugin({
            test: /\.js(\?.*)?$/i,
            sourceMap: true,
        })],
    },
}

module.exports = (env, options ) => {
    con.devtool = options.mode === 'production' ? false : 'cheap-module-eval-source-map';
    return con;
}