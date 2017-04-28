const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry : {
		app : [
			'./src/main.js',
			'./src/main.scss'
		]
	},
	output : {
		path : path.resolve(__dirname,'./public/dist'),
		// filename : '[name].[chunkhash].js'
		filename : '[name].js'
	},
	module: {
	  rules : [
	  	{
	  		test : /\.s[ac]ss$/,
	  		use : ExtractTextPlugin.extract({
	  			use : ['css-loader','sass-loader'],
	  			fallback : 'style-loader'
	  		})
	  	},
	  	{
	  		test : /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
	  		loader : 'file-loader',
	  		options : {
	  			name : 'images/[name].[hash].[ext]'
	  		}
	  	},
	  	{ 
	  		test: /\.js$/, 
	  		exclude: /node_modules/, 
	  		loader: "babel-loader" 
	  	}
	  ]
	},
	plugins : [
		new CleanWebpackPlugin(['public/dist'], {}),
		new ExtractTextPlugin('[name].css'),
		new HtmlWebpackPlugin({
			template : 'app/views/master.html'
		})
	]
} 