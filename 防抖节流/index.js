/*
 *@Author: 赵元达
 *@Date: 2022-05-05 16:23:46
 *@parms: fun 是你要写的逻辑 delay是延迟
 *@Description: 防抖的逻辑是：当你在频繁的输入时，并不会发送请求，
 只有当你在指定间隔内没有输入时，才会执行函数。如果停止输入但是在指定间隔内又输入，会重新触发计时
 */
function debounce(fun, delay) {
  return function (val) {
    let that = this;
    let _args = val;
    clearTimeout(fun.id);

    fun.id = setTimeout(() => {
      fun.call(that, _args);
    }, delay);
  };
}

/*
 *@Author: 赵元达
 *@Date: 2022-05-05 16:24:21
 *@parms:
 *@Description: 节流规定在一个单位时间内，只能触发一次函数。如果这个单位时间内触发多次函数，只有一次生效
 */

function throttle(fun, delay) {
  // 这里相当于是下面那个函数的上层环境 是能够访问到的  作用域链的知识点了
  let last, deferTimer;
  return function (args) {
    let that = this;
    let _args = arguments;
    let now = +new Date();
    if (last && now < last + delay) {
      clearTimeout(deferTimer);
      deferTimer = setTimeout(function () {
        last = now;
        fun.apply(that, _args);
      }, delay);
    } else {
      last = now;
      fun.apply(that, _args);
    }
  };
}

// 针对作用域链写的
function test() {
  let a = 1;
  return function () {
    a++;
    console.log("a", a);
  };
}
let t1 = test();
t1();
t1();
