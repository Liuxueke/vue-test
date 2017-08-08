const webpack = require("webpack");
const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  devtool: "eval-source-map",
  entry: "./src/main.js",
  output: {
    filename: "build[hash].js",
    path: path.resolve(__dirname,"../dist"),
    publicPath: "/"
  },
  resolve: {
    extensions: [".js", ".json", ".vue", ".css"],
    alias: {
      "vue$": "vue/dist/vue.esm.js" // 在 webpack 1 中使用 'vue/dist/vue.common.js'
    }
  },
  module: {
    loaders: [
      { test: /\.vue$/, loader: "vue-loader" },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.(png|jpeg|jpg|gif|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10000
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader"
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new htmlWebpackPlugin({
      title: "my app",
      filename: "index.html",
      template: "index.html",
      inject: true
    }),
    new ExtractTextPlugin("vue.css"),
    new BundleAnalyzerPlugin()
  ],
  devServer: {
    contentBase: path.resolve(__dirname,"../dist"),
    colors: true,
    historyApiFallback: true,
    inline: true
  }
};