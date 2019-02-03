const { resolve } = require("path");

const JSLoader = {
  test: /\.js$/,
  exclude: /node_modules/,
  use: {
    loader: "babel-loader",
    options: {
      plugins: ["@babel/plugin-syntax-dynamic-import"],
      presets: ["@babel/preset-env"]
    }
  }
};

const ESLintLoader = {
  test: /\.js$/,
  enforce: "pre",
  exclude: /node_modules/,
  use: {
    loader: "eslint-loader",
    options: {
      configFile: resolve(__dirname, "../.eslintrc")
    }
  }
};

const CSSLoader = {
  test: /\.css$/,
  exclude: /node_modules/,
  use: [
    {
      loader: "style-loader"
    },
    {
      loader: "css-loader",
      options: { importLoaders: 1 }
    },
    {
      loader: "postcss-loader",
      options: {
        config: {
          path: __dirname + "../postcss.config.js"
        }
      }
    }
  ]
};

module.exports = {
  JSLoader: JSLoader,
  ESLintLoader: ESLintLoader,
  CSSLoader: CSSLoader
};
