/*
 *@Author: 赵元达
 *@Date: 2022-05-24 16:46:36
 *@parms:
 *@Description: 二分查找 有序不重复的数组
 */

let num = [-11, 3, 3, 5, 6];

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

/*
 *@Author: 赵元达
 *@Date: 2022-05-28 10:19:36
 *@parms:
 *@Description: 一个有序数组的平方 暴力破解法
 */
const theSquareOfAnOrderlyArray = (num) => {
  let res = [];
  let len = num.length;
  for (let index = 0; index < len; index++) {
    res.push(num[index] * num[index]);
  }
  // 排序res
  res.sort();
};

/*
 *@Author: 赵元达
 *@Date: 2022-05-28 10:19:36
 *@parms:
 *@Description: 一个有序数组的平方 双指针法
 */
const theSquareOfAnOrderlyArrayPlus = (num) => {
  let res = [];
  let len = num.length;
  let i = 0;
  let k = len - 1;
  let j = len - 1;
  while (i <= j) {
    if (num[i] * num[i] < num[j] * num[j]) {
      res[k--] = num[j] * num[j];
      j--;
    } else {
      res[k--] = num[i] * num[i];
      i++;
    }
  }
  return res;
};

/*
 *@Author: 赵元达
 *@Date: 2022-05-28 10:50:38
 *@parms:
 *@Description: 长度最小的子数组
 */

const theLengthOfTheSmallestSubarray = (num) => {};
