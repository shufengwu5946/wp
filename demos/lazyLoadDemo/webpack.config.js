const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: { app: "./src/index.js" },
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist"
  },
  output: {
    filename: "[name].bundle.js",
    chunkFilename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/"
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "管理输出"
    })
  ]
};
