// 函数类型表达式
const g = (fn: (a: string) => void) => {
  fn("hello world");
};

// 也可以使用类型别名 void相当于any
export type gg = (a: string) => void;

// 调用签名注意这个语法跟函数类型表达式稍有不同，在参数列表和返回的类型之间用的是 : 而不是 =>。
type DescFunction = {
  description: string;
  (a: number): boolean;
};

const doSomething = (fn: DescFunction) => {
  console.log(fn.description + "--returns--" + fn(6));
};

// 泛型函数 泛型就是被用来描述两个值之间的对应关系。
const theGeneric = (arr: any[]) => {
  return arr[0];
};

export default {
  g,
  doSomething,
  theGeneric,
};
