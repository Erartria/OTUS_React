const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
    alias: {
      types: path.resolve(__dirname, "src/types"),
      components: path.resolve(__dirname, "src/components"),
      "@": path.resolve(__dirname, "src"),
    },
  },
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "./index.js",
    publicPath: "/",
    // https://github.com/GoogleChromeLabs/worker-plugin/issues/20
    globalObject: "(typeof self!='undefined'?self:global)",
  },
  module: {
    rules: [
      {
        test: /\.(c|s)a?ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
        exclude: /\.module\.s([aс])ss$/,
      },
      {
        test: /\.(c|s)a?ss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                localIndentName: "[name]_[local]_[hash:64:5]",
              },
            },
          },
          "sass-loader",
        ],
        include: /\.module\.(c|s)a?ss$/,
      },

      {
        test: /\.worker\.(ts|js)$/,
        use: { loader: "worker-loader" },
      },
      {
        test: /\.(js|ts)x?$/,
        loader: require.resolve("babel-loader"),
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
