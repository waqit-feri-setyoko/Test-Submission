const HtmlWebpackPlugin = require("html-webpack-plugin");
const { SourceMapDevToolPlugin } = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");
 
module.exports = {
    entry: "./src/app.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
            },
            {
                test: /\.js$/,
                enforce: 'pre',
                use: ['source-map-loader'],
            },
          
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
           template: "./src/index.html",
           filename: "index.html"
        }),
        new SourceMapDevToolPlugin({
            filename: "source-map.js"
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/image'),
                    to: path.resolve(__dirname, 'dist/image')
                }
            ]
        })
    ]
}