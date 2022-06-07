// 通过axios来获取结果

const axios = require("axios");
axios.defaults.headers[""];

axios.interceptors.response.use((res) => {
  return res.data;
});

async function fetchRepoList() {
  // 可以1通过配置文件 拉去不同的仓库 妈的限流了 登录一下
  return axios.get("https://api.github.com/repos/zhaoyuanmeng/base");
}

async function fetchTagsList(repo) {
  // 可以1通过配置文件 拉去不同的仓库
  return axios.get(`https://api.github.com/repos/zhaoyuanmeng/${repo}/tags`);
}

module.exports = {
  fetchRepoList,
  fetchTagsList,
};
