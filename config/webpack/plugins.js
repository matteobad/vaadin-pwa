const path = require("path");
const _CleanWebpackPlugin = require("clean-webpack-plugin");
const _ProgressWebpackPlugin = require("webpack").ProgressPlugin;
const _StyleLintPlugin = require("stylelint-webpack-plugin");
const _HtmlWebpackPlugin = require("html-webpack-plugin");
const _CopyWebpackPlugin = require("copy-webpack-plugin");
const _WorkboxPlugin = require("workbox-webpack-plugin");

const webcomponentsjs = "./node_modules/@webcomponents/webcomponentsjs";
const polyfills = [
  {
    from: path.resolve(`${webcomponentsjs}/webcomponents-*.{js,map}`),
    to: "vendor",
    flatten: true
  },
  {
    from: path.resolve(`${webcomponentsjs}/bundles/*.{js,map}`),
    to: "vendor/bundles",
    flatten: true
  },
  {
    from: path.resolve(`${webcomponentsjs}/custom-elements-es5-adapter.js`),
    to: "vendor",
    flatten: true
  }
];
const assets = [
  {
    from: "src/img",
    to: "img/"
  }
];

const CleanWebpackPlugin = new _CleanWebpackPlugin(["dist"]);
const ProgressWebpackPlugin = new _ProgressWebpackPlugin();
const StyleLintPlugin = new _StyleLintPlugin({
  configFile: path.resolve(__dirname, ".stylelintrc"),
  context: path.resolve(__dirname, "../src"),
  files: "**/*.css",
  failOnError: false,
  quiet: false
});
const HtmlWebpackPlugin = new _HtmlWebpackPlugin({
  filename: "index.html",
  template: "./src/index.html",
  minify: {
    collapseWhitespace: true,
    minifyCSS: true,
    minifyJS: true
  }
});
const CopyWebpackPlugin = new _CopyWebpackPlugin([...polyfills, ...assets], {
  ignore: [".DS_Store"]
});
const WorkboxPlugin = new _WorkboxPlugin.InjectManifest({
  swSrc: "./src/sw.js"
});

module.exports = {
  CleanWebpackPlugin: CleanWebpackPlugin,
  ProgressWebpackPlugin: ProgressWebpackPlugin,
  StyleLintPlugin: StyleLintPlugin,
  HtmlWebpackPlugin: HtmlWebpackPlugin,
  CopyWebpackPlugin: CopyWebpackPlugin,
  WorkboxPlugin: WorkboxPlugin
};
