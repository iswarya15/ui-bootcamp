const { merge } = require('webpack-merge');
const common = require('./webpack.config');

module.exports = merge(common, {
    mode: "production",
    output: {
        filename: "main.[hash].js",
        path: path.resolve(__dirname, "dist")
    },
})