const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');

module.exports = {
    mode: process.env.NODE_ENV || "development",
    entry: ['./Scripts/src/index.js', './Content/Site.scss'], //where webpack looks to do the thing. Make this be the base of your JS stuff. Also looks at base .scss file and adds all the css to the exported .js file. Will be extracted later. 
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
        },
        {
            test: /\.scss$/, //looks at all .scss files
            exclude: /node_modules/, //excludes node modules folder
            use: [
                MiniCssExtractPlugin.loader, //extracts the css from the js file
                "css-loader", //creates the css file
                "postcss-loader", //runs autoprefixer (defined in the pluigin below)
                "sass-loader" //compiles the sass
            ]
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: './Content/[name].bundle.css'
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [
                    autoprefixer()
                ]
            }
        })
    ]
};