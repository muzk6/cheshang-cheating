var path = require('path');
var webpack = require('webpack');
var nodeModulesDir = path.resolve(__dirname, 'node_modules');

var config = {
    entry: {
        app: path.resolve(__dirname, 'src/app.js'),
    },
    resolve: {
        extensions: ['', '.coffee', '.js']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel?presets=es2015'
        }]
    }

};

module.exports = config;