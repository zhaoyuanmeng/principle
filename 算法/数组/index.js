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

// 长度最小的子数组 暴力破解的方法
const theLengthOfTheSmallestSubarray = (num, s) => {
  let res = 0;
  for (let i = 0; i < num.length; i++) {
    let sum = 0;
    for (let j = i; j < num.length; j++) {
      sum += num[j];
      if (sum >= s) {
        let len = j - i + 1;
        res = res > len ? len : res;
        break;
      }
    }
    return res;
  }
};

// 长度最小的子数组 滑动窗口的方法
const theLengthOfTheSmallestSubarrayPlus = (num, s) => {
  let i = 0;
  let sum = 0;
  let res = 10000; //给个大的数
  let lens = 0;
  for (let j = 0; j < num.length; j++) {
    sum += num[j];
    while (sum >= s) {
      lens = j - i + 1;
      res = res < lens ? res : lens;
      sum -= num[i];
      i++;
    }
  }
  return res == 10000 ? 0 : res;
};

// console.log("res-", theLengthOfTheSmallestSubarrayPlus([2, 3, 1, 2, 4, 3], 7));

/*
 *@Author: 赵元达
 *@Date: 2022-06-12 11:06:33
 *@parms:
 *@思路:
 *@Description: 螺旋矩阵 给定一个正整数 n，生成一个包含 1 到 n^2 所有元素，且元素按顺时针顺序螺旋排列的正方形矩阵。
 */
// n = 3
//[
//   [1,2,3]
//   [8,9,4],
//   [7,6,5],
// ]

// n = 4
// [
//   [1, 2, 3, 4]
//   [12,13,14,5]
//   [11,16,15,6]
//   [10, 9, 8,7]
// ]

const spiralMatrix = (n) => {
  let res = [[]]; //定义一个二维数组 用来返回结果
  let startX = 0; //定义每循环一个圈的起始位置
  let startY = 0; // 与上面的含义一样 不过就是二维数组的一个表示
  let loop = n / 2; //每个圈循环几次 如果n=3 loop=1 矩阵中间的值需要单独处理
  let mid = n / 2; // 矩阵中间的位置 n=3 中间的位置就是（1，1） n为5就是（2，2）
  let count = 1; //用来给矩阵每一个空格赋值
  let offset = 1; //每一圈循环，需要控制每一条边遍历的长度(相当于控制了不取最后一个元素)
  let i, j;
  while (loop--) {
    i = startX;
    j = startY;

    // 下面开始for就是模拟转了一圈

    // 模拟填充上行（左闭右开）
    for (j = startY; j < startY + n - offset; j++) {
      res[i][j] = count++;
    }

    // 模拟填充右列（上闭下开）
    for (i = startX; i < startX + n - offset; j++) {
      res[i][j] = count++;
    }

    // 模拟填充下行（右闭左开）
    for (; j > startY; j--) {
      res[i][j] = count++;
    }

    // 模拟填充左列（下闭上开）
    for (; i > startX; i--) {
      res[i][j] = count++;
    }

    // 这是为了控制这个圈起始的位置
    startX++;
    startY++;

    // offset控制每一圈里每一条边遍历的长度 因为startX和startY也都加1了所以offset每次要加2
    offset += 2;
  }

  // 判断n为奇数的情况 需要单独给他赋值2
  if (n % 2 != 0) {
    res[mid][mid] = count;
  }
  return res;
};
