/*
 *@Author: 赵元达
 *@Date: 2022-05-24 16:46:36
 *@parms:
 *@Description: 二分查找 有序不重复的数组
 */

let num = [1, 3, 3, 5, 6];

let target = 0;

const binarySearch = (num, target) => {
  // 想好区间  两种情况 [left,right] 或者[left,right)
  let left = 0;
  let right = num.length - 1;

  while (left <= right) {
    // 这种写法是为了不溢出
    let middle = parseInt(left + (right - left) / 2);
    if (num[middle] > target) {
      right = middle - 1;
    } else if (num[middle] < target) {
      left = middle + 1;
    } else {
      return middle;
    }
  }
  // 处理异常的情况
};

// let res = binarySearch(num, target);

// console.log("结果为", res);

// 目标值在数组所有元素之前
// 目标值等于数组中某一个元素
// 目标值插入数组中的位置
// 目标值在数组所有元素之后
const searchInsertPosition = (num, target) => {
  let left = 0;
  let right = num.length - 1;
  while (left <= right) {
    // 这种写法是为了不溢出
    let middle = parseInt(left + (right - left) / 2);
    if (num[middle] > target) {
      right = middle - 1;
    } else if (num[middle] < target) {
      left = middle + 1;
    } else {
      // 这个是那个 目标值等于数组中某一个元素的情况
      return middle;
    }
  }
  // 处理上面的三种情况
  return right + 1;
};

/*
 *@Author: 赵元达
 *@Date: 2022-05-26 08:40:36
 *@parms:
 *@Description: 移除数组 采用双指针的方式 快慢
 */
const removeTheArray = (num, target) => {
  //慢指针
  let slow = 0;
  let size = num.length;
  for (let fast = 0; fast < size; fast++) {
    if (num[fast] != target) {
      num[slow++] = num[fast];
    }
  }
  return slow;
};

let res = removeTheArray(num, 3);

console.log("len", res);
console.log("arr", num); //原数组会发生变化



