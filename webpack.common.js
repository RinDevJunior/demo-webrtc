const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CleanWebPackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
	entry: {
		main: './src/index.js'
	},
	output: {
		filename: '[name].[hash].js',
		path: path.resolve('./build')
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: ['node_modules'],
				use: [
					{
						loader: 'babel-loader',
						options: {
							cacheDirectory: true
						}
					}
				]
			},
			{
				test: /\.s(a|c)ss$/,
				exclude: ['node_modules'],
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader'
					},
					{
						loader: 'sass-loader'
					}
				]
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader'
					}
				]
			}
		]
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: './public/index.html'
		}),
		new CleanWebPackPlugin(['build']),
		new Dotenv(),
		new CopyWebpackPlugin([
			{
				from: 'public/assets',
				to: 'public/assets/[name].[ext]',
				toType: 'template'
			}
		])
	]
};
