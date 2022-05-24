/*
 *@Author: 赵元达
 *@Date: 2022-05-24 11:12:26
 *@parms:
 *@Description: 实列是__proto__ 函数是prototype
 */

function User() {}

let user = new User();

console.log(user.__proto__ === User.prototype);
