const { merge } = require('webpack-merge'),
    commonConfig = require('./webpack.common.js'),
    webpack = require('webpack');

module.exports = merge(commonConfig, {
    devtool: false,
    plugins: [
        new webpack.EvalSourceMapDevToolPlugin({
            exclude: ['vendor.js'],
        }),
    ],
    mode: 'development',
    performance: {
        hints: false,
    },
});
