/*
 *@Author: 赵元达
 *@Date: 2022-05-24 09:57:19
 *@parms:
 *@Description: 发布订阅模式中有三个角色，发布者 Publisher ，事件调度中心 Event Channel ，订阅者 Subscriber 。
 *              发布-订阅模式用来处理不同系统组件的信息交流，即使这些组件不知道对方的存在
 */
// 不用再设置发布源和观察源了 一个中介就可以搞定这些事
class PubSub {
  constructor() {
    // 事件中心
    // 存储格式: warTask: [], routeTask: []
    // 每种事件(任务)下存放其订阅者的回调函数
    this.events = {};
  }
  // 订阅方法
  subscribe(type, cb) {
    if (!this.events[type]) {
      this.events[type] = [];
    }
    this.events[type].push(cb);
  }
  // 发布方法
  publish(type, ...args) {
    if (this.events[type]) {
      this.events[type].forEach((cb) => {
        cb(...args);
      });
    }
  }

  // 取消订阅
  unsubscribe(type, cb) {
    if (this.events[type]) {
      const cbIndex = this.events[type].findIndex((e) => e === cb);
      if (cbIndex != -1) {
        // 删除
        this.events[type].splice(cbIndex, 1);
      }
    }
    if (this.events[type].length === 0) {
      delete this.events[type];
    }
  }
  // 取消全部
  unAllsubScribe(type) {
    if (this.events[type]) {
      delete this.events[type];
    }
  }
}

// 创建一个中介公司
let pubsub = new PubSub();

// 先订阅在发布 上面写的是

pubsub.subscribe("ai", (a) => {
  console.log("ai---", a);
});
pubsub.publish("ai", "zyd");

console.log("aaaaa", 0.1 + 0.2); //0.30000000000000000004
