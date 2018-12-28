const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const srcUrl = 'localhost:8082';

module.exports = {
	mode: 'development',
	entry: './index.js',
	output: {
		path: path.resolve((__dirname, 'Dist/')),
		filename: 'static/js/index.js'
	},
	devtool: 'inline-source-map',
	devServer: {
		port: 8000,
		contentBase: './Dist/',
		proxy: {
			'*': {
				target: srcUrl,
				bypass() {
					return 'index.html';
				}
			}
		}
	},
	resolve: { extensions: ['.js', '.jsx', '.css'] },
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							'@babel/react',
							'@babel/env',
							{
								plugins: [
									'@babel/plugin-proposal-class-properties',
									'@babel/plugin-syntax-dynamic-import',
									'@babel/plugin-transform-react-jsx',
									'react-css-modules'
								]
							}
						],
					}
				}
			},
			{
				test: /\.(png|jpg)$/,
				loader: 'url-loader?limit=20000'
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader',
							query: {
								modules: true,
								localIdentName: '[name]_[local]__[hash:base64:5]',
								importLoaders: 1,
							}
						}
					],
				})
			},
			{
				test: /\.svg$/,
				loader: 'url-loader',
				options: {
					limit: 10000,
				},
			},
		],
	},
	plugins: [
		new ExtractTextPlugin({
			filename: 'static/css/style.css'
		}),
		new HtmlWebpackPlugin({ template: './index.html' }),
		new CopyWebpackPlugin([
			{
				from: './node_modules/font-awesome/css/font-awesome.min.css',
				to: 'static/css/'
			},
			{
				from: './node_modules/font-awesome/fonts/',
				to: 'static/fonts/'
			},
			{
				from: './node_modules/bootstrap/dist/css/bootstrap-reboot.min.css',
				to: 'static/css'
			}
		])
	]
};
