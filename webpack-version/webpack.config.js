const webpack = require("webpack");
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");

const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");

const config = {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.ts(x)?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
      //
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          "file-loader",
          {
            loader: "image-webpack-loader",
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65,
              },
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: "65-90",
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
              webp: {
                quality: 75,
              },
            },
          },
        ],
      },
      {
        test: /\.html$/i,
        type: "asset/resource",
      },
    ],
    // loaders: [
    // ],
  },

  plugins: [
    new CopyPlugin({
      patterns: [
        {
          context: path.resolve(__dirname, "dist"),
          from: "../src/index.html",
        },
        { from: "src/Images", to: "Images" },
        // { from: "src/Assets", to: "Assets" },
      ],
    }),
  ],

  resolve: {
    extensions: [
      ".tsx",
      ".ts",
      ".js",
      ".scss",
      ".gif",
      ".png",
      ".jpg",
      ".jpeg",
      ".svg",
    ],
  },

  devtool: "source-map",

  devServer: {
    static: "./dist",
  },
  optimization: {
    minimize: true,
    minimizer: [`...`, new HtmlMinimizerPlugin(), new CssMinimizerPlugin()],
  },
};

module.exports = config;
