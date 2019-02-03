const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = () => ({
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    // Copy empty ServiceWorker so install doesn't blow up
    new CopyWebpackPlugin(["src/service-worker.js"])
  ],
  devtool: "source-map"
});
