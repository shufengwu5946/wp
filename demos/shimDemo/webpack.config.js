const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: { index: "./src/index.js", polyfills: "./src/polyfills.js" },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: require.resolve("./src/showAlert.js"),
        use: "imports-loader?this=>window"
      },
      {
        test: require.resolve("./src/globals.js"),
        use: "exports-loader?file,parse=helpers.parse"
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      // _: "lodash"
      joi: ["lodash", "join"]
    })
  ]
};
