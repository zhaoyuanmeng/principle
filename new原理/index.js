/*
 *@Author: 赵元达
 *@Date: 2022-06-09 09:04:31
 *@parms:
 *@Description:new做了什么事情
 */

//  基类
function Person() {
  this.name = "111";
  this.sayName = () => {
    console.log("123123");
  };
}

// myNew的实现
function myNew(fn, ...args) {
  // 这一步的目的事 obj.__proto__ = fn.prototype
  let obj = Object.create(fn.prototype);
  // 这边是执行fn函数 注意this的指向
  let res = fn.call(obj, args);
  // 返回值 一定是一个对象
  return typeof res == "object" ? res : obj;
}

let li = myNew(Person);
