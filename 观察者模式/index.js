/*
 *@Author: 赵元达
 *@Date: 2022-05-24 09:37:35
 *@parms:
 *@Description: 观察者
 */

// 观察者
class Observe {
  constructor(name) {
    this.name = name;
  }
  update(task) {
    console.log(this.name, task);
  }
}

// 目标
class Target {
  constructor() {
    this.observeList = [];
  }
  addObserver(observer) {
    this.observeList.push(observer);
  }
  notify(task) {
    this.observeList.forEach((observer) => {
      observer.update(task);
    });
  }
}

let zyd = new Observe("zyd");
let jzc = new Observe("jzc");

let maxg = new Target();
maxg.addObserver(zyd);
maxg.addObserver(jzc);

maxg.notify("吃火锅");
