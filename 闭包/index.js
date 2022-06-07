/*
 *@Author: 赵元达
 *@Date: 2022-05-28 16:25:31
 *@parms:
 *@Description: 闭包
 */

// 全局上下文

// 执行上下文

// 词法作用域
const fn = () => {
  let a = 2;
  let res = 0;
  return () => {
    res++;
    return res;
  };
};

let f = fn();

let b = f();
let c = f();
let d = f();

console.log("b", b); //
console.log("c", c); //
console.log("d", d); //
