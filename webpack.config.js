const webpack = require('webpack');
const path = require('path');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// production mode only
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

require('dotenv').config();


const srcUrl = 'localhost:8082';
const devMode = process.env.NODE_ENV === 'development';

const usedPlugins = [
	new webpack.HotModuleReplacementPlugin(),
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
			from: './node_modules/bootstrap/dist/css/bootstrap.min.css',
			to: 'static/css'
		},
		{
			from: './public/',
			to: 'static/'
		}
	])
];

module.exports = {
	mode: 'development',
	entry: './index.js',
	output: {
		path: path.resolve(__dirname, 'Dist/'),
		filename: 'js/index.js'
	},
	optimization: {
		minimize: !devMode
  },
	stats: 'minimal',
	devtool: 'inline-source-map',
	devServer: {
		hot: true,

		port: 8000,
		contentBase: './Dist/',
		proxy: {
			'/pages/*': {
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
					loader: 'babel-loader'
				}
			},
			{
				test: /\.css$/,
				use: [
					(devMode 
						? 'style-loader' 
						: MiniCssExtractPlugin.loader
					),
					{
						loader: 'css-loader',
						options: {
							modules: {
								mode: 'local',
								localIdentName: '[name]_[local]__[hash:base64:5]',
							},
							url: true,
						}
					}
				],
			},
			{
				test: /\.(svg|png|jpg)$/,
				loader: 'url-loader',
				options: {
					limit: 10000,
				},
			},
		],
	},
	plugins: devMode 
		? usedPlugins 
		: [
			new MiniCssExtractPlugin({
				filename: '[name]_[hash].css',
				chunkFilename: '[id]_[hash].css',
			}),
			...usedPlugins,
		]
};
