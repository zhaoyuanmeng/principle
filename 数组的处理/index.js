/*
 *@Author: 赵元达
 *@Date: 2022-05-06 09:18:12
 *@parms:
 *@Description: 数组去重
 */

//  借助Set自动去重
const uniqueArr = (arr) => {
  return [...new Set(arr)];
};

// Array.flat()用于拉平嵌套的数组[推荐-超级好用]
let arr = [1, 2, [3, 4, [5, 6]]];
console.log(arr.flat(2)); // [1,2,3,4,5,6]
// Array.at()返回对应下标的值[超级好用]
console.log(arr.at(1)); // 2

// Array.includes 方法返回一个布尔值，表示某个数组是否包含给定的值。
console.log(arr.includes(1)); //true
console.log(arr.includes("1")); //false

// 使用fitter进行去重
const uniqueArrPlus = (arr) => {
  let resArr = arr.filter((val, index, arr) => {
    return arr.indexOf(val) === index;
  });
  return resArr;
};

let arr1 = [1, 1, 2, 3, 4, 4];

const data = [
  {
    label: "一级 1",
    children: [
      {
        label: "二级 1-1",
        children: [
          {
            label: "三级 1-1-1",
          },
        ],
      },
    ],
  },
  {
    label: "一级 2",
    children: [
      {
        label: "二级 2-1",
        children: [
          {
            label: "三级 2-1-1",
          },
        ],
      },
      {
        label: "二级 2-2",
        children: [
          {
            label: "三级 2-2-1",
          },
        ],
      },
    ],
  },
  {
    label: "一级 3",
    children: [
      {
        label: "二级 3-1",
        children: [
          {
            label: "三级 3-1-1",
          },
        ],
      },
      {
        label: "二级 3-2",
        children: [
          {
            label: "三级 3-2-1",
          },
        ],
      },
    ],
  },
];

// 只要二层的数据
const toTwoData = (data) => {
  let res = data.map((it) => {
    return it.children;
  });
  let a = res.map((it) => {
    return it.map((it) => {
      return it.label;
    });
  });
  let b = [].concat(...a);
  return b;
};

// 只要第三层的数据
const toThreeData = (data) => {
  let res = data.map((it) => {
    return it.children;
  });
  let a = res.map((it) => {
    return it.map((it) => {
      return it.children.map((it) => {
        return it.label;
      });
    });
  });
  let b = [].concat(...a);
  let c = [].concat(...b);
  return c;
};

// let res = toThreeData(data);
// toTwoData(data);
