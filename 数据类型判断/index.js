/*
 *@Author: 赵元达
 *@Date: 2022-05-06 09:11:59
 *@parms:
 *@Description: 精准的判断数据类型
 */
function typeofPlus(parm) {
  // 字符转从下标8开始截取 到最后 然后转小写
  return Object.prototype.toString.call(parm).slice(8, -1).toLowerCase();
}
