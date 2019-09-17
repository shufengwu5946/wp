const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: { app: "./src/index.js", print: "./src/print.js" },
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist"
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
    // publicPath: "/"
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: '"development"'
      }
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "loader"
    })
  ],
  module: {
    rules: [
      {
        test: /\.txt$/i,
        use: "raw-loader"
      },
      {
        test: /target-file.js$/,
        use: [
          {
            loader: `val-loader`
          }
        ]
      },
      // {
      //   test: /\.(png|jpg|gif)$/,
      //   use: [
      //     {
      //       loader: "url-loader",
      //       options: {
      //         limit: 8192
      //       }
      //     }
      //   ]
      // }
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              // string
              name: "[hash].[ext]",
              // Function
              // name(file) {
              //   console.log("name(file)");
              //   console.log(process.env.NODE_ENV);

              //   if (process.env.NODE_ENV === "development") {
              //     console.log("name(file) dev return");

              //     return "[path][name].[ext]";
              //   }

              //   return "[hash].[ext]";
              // }

              // String
              // outputPath: "assets",

              // Function
              outputPath: (url, resourcePath, context) => {
                // `resourcePath` is original absolute path to asset
                // `context` is directory where stored asset (`rootContext`) or `context` option

                // To get relative path you can use
                const relativePath = path.relative(context, resourcePath);

                console.log(context);
                console.log(resourcePath);
                console.log(relativePath);
                console.log(url);

                if (/imgs/.test(relativePath)) {
                  return `image_output_path/${url}`;
                }

                return `output_path/${url}`;
              },

              // String
              // publicPath: "assets",
              // Function
              outputPath: (url, resourcePath, context) => {
                // `resourcePath` is original absolute path to asset
                // `context` is directory where stored asset (`rootContext`) or `context` option

                // To get relative path you can use
                const relativePath = path.relative(context, resourcePath);

                // console.log(context);
                // console.log(resourcePath);
                // console.log(relativePath);
                // console.log(url);

                if (/imgs/.test(relativePath)) {
                  return `image_output_path/${url}`;
                }

                return `output_path/${url}`;
              },
              // context: "./src/imgs"
              emitFile: true,
              regExp: /([0-9]+)\.jpg$/
            }
          }
        ]
      },

      //???
      // {
      //   test: /\.html$/,
      //   use: [
      //     { loader: "file-loader" },
      //     { loader: "extract-loader" },
      //     { loader: "ref-loader" }
      //   ]
      // }
      {
        test: /\.jso$/,
        loader: "json-loader"
      },
      {
        // 使所有以 .json5 结尾的文件使用 `json5-loader`
        test: /\.json5$/,
        loader: "json5-loader"
      },
      {
        // 使所有以 .json5 结尾的文件使用 `json5-loader`
        test: /\.cson$/,
        loader: "cson-loader"
      },
      // {
      //   test: /\.css$/,
      //   use: [
      //     { loader: "style-loader/url", options: { sourceMap: true } },
      //     { loader: "file-loader" }
      //   ]
      // }
      {
        test: /\.css$/,
        exclude: /\.useable\.css$/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              modules: true
            }
          }
        ]
      },
      {
        test: /\.useable\.css$/,
        use: [
          {
            loader: "style-loader/useable"
          },
          {
            loader: "css-loader"
          }
        ]
      }
    ]
  }
};
