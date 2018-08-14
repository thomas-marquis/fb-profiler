const path = require('path');

module.exports = {
    entry: './fbapp/static/js/app',
    watch: true,
    output: {
        path: path.resolve(__dirname, 'fbapp/static/dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
              test: /\.js$/,
              exclude: /node_modules/,
              use: {
                loader: 'babel-loader',
              }
            }
      ]
    },
    target: 'web',
    node: {
        fs: 'empty'
    }
};