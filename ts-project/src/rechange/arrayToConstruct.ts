export type Push<Arr extends unknown[], Element> = [...Arr, Element];

export type Unshift<Arr extends unknown[], Element> = [Element, ...Arr];

//合并数组

type PushRes = Push<[1, 2, 3], "aaa">;

type unShiftRes = Unshift<[1, 2, 3], "bbb">;

type Zip<ArrOne extends unknown[], ArrTwo extends unknown[]> = [
  ...ArrOne
] extends [infer oneArrOneVal, infer oneArrTwoVal]
  ? [...ArrTwo] extends [infer twoArrOneVal, infer twoArrTwoVal]
    ? [[oneArrOneVal, twoArrOneVal], [oneArrTwoVal, twoArrTwoVal]]
    : never
  : never;

type ResZip = Zip<[1, "zyd"], [2, "zpp"]>;

let pushRes: PushRes = [1, 2, 3, "aaa"];

let unShiftRess: unShiftRes = ["bbb", 1, 2, 3];
