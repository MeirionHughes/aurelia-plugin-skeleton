const path = require("path");
const { EnvironmentPlugin, ProvidePlugin, LoaderOptionsPlugin, optimize } = require("webpack");
const { AureliaPlugin } = require("aurelia-webpack-plugin");
const BabiliPlugin = require("babili-webpack-plugin");

const autoprefixer = require("autoprefixer");

let config = {
  entry: { "main": "aurelia-bootstrapper" },  // (1)
  output: {                                   // (2)
    path: path.resolve(__dirname, ""),
    publicPath: "",
    filename: "example.js",
    chunkFilename: "example.js",
  },

  resolve: {
    alias: {
      "my-plugin": path.resolve("src/"),
      "my-plugin$": path.resolve("src/index.ts")
    },                             // (3)
    extensions: [".ts", ".js"],
    modules: ["example", "node_modules"],
  },

  module: {                                   // (4)
    rules: [
      {
        test: /\.scss$/i, use: ["style-loader",
          "css-loader",
          "postcss-loader",
          {
            loader: "sass-loader"
          }]
      },
      {
        test: /\.html$/i,
        use: [
          "html-loader"
        ]
      },
      { test: /\.ts$/i, loaders: ['ts-loader'], exclude: 'node_modules' },
    ]
  },

  plugins: [
    new AureliaPlugin({
      dist: 'es2015',
      features: { svg: false, unparser: false, polyfills: "esnext" },
    }),
    new LoaderOptionsPlugin(
      {
        test: /\.scss$/,
        minimize: false,
        debug: false,
        context: __dirname,
        options: {
          postcss: [autoprefixer({ browsers: ['last 2 versions'] })]
        }
      }
    ),
    new BabiliPlugin(),
  ]
}
module.exports = config;