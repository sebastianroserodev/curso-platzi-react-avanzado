const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports={
	output:{
		fileName:app.bundle.js
	},
	plugins:[
		new HtmlWebpackPlugin()
	]
}