const path = require("path");

module.exports = {
  entry: {
    index: "./src/index.js",
    search: "./src/search.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    // filename: "bundle.js", //单个出口
    filename: "[name].js", //多个出口
  },
  mode: "production",
  resolve: {
    extensions: [".js", ".jsx"],
  },
  // 配置loader的
  module: {
    rules: [
      {
        test: "/.(js|jsx)$/",
        use: "babel-loader",
      },
    ],
  },
};
