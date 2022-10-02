export type Push<Arr extends unknown[], Element> = [...Arr, Element];

export type Unshift<Arr extends unknown[], Element> = [Element, ...Arr];

//合并数组 非递归版
type Zip<ArrOne extends unknown[], ArrTwo extends unknown[]> = [
  ...ArrOne
] extends [infer oneArrOneVal, infer oneArrTwoVal]
  ? [...ArrTwo] extends [infer twoArrOneVal, infer twoArrTwoVal]
    ? [[oneArrOneVal, twoArrOneVal], [oneArrTwoVal, twoArrTwoVal]]
    : never
  : never;

//合并数组 递归版
type ZipPlus<
  ArrOne extends unknown[],
  ArrTwo extends unknown[]
> = ArrOne extends [infer oneArrOneVal, ...infer oneArrOtherVal]
  ? ArrTwo extends [infer twoArrOneVal, ...infer twoArrOtherVal]
    ? [[oneArrOneVal, twoArrOneVal], ...ZipPlus<oneArrOtherVal, twoArrOtherVal>]
    : []
  : [];

type PushRes = Push<[1, 2, 3], "aaa">;

type unShiftRes = Unshift<[1, 2, 3], "bbb">;

type ResZip = Zip<[1, "zyd"], [2, "zpp"]>;

type ResPlusZip = ZipPlus<[1, 2], ["a", "b"]>;

let pushRes: PushRes = [1, 2, 3, "aaa"];

let unShiftRess: unShiftRes = ["bbb", 1, 2, 3];

let test: ResPlusZip = [
  [1, "a"],
  [2, "b"],
];
