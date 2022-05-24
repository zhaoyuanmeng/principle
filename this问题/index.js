/*
 *@Author: 赵元达
 *@Date: 2022-05-05 16:05:34
 *@parms:
 *@Description: this指向的问题
 */
//  使用 ES6 的箭头函数
//  在函数内部使用 _this = this
//  使用 apply、call、bind
//  new 实例化一个对象

let a = {
  name: "Cherry",
  fn: function (a, b) {
    console.log(a + b);
  },
};

let b = a.fn;
b.call(a, 1, 2); //3
b.apply(a, [1, 2]); // 3 只能是数组或者类数组

let c = b.bind(a, 1, 2); //不会立即执行函数 会返回一个新的绑定好this和值的函数
c();
