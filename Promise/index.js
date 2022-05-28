/*
 *@Author: 赵元达
 *@Date: 2022-05-05 14:17:19
 *@parms:
 *@Description: 手写promise代码
 */

class MyPromise {
  // exec 相当于是个回调函数
  constructor(exec) {
    //  初始化值
    this.initVal();
    // 初始化this
    this.intiBind();
    // 初始化成功的回调函数
    this.sucessFns = [];
    // 初始化失败的回调函数
    this.errFns = [];
    // 执行resolve和rejecte函数
    exec(this.resolve, this.reject);
  }
  intiBind() {
    this.resolve = this.resolve.bind(this);
    this.reject = this.reject.bind(this);
  }

  initVal() {
    //  初始化值
    this.PromiseResult = null; //终值
    this.PromiseState = "pending"; //初始等待状态
  }

  resolve(val) {
    if (this.PromiseState !== "pending") {
      return;
    }
    this.PromiseState = "fulfilled";
    this.PromiseResult = val;
    // 说明当时存贮了异步的操作
    if (this.sucessFns.length > 0) {
      // 执行相当于then里面的成功函数
      this.sucessFns.map((fn) => fn(this.PromiseResult));
    }
  }

  reject(reason) {
    if (this.PromiseState !== "pending") {
      return;
    }
    this.PromiseState = "rejected";
    this.PromiseResult = reason;
    if (this.errFns.length > 0) {
      // 执行相当于then里面的成功函数
      this.errFns.map((fn) => fn(this.PromiseResult));
    }
  }

  then(onFulFilled, onRejected = () => {}) {
    if (typeof onFulFilled != "function") {
      return;
    }
    if (typeof onRejected != "function") {
      return;
    }
    // 说明有异步的情况 缓存起来
    if (this.PromiseState == "pending") {
      this.sucessFns.push(onFulFilled);
      this.errFns.push(onRejected);
      return;
    }
    // 成功
    if (this.PromiseState == "fulfilled") {
      onFulFilled(this.PromiseResult);
      return;
    }
    // 失败
    if (this.PromiseState == "rejected") {
      onRejected(this.PromiseResult);
      return;
    }
  }
  catch() {}
}

// 回调函数升级
let p1 = new MyPromise((resolve, reject) => {
  // 这里面的参数实际上是一个函数 真正定义这个函数的逻辑是放在了promise那个类里面
  // reject("失败了！！！");
  // resolve("成功了！！！！");
  setTimeout(() => {
    resolve("成功了！！！！");
  }, 1000);
});

// console.log("p1", p1);

p1.then(
  (res) => {
    console.log("res", res);
  },
  (err) => {
    console.log("erro", err);
  }
);
