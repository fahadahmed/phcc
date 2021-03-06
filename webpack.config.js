const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [
  {
    mode: 'development',
    entry: './src/index.tsx',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'public'),
    },
    module: {
      rules: [
        { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
        { test: /\.jsx$/, exclude: /node_modules/, loader: 'babel-loader' },
        { test: /\.ts$/, exclude: /node_modules/, loader: 'babel-loader' },
        { test: /\.tsx$/, exclude: /node_modules/, loader: 'babel-loader' },
        {
          test: /\.(?:ico|gif|png|jpg|jpeg|webp|svg)$/,
          use: {
            loader: 'file-loader',
            options: {
              name: './images/[hash].[ext]',
            },
          },
        },
      ],
    },
    resolve: { extensions: ['.ts', '.tsx', '.js', '.jsx'] },
    devtool: 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      compress: true,
      port: 3600,
      open: true,
      hot: true,
      historyApiFallback: true,
      host: '0.0.0.0',
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Power House Cricket Club | Season Stats 2020-21 | Melbourne Australia',
        template: './src/index.html',
        minify: {
          collapseWhitespace: true,
        },
      }),
    ],
  },
];
