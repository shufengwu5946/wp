const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },
  // mode: "development",
  // optimization: {
  //   usedExports: true
  // },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
        // sideEffects: true
      }
    ]
  },
  mode: "production"
};
