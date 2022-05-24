/*
 *@Author: 赵元达
 *@Date: 2022-05-12 14:30:46
 *@parms: 
 *@Description: 封装ajax
 1.创建XMLHttpRequest类型的对象
 2.准备发送，打开与一个网址之间的连接
 3.执行发送动作
 4.指定xhr状态变化事件处理函数
*/

function ajax(options) {
  // 存储的是默认值
  var defaults = {
    type: "get",
    url: "",
    data: {},
    header: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    success: function () {},
    error: function () {},
  };
  // 使用options对象中的属性覆盖defaults对象中的属性
  Object.assign(defaults, options);
  // 创建ajax对象
  var xhr = new XMLHttpRequest();
  // 拼接请求参数的变量
  var params = "";
  // 循环用户传递进来的对象格式参数
  for (var attr in defaults.data) {
    // 将参数转换为字符串格式
    params += attr + "=" + defaults.data[attr] + "&";
  }
  // 将参数最后面的&截取掉
  // 将截取的结果重新赋值给params变量
  params = params.substr(0, params.length - 1);
  // 判断请求方式
  if (defaults.type == "get") {
    defaults.url = defaults.url + "?" + params;
  }
  // 配置ajax对象
  xhr.open(defaults.type, defaults.url);
  // 如果请求方式为post
  if (defaults.type == "post") {
    // 用户希望的向服务器端传递的请求参数的类型
    var contentType = defaults.header["Content-Type"];
    // 设置请求参数格式的类型
    xhr.setRequestHeader("Content-Type", contentType);
    // 判断用户希望的请求参数格式的类型
    // 如果类型为json
    if (contentType == "application/json") {
      // 向服务器端传递json数据格式的参数
      xhr.send(JSON.stringify(defaults.data));
    } else {
      // 向服务器端传递普通类型的请求参数
      xhr.send(params);
    }
  } else {
    // 发送请求
    xhr.send();
  }
  // 监听xhr对象下面的onload事件
  // 当xhr对象接收完响应数据后触发
  xhr.onload = function () {
    // xhr.getResponseHeader()
    // 获取响应头中的数据
    var contentType = xhr.getResponseHeader("Content-Type");
    // 服务器端返回的数据
    var responseText = xhr.responseText;
    // 如果响应类型中包含applicaition/json
    if (contentType.includes("application/json")) {
      // 将json字符串转换为json对象
      responseText = JSON.parse(responseText);
    }
    // 当http状态码等于200的时候
    if (xhr.status == 200) {
      // 请求成功 调用处理成功情况的函数
      defaults.success(responseText, xhr);
    } else {
      // 请求失败 调用处理失败情况的函数
      defaults.error(responseText, xhr);
    }
  };
}

/*
 *@Author: 赵元达
 *@Date: 2022-05-12 14:41:01
 *@parms:
 *@Description: 使用promise封装ajax
 */
function myAjax(url, method, data) {
  let promise = new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
          resolve(xhr.response);
        } else {
          reject(new Error("error"));
        }
      }
    };
    if (method.toUpperCase() === "GET") {
      let paramslist = [];
      for (key in data) {
        paramslist.push(key + "=" + data[key]);
      }
      //根据get请求方法对url进行拼接
      let params = paramslist.join("&");
      url = url + "?" + params;
      xhr.open("get", url, false);
      //使用get请求将内容连接在url后面
      xhr.send();
    }
    if (method.toUpperCase() === "POST") {
      xhr.open("post", url, false);
      xhr.setRequestHeader(
        "Content-Type",
        "application/x-www-form-urlencoded;charset=utf-8"
      );
      xhr.send(data);
      //使用post请求时将内容放在send里面
    }
  });
  return promise;
}

ajax({
  type: "post",
  // 请求地址
  url: "http://localhost:3000/responseData",
  success: function (data) {
    console.log("这里是success函数");
    console.log(data);
  },
});
