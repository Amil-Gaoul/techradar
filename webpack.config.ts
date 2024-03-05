import path from 'path';
import webpack from 'webpack';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

type Mode = 'production' | 'development';

interface Environment {
    mode: Mode;
    port: number;
}

export default (env: Environment) => {
    const isDev: boolean = env.mode === 'development';
    const isProd: boolean = env.mode === 'production';

    const config: webpack.Configuration = {
        mode: env.mode ?? 'development',
        entry: path.resolve(__dirname, 'src', 'index.ts'),
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].[contenthash].js',
            clean: true
        },
        module: {
            rules: [
                {
                    test: /\.(scss|css)$/,
                    use: [isDev ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
                },
                {
                    test: /\.ts$/,
                    use: 'babel-loader',
                    exclude: /node_modules/
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'public', 'index.html'),
                minify: {
                    collapseWhitespace: true,
                    removeComments: true,
                    removeRedundantAttributes: true,
                    useShortDoctype: true
                }
            }),
            isProd &&
                new MiniCssExtractPlugin({
                    filename: 'styles/[name].[contenthash:8].css',
                    chunkFilename: 'styles/[name].[contenthash:8].css'
                })
        ].filter(Boolean),
        devtool: isDev ? 'inline-source-map' : false,
        devServer: isDev
            ? {
                  watchFiles: path.resolve(__dirname, 'src'),
                  open: true,
                  compress: true,
                  hot: true,
                  port: env.port ?? 9000
              }
            : undefined
    };
    return config;
};
