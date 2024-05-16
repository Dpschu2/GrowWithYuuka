const
    BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin,
    { CleanWebpackPlugin } = require('clean-webpack-plugin'),
    LodashPlugin = require('lodash-webpack-plugin'),
    path = require('path'),
    webpack = require('webpack'),
    MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    bail: true,
    context: __dirname,
    module: {
        rules: [{
            test: /\.(scss|css)$/,
            use: [
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 2,
                        sourceMap: true,
                        url: false,
                    },
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        postcssOptions: {
                            plugins: [
                                'autoprefixer',
                            ],
                        },
                    },
                },
                'sass-loader',
            ],
        },
        {
            test: /\.js$/,
            include: /(assets\/js|assets\\js|stencil-utils)/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
                options: {
                    plugins: [
                        '@babel/plugin-syntax-dynamic-import', // add support for dynamic imports (used in app.js)
                        'lodash', // Tree-shake lodash
                    ],
                    presets: [
                        ['@babel/preset-env', {
                            loose: true, // Enable "loose" transformations for any plugins in this preset that allow them
                            modules: false, // Don't transform modules; needed for tree-shaking
                            useBuiltIns: 'entry',
                            corejs: '^3.6.5',
                        }],
                    ],
                },
            },
        },
        {
            test: require.resolve('jquery'),
            loader: 'expose-loader',
            options: {
                exposes: ['$'],
            },
        },
        ],
    },
    output: {
        chunkFilename: 'theme-bundle.chunk.[name].js',
        filename: 'theme-bundle.[name].js',
        path: path.resolve(__dirname, 'assets/dist'),
    },
    performance: {
        hints: 'warning',
        maxAssetSize: 1024 * 300,
        maxEntrypointSize: 1024 * 300,
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ['assets/dist'],
            verbose: false,
            watch: false,
        }),
        new LodashPlugin(), // Complements babel-plugin-lodash by shrinking its cherry-picked builds further.
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
        new webpack.ProvidePlugin({ // Provide jquery automatically without explicit import
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            openAnalyzer: false,
            logLevel: 'silent',
        }),
    ],
    resolve: {
        alias: {
            jquery: path.resolve(__dirname, 'node_modules/jquery/dist/jquery.min.js'),
        },
    },
};
