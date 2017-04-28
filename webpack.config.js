const webpack = require('webpack');
const path = require('path');

module.exports = {
	entry : {
		app : [
			'./src/main.js'
		]
	},
	output : {
		path : path.resolve(__dirname,'./public/dist'),
		// filename : '[name].[chunkhash].js'
		filename : '[name].js'
	},
	module: {
	  rules: [
	    { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
	  ]
	}
} 