var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var merge = require('webpack-merge');
var pkg = require('./package.json');
var Clean = require('clean-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var autoprefixer = require('autoprefixer');

const TARGET = process.env.npm_lifecycle_event;

const PATHS = {
    app: path.join(__dirname, 'app'),
    build: path.join(__dirname, 'build')
};

process.env.BABEL_ENV = TARGET;

const common = {
    entry: PATHS.app,
    output: {
        path: PATHS.build,
        filename: '[name].js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        preLoaders: [
            {
                test: /\.jsx?$/,
                loaders: ['eslint'],
                include: PATHS.app
            }
        ],
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['babel'],
                include: PATHS.app
            }, {
                test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
                loader: 'url-loader?limit=30000&name=assets/[name].[hash].[ext]',
                include: PATHS.app
            }
        ]
    },

    plugins: [
        new HtmlwebpackPlugin({
            template: 'node_modules/html-webpack-template/index.html',
            title: 'LOS FELIZ',
            mobile: true,
            appMountId: 'app'
        })
    ]
};

if (TARGET === 'start' || !TARGET) {
    module.exports = merge(common, {
        devtool: 'eval-source-map',
        devServer: {
            historyApiFallback: true,
            hot: true,
            inline: true,
            progress: true,
            stats: 'errors-only',
            host: process.env.HOST,
            port: process.env.PORT
        },
        module: {
            loaders: [
                {
                    test: /\.scss$/,
                    loaders: ["style",
                        "css",
                        'postcss',
                        "sass"
                    ],
                    include: PATHS.app
                }
            ]
        },
        postcss: [autoprefixer({browsers: "> 0%"})],
        plugins: [
            new webpack.HotModuleReplacementPlugin()
        ]
    });
}

if (TARGET === 'build') {
    module.exports = merge(common, {
        entry: {
            app: PATHS.app,
            vendor: Object.keys(pkg.dependencies).filter(
                function (v) {
                    return v !== 'alt-utils';
                }
            )
        },
        output: {
            paths: PATHS.build,
            filename: '[name].[chunkhash].js',
            chunkFilename: '[chunkhash].js'
        },
        module: {
            loaders: [
                {
                    test: /\.scss$/,
                    loader: ExtractTextPlugin.extract(["css!postcss!sass"]),
                    include: PATHS.app
                }
            ]
        },
        postcss: [autoprefixer({browsers: "> 0%"})],
        plugins: [
            new Clean([PATHS.build]),
            new ExtractTextPlugin('styles.[chunkhash].css'),
            new webpack.optimize.CommonsChunkPlugin({
                names: ['vendor', 'manifest']
            }),
            new webpack.DefinePlugin(
                {
                    'process.env.NODE_ENV': JSON.stringify('production')
                }
            ),
            new webpack.optimize.UglifyJsPlugin(
                {
                    compress: {
                        warnings: false
                    }
                }
            )
        ]
    });
}