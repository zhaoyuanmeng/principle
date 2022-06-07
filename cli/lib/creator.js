const { fetchRepoList, fetchTagsList } = require("./request");
const Inquirer = require("inquirer");
const downLoad = require("download-git-repo"); //不支持promise
const ora = require("ora");
const util = require("util");
const path = require("path");

// 缓冲time秒
async function sleep(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}

async function wrapLoading(fn, msg, ...args) {
  const spinner = ora(msg);
  // 开始加载
  spinner.start();
  try {
    let repo = await fn(...args);
    //  加载成功
    spinner.succeed();
    return repo;
  } catch (error) {
    spinner.fail("重新抓取");
    await sleep();
    return wrapLoading(fn, msg, ...args);
  }
}

class Creator {
  constructor(projectName, targetDir) {
    this.projectName = projectName;
    this.targetDir = targetDir;
    // 此时就是promise方法
    this.downloadGitRepo = util.promisify(downLoad);
  }
  async fetchRepo() {
    let repos = await wrapLoading(fetchRepoList, "waiting...");
    // let repos = await fetchRepoList();
    if (!repos) return;
    // 我这个仓库只有一个文件夹 所以他是个对象不是一个list
    // repos = repos.map(function (repo) {
    //   return repo.name;
    // });
    let { repo } = Inquirer.prompt({
      name: "repo",
      type: "list",
      choices: [repos.name],
      message: "请选择模板名字",
    });
    return repo;
  }
  async fetchTag(repo) {
    let tags = await wrapLoading(fetchTagsList, "waiting...", repo);
    let { tag } = Inquirer.prompt({
      name: "tag",
      type: "list",
      choices: [tags.name],
      message: "请选择模板名字",
    });
    return tag;
  }
  async downLoad(repo, tag) {
    // 1 拼接出路径
    // 例子 zhaoyuanmeng/base/#v1.0.1
    let request = `zhaoyuanmeng/${repo}/#${tag}`;
    // 2 把路径下载到某个路径上（后续可以增加缓存功能）稍后可以使用ejs handlerbar 去渲染模板最后生成结果再写入
    await this.downloadGitRepo(
      request,
      path.resolve(process.cwd(), `${repo}@${tag}`)
    );
    // return this.targetDir;
  }
  // 真实创建
  async create() {
    // 采用远程拉取模板的方式 github
    // 1.先去拉取当前组织下的模板
    // let repo = await this.fetchRepo();

    // 2. 通过模板找到版本号
    // let tag = await this.fetchTag(repo);

    // 3.下载
    // await this.downLoad(repo, tag);
    // 仅供测试玩
    await this.downLoad("base", "v1.0");
    // 4 编译模板
  }
}

module.exports = Creator;
