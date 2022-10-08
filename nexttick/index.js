let cbs = [];
let wating = false;
function nextTick(cb) {
  cbs.push(cb);
  if (!wating) {
    // 异步更新 不是掉一次更新一次
    setTimeout(flushCallBacks, 0);
    wating = true;
  }
}

function flushCallBacks() {
  cbs.forEach((cb) => cb());
  wating = false;
}


/**
 * @author Zhao YuanDa
 * @parms: 
 * @description: //promise实现版
 * @date 2022-10-08 11:41
 */
let p = Promise.resolve('')
function nextickPlus() {
  cbs.push(cb);
  if (!wating) {
    // 异步更新 不是掉一次更新一次
    p.then(() => { 
      flushCallBacks()
    })
    wating = true;
  }
}