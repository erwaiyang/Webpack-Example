var path = require('path');
var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
var node_modules_dir = path.resolve(__dirname, 'node_modules');

var config = {
	entry: {
		app: path.resolve(__dirname, 'app/main.js'),
		vendors: ['react', 'react-dom']
	},
	resolve: {
		extensions: ['', '.js', 'jsx']
	},
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js'
	},
	plugins: [
		new CommonsChunkPlugin('vendors', 'vendor.js')
	],
	module: {    
		loaders: [{
			test: /\.jsx?$/, 
			exclude: /node_modules/, 
			loader: 'babel', 
			query:{
				presets:['react']
			}
		}]
	}
};

module.exports = config;