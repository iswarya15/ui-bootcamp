const { merge } = require('webpack-merge');
const common = require('./webpack.config');
const path = require('path')

module.exports = merge(common, {
    mode: "development",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
    devServer: {
        hot: true,
        static: {
            directory: path.join(__dirname, "dist"),
        },
        watchFiles: ["src/*.html"],
    },

})