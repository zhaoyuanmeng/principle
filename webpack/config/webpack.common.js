const paths = require("./path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = function (options) {
  return {
    mode: options.mode,
    entry: paths.appSrc,
    output: {
      path: paths.appBuild,
      publicPath: "/",
    },
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
      ],
    },
    devServer: {},
    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html",
      }),
      ...options.plugins,
    ],
    stats: options.stats, // 打包日志发生错误和新的编译时输出
  };
};
