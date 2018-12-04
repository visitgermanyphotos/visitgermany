const path = require('path');

module.exports = [{
    entry: {
        frontend: [
            './assets/scss/frontend.scss',
            './assets/js/frontend.js'
        ]
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].bundle.css',
                        },
                    },
                    {loader: 'extract-loader'},
                    {loader: 'css-loader'},
                    {
                        loader: 'sass-loader',
                        options: {
                            includePaths: ['./node_modules']
                        }
                    },
                ]
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015'],
                    plugins: ['transform-object-assign']
                },
            }
        ]
    },
}];