const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path')

module.exports = {
    mode:'development',
    entry:'./src/index.js',
    output:{
       path: path.resolve(__dirname,'dist'),
       filename:'bundle.js'
    },
    devServer:{
        static:path.join(__dirname,'dist'),
        open:true
    },
    plugins:[
        new HtmlWebpackPlugin({
            title: 'sven-monitor',
            template: 'public/index.html',
            inject: true
        }),
        new CleanWebpackPlugin()
    ]
}