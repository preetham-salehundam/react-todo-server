var path = require('path');
var config = {

	entry:path.resolve(__dirname,'src')+"/app/index.js",

	output:{

		path:path.resolve(__dirname,'dist')+"/app/",
		filename:'bundle.js',
		publicPath:"/app/"
	},

	module:{
		loaders:[

					{
						test:/\.js$/,
						exclude : /node_modules/,
						include: path.resolve(__dirname,"src"),
						loader:'babel-loader',
						query :{
							presets : ['es2015','react']
						}
					},
					{
						test : /\.css$/,
						loader : 'style-loader!css-loader'
					}

		]
	}
}

module.exports = config;
