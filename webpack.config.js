const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const development = process.env.NODE_ENV === 'develpment';

module.exports = {
	entry: {
		'polyfills': './polyfills.ts',
		'vendor': './vendor.ts',
		'app': './src/main.ts'
	},
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: "[name].js",
		chunkFilename: '[id].chunk.js'
	},
	devtool: development ? 'cheap-eval-source-map' : 'source-map',
	resolve: {
	  extensions: ['.ts', '.js']
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				exclude: path.resolve(__dirname, 'node_modules'),
				loader: 'awesome-typescript-loader',
				options: { 
					configFileName: path.resolve(__dirname, 'tsconfig.json') 
				}
			},
			{
				test: /\.scss$/,
				loader: 'sass-loader'
			}
		]	
	},
	plugins: [
		new webpack.ContextReplacementPlugin(
	  		// The (\\|\/) piece accounts for path separators in *nix and Windows
	  		/angular(\\|\/)core(\\|\/)@angular/,
	  		path.resolve(__dirname, 'src'), // location of your src
	  		{} // a map of your routes
		),
		new webpack.optimize.CommonsChunkPlugin({
			name: ['app', 'vendor', 'polyfills']
		}),
		new HtmlWebpackPlugin({
			template: './public/index.html'
		}),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('development')
		})
	],
	devServer: {
		contentBase: path.resolve(__dirname, 'public'),
		host: "localhost",
		port: 3000
	}
};