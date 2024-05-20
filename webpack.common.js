const
    path = require('path'),
    webpack = require('webpack');
module.exports = {
    bail: true,
    context: __dirname,
    module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: { presets: ['@babel/env','@babel/preset-react'] }
      }
    ],
    plugins: [
        new webpack.ProvidePlugin({ // Provide jquery automatically without explicit import
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
        }),
    ],
    resolve: {
        alias: {
            jquery: path.resolve(__dirname, 'node_modules/jquery/dist/jquery.min.js'),
        },
    },
};
