import HtmlWebpackPlugin from 'html-webpack-plugin';
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve('_dirname', 'build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/, 
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]

    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        })
    ]
};
