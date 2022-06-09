const paths = require("./path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const miNiCssPlugin = require("mini-css-extract-plugin");
const mizeCss = require("css-minimizer-webpack-plugin");

module.exports = function (options) {
  return {
    mode: options.mode,
    entry: paths.appSrc,
    output: {
      path: paths.appBuild,
      publicPath: "./",
      // 设置文件名
      filename: "[name]_[chunkhash:8].js",
    },
    target: "web",
    cache: {
      // 使用持久化缓存
      type: "filesystem", //memory:使用内容缓存 filesystem：使用文件缓存
    },
    devtool: false,
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "babel-loader",
              options: {
                presets: ["@babel/preset-env", "@babel/preset-react"],
              },
            },
          ],
        },
        {
          test: /\.css$/,
          use: [
            miNiCssPlugin.loader,
            "css-loader",
            "postcss-loader",
            // 这是不拆成写postcss.config.js的形式
            // {
            //   loader: "postcss-loader",
            //   options: {
            //     postcssOptions: {
            //       plugins: [require("autoprefixer")],
            //       // plugins: ["postcss-preset-env"],
            //     },
            //   },
            // },
          ],
        },
        {
          test: /\.(png|jpg|jpeg|gif|svg)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[name]_[hash:8].[ext]",
              },
            },
          ],
        },
      ],
    },
    devServer: options.devServer,
    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html",
      }),
      new miNiCssPlugin({
        filename: "[name]_[contenthash:8].css",
      }),
      new mizeCss(),
      ...options.plugins,
    ],
    stats: options.stats, // 打包日志发生错误和新的编译时输出
  };
};
