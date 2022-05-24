/*
 *@Author: 赵元达
 *@Date: 2022-05-06 09:01:14
 *@parms:
 *@Description: 浅拷贝 只是复制了一个内存地址 彼此之间的操作会互相影响
 */

/*
 *@Author: 赵元达
 *@Date: 2022-05-06 09:06:04
 *@parms:
 *@Description: 深拷贝
 */

function deepClone(obj) {
  // 判断传入对象是数组还是对象
  var result = Array.isArray(obj) ? [] : {};
  for (var key in obj) {
    // 判断当前key是否存在
    if (obj.hasOwnProperty(key)) {
      // 判断当前key所对应的obj[key]的value值是否还是object类型，如果是，则递归调用deepClone函数且赋值给当前的result[key]
      if (typeof (obj[key] === "object" && obj[key] !== null)) {
        result[key] = deepClone(obj[key]);
      } else {
        result[key] = obj[key];
      }
    }
  }
  return result;
}
