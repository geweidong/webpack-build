const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   mode: 'development',
  // JavaScript 执行入口文件
  entry: './src/main.js',
  output: {
    // 把所有依赖的模块合并输出到一个 bundle.js 文件
    filename: 'bundle.js',
    // 输出文件都放到 dist 目录下
    path: path.resolve(__dirname, './dist'),
    libraryTarget: "umd"
  },
  module: {
  	rules: [
	  	{
	        test: /\.m?js$/,
	        exclude: /node_modules/,
	        use: {
	          loader: 'babel-loader',
	        },
	    },
  	]
  },
  plugins: [new HtmlWebpackPlugin()]
};