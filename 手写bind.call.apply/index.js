// 所以 apply 和 call 的区别是 call 方法接受的是若干个参数列表，而 apply 接收的是一个包含多个参数的数组。

// ind()方法创建一个新的函数, 当被调用时，将其this关键字设置为提供的值，
// 在调用新函数时，在任何提供之前提供一个给定的参数序列。
var a = {
  name: "Cherry",

  func1: function () {
    console.log(this.name);
  },

  func2: function () {
    setTimeout(
      function () {
        this.func1();
      }.call(a),
      100
    );
  },
};

a.func2(); // Cherry
