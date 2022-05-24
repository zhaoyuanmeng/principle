/*
 *@Author: 赵元达
 *@Date: 2022-04-20 10:20:08
 *@parms: 
 *@Description: 定时器相关的好玩的东西
*/
   
   
 // 发送验证码
 var countdown = 60;
 function settime(obj) {
    if (countdown === 0) {
       obj.removeAttribute("disabled");
       obj.value="获取验证码";
       countdown = 60;
       return;
    } else {
       obj.setAttribute("disabled", true);
       obj.value = "重新发送(" + countdown + ")";
       countdown--;
    }
    setTimeout(function() {
       settime(obj)
    },1000)
 }


// 时钟
setInterval(function(){
  var d = new Date();
  var time = document.getElementById('time');
  //获取当前区域时间并转成字符串
  time.innerHTML = d.toLocaleString();
},1000);



// 抽奖
var i = 1;
var t = Object;
function setNum() {
  var res = document.getElementById('num_text')
  res.innerHTML = i;
  res.style.fontSize = '200px'
  i++;
  // 超过100重置
  if(i === 100){
     i = 1;
  }
}
function start() {
  t = setInterval(setNum, 100)
}
function end() {
  clearInterval(t)
}
