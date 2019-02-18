const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: "development",
  entry: {
    app: "./src/component/index.js"
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  plugins: [
//    new CleanWebpackPlugin(['dist/']),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/component/index.html'
    })
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
      },
      {
        test: /\.scss$/,
        use: [
            "style-loader", // creates style nodes from JS strings
            "css-loader", // translates CSS into CommonJS
            "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
         'file-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.html$/, 
        use: {
          loader: 'html-loader'
        }
      }
    ]
  }
};