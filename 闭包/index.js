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

//  f = () => {
//   res++;
//   return res;
// }

let b = f();
let c = f();
let d = f();

console.log("b", b); //
console.log("c", c); //
console.log("d", d); //

//
// for (var i = 0; i < 5; i++) {
//   btn[i].onclick = function () {
//     console.log(i);
//   };
// }
// btn[0].onclick = function () {
//   console.log(i);
// };
// btn[1].onclick = function () {
//   console.log(i);
// };

// for (var i = 0; i < 5; i++) {
//   (function (i) {
//     btn[i].onclick = function () {
//       console.log(i);
//     };
//   })(i);
// }

function test(flag) {}

// 函数柯里化

//

function a(a1, a2) {
  // 写逻辑
  return create(a1, a2);
}
function b(a1, a2) {
  return create(a1, a2);
}
function c(a1, a2) {
  return create(a1, a2);
}
function d(a1, a2) {
  return create(a1, a2);
}

function create(a, b) {
  // 写逻辑
  if (a == false || b == false) {
    return 1;
  }
  return 0;
}

a(false, true);
b(true, false);
c(false, false);
d(true, true);
