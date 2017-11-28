var path = require("path");
var webpack=require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: path.join(__dirname, "src/index.js"),
    output: {
        filename: "bundel.js",
        path: path.join(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use:["style-loader","css-loader"]
            },{
                test:/\.less$/,
                use:["style-loader","css-loader","less-loader"]
            },{
                test:/\.sass$/,
                use:["style-loader","css-loader","sass-loader"]
            },{
                test:/\.(jpg|jpeg|svg|gif|png|bmp)$/,
                use:[
                    {
                        loader:"url-loader",
                        options:{
                            limit:1024*50
                        }
                    }
                ]
            },{
                test:/\.(eot|woff|woff2|ttf)$/,
                use:["url-loader"]
            },{
                test:/\.js$/,
                exclude:/node_modules/,
                use:["babel-loader"]
            }

        ]
    },
    devServer:{
        port:9999,
        contentBase:path.join(__dirname,"src"),
        hot:true
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new  HtmlWebpackPlugin({
            template:path.join(__dirname,"src/index.html")
        })
    ]
}