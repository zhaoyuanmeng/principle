const path = require("path");
const Creator = require("./creator");
const fs = require("fs-extra"); //fs不太靠谱 不支持promise 使用fs-extra
const Inquirer = require("inquirer");
// 创建模块
module.exports = async function (projectName, options) {
  // 1. 创建项目（考虑同名问题需要覆盖）
  const cwd = process.cwd(); // 获取工作目录
  const targetDir = path.join(cwd, projectName); //获取文件完整的路径
  if (fs.existsSync(targetDir)) {
    if (options.force) {
      await fs.remove(targetDir);
    } else {
      // 提示用户是否去欸的那个要覆盖
      let { action } = await Inquirer.prompt([
        {
          name: "action", //于结构出的对象名一样
          type: "list", //类型非常多
          message: "选择一个动作把",
          choices: [
            { name: "Overwrite", value: "overwrite" },
            { name: "离开", value: false },
          ],
        },
      ]);
      switch (action) {
        case false:
          return;
        case "overwrite":
          console.log("\r\n当前正在删除中");
          await fs.remove(targetDir);
          console.log("\r\n删除成功");
          break;
      }
    }
  }
  // 创建项目
 const creator =  new Creator(projectName,targetDir)
 creator.create()
};
