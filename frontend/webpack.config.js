const webpack = require('webpack');
const path = require('path');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// production mode only
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

require('dotenv').config();


const reactRouterUrl = 'localhost:8082';
const devMode = process.env.NODE_ENV === 'development';

const usedPlugins = [
	new webpack.HotModuleReplacementPlugin(),

	new HtmlWebpackPlugin({
		template: './index.html'
	}),

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
		path: path.resolve(__dirname, 'Dist'),
		filename: 'js/index.js',
		publicPath: '/'
	},

	optimization: {
		minimize: !devMode,

		/* splitChunks: {
			chunks: 'all',

			minChunks: 1,

			maxAsyncRequests: 10,
			maxInitialRequests: 10,

			minSize: 30000,
			maxSize: 0,

			automaticNameDelimiter: '~',
			automaticNameMaxLength: 30,

			name: true,

			cacheGroups: {
				vendors: {
					test: /[\\/]node_modules[\\/]/,
					priority: 10,
					minChunks: 3,
				},

				default: {
					minChunks: 2,
					priority: -20,
					reuseExistingChunk: true
				}
			}
		} */
	},

	stats: 'minimal',

	devtool: 'inline-source-map',

	devServer: {
		historyApiFallback: true,
		contentBase: './Dist/',
		hot: true,
		port: 8000,

		proxy: {
			'/pages/': {
				target: reactRouterUrl,
				bypass(req) {
					if (req.originalUrl.indexOf('static') === -1) {
						return 'index.html';
					}
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
