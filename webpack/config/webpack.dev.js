module.exports = require("./webpack.common")({
  mode: "development",
  plugins: [],
  devServer: {},
  stats: "errors-only", //只在发生错误或有新的编译时输出
});
