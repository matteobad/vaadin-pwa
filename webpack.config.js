// https://medium.com/@jontorrado/working-with-webpack-4-es6-postcss-with-preset-env-and-more-93b3d77db7b2

const path = require("path");
const webpackMerge = require("webpack-merge");

const loaders = require("./config/webpack/loaders");
const plugins = require("./config/webpack/plugins");
const modeConfig = require(`./config/webpack/presets/webpack.${env.mode}.js`);
const loadPresets = require("./config/webpack/load-presets");

module.exports = ({ mode, presets }) => {
  return webpackMerge(
    {
      mode,
      output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[chunkhash:8].js"
      },
      module: {
        rules: [loaders.JSLoader, loaders.ESLintLoader]
      },
      plugins: [
        plugins.CleanWebpackPlugin,
        plugins.ProgressWebpackPlugin,
        plugins.HtmlWebpackPlugin,
        plugins.CopyWebpackPlugin
      ]
    },
    modeConfig({ mode, presets }),
    loadPresets({ mode, presets })
  );
};
