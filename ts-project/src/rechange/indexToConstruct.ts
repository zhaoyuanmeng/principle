// 索引类型的重新构造

// 基础的readonly ？
type obj = {
  readonly name: string;
  age: number;
  sex?: string;
};

let li: obj = {
  name: "z",
  age: 10,
};

// Mapping 改造value

type Mapping<Obj extends object> = {
  [key in keyof Obj]: [Obj[key], Obj[key], Obj[key]];
};

type MappingRes = Mapping<{ a: 1; b: 22 }>;

// 改造key

type UpperCaseKey<Obj extends object> = {
  [key in keyof Obj as Uppercase<key & string>]: Obj[key];
};

type UpperCaseKeyRes = UpperCaseKey<{ aa: "1" }>;

export let test = "test";
