// 类型运算 采用 extends ? : 类似if else

type isTwo<T> = T extends 2 ? true : false;

type res = isTwo<1>;
type res1 = isTwo<2>;

type MapTypes<T> = {
  // 交叉类型会把同一类型做合并，不同类型舍弃
  [key in keyof T as `${key & string}${key & string}${key & string}`]: [
    T[key],
    T[key],
    T[key]
  ];
};

type ress = MapTypes<{ a: "zyd" }>;

const z_ress: ress = {
  aaa: ["zyd", "zyd", "zyd"],
};

export const a = "a";
