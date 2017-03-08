const path = require("path");
const { EnvironmentPlugin, ProvidePlugin, LoaderOptionsPlugin } = require("webpack");
const { AureliaPlugin } = require("aurelia-webpack-plugin");

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
    modules: ["example", "node_modules"]
  },

  module: {                                   // (4)
    rules: [
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
    new AureliaPlugin(),                       // (5)  
  ]
}

module.exports = config;
