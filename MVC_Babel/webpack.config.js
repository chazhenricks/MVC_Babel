const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: process.env.NODE_ENV || "development",
    entry: ['./Scripts/src/index.js'], //where webpack looks to do the thing. Make this be the base of your JS stuff. 
    output: {
        filename: 'bundle.js', //output file name
        path: path.resolve(__dirname, './Scripts/build') //where to dump the output file
    },
    //This tells webpack to use babel to transpile stuff
    module: {
        rules: [{
            test: /\.js$/, //look at all .js files
            exclude: /node_modules/, //dont look in node_modules
            loader: 'babel-loader' //use babel-loader plugin to do the ting
        }]
    },
};