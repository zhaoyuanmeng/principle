/**
 * @author Zhao YuanDa
 * @parms:
 * @description: //常用的理论
 * @date 2022-10-03 21:39
 */

// 四种特殊的类型
// void never any unknown

// never:表示不可达，比如函数抛异常的时候就是返回never

// void代表空，可以是undefined或者never

//  any是任意类型，任何类型都可以赋值给它，它也可以赋值给任何类型除了never

// unknown是未知类型，任何类型都可以赋值给它，但是它不可以赋值给别的类型

// 联合 |   代表类型可以是几个类型之一
type Union = 1 | 2 | 3;

// 交叉：& 作用于类型，代表对类型做合并
type ObjType = { a: number } & { c: boolean };
// 同一类型可以合并，不同的类型没法合并，会被舍弃
type Test = "123" & number;

// extends 在泛型里面表示约束的意思
function getCnames<T extends { name: string }>(entities: T[]): string[] {
  return entities.map((entity) => entity.name);
}
getCnames([{ name: "a", age: 10 }]);

// 再interface里面表示 继承的意思
interface Animal {
  kind: string;
}

interface Dog extends Animal {
  bark(): void;
}

let obj: Dog = {
  kind: "a",
  bark: function () {},
};

export const sa = "hello world";
