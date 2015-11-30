var webpack = require('webpack');

module.exports = {
    context: __dirname + '/App',
    entry: './App.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    externals: {
        "jquery": "jQuery"
    },
    plugins: [
        new webpack.DefinePlugin({
            ON_TEST: process.env.NODE_ENV === 'test'
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        })
    ],

    module: {
        loaders: [
            {
                test: /\.js$/, loader: 'babel',
                query: {
                    presets: ['es2015']
                },
                exclude: /node_modules/
            },
            {test: /jquery\.js$/, loader: 'expose?$'},
            {test: /jquery\.js$/, loader: 'expose?jQuery'},
            {test: /\.html$/, loader: 'raw', exclude: /node_modules/},
            {test: /\.css$/, loader: 'style!css'},
            {test: /\.styl$/, loader: 'style!css!stylus', exclude: /node_modules/},
            {test: /\.json$/, loader: 'json', exclude: /node_modules/},
            {test: /\.(ttf|eot|svg|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader"}
        ]
    }
};