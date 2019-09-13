const webpack = require('webpack');
const path = require('path');


const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// production mode only
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

require('dotenv').config();

const devMode = process.env.NODE_ENV === 'dev';

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
		filename: 'js/[name].js',
		chunkFilename: '[name].bundle.js',
		publicPath: '/'
	},

	optimization: {
		minimize: !devMode
	},

	devtool: 'inline-source-map',

	devServer: {
		hot: true,
		port: 3000,
		contentBase: './Dist/',
		historyApiFallback: true,
	},

	resolve: {
		extensions: ['.js', '.jsx', '.json', '.css'],
		alias: {
			Assets: path.resolve(__dirname, 'assets/'),
			Actions: path.resolve(__dirname, 'src/actions/'),
			Components: path.resolve(__dirname, 'src/components/'),
			Containers: path.resolve(__dirname, 'src/containers/'),
			Reducers: path.resolve(__dirname, 'src/reducers/'),
			Routes: path.resolve(__dirname, 'src/routes/'),
		},
		modules: [path.join(__dirname, 'src'), 'node_modules']
	},

	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
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
				test: /\.(svg|png|jpg|woff|woff2|eot|ttf|otf)$/,
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
