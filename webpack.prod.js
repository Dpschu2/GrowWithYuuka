const { merge } = require('webpack-merge'),
      commonConfig = require('./webpack.common.js');

module.exports = merge(commonConfig, {
    mode: 'production',
    optimization: {
        emitOnErrors: false,
    },
});
