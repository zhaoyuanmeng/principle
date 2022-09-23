// 模式匹配做提取

type GetArrOne<Arr extends unknown[]> = Arr extends [infer One, ...unknown[]]
  ? One
  : never;

type GetArrLast<Arr extends unknown[]> = Arr extends [...unknown[], infer Last]
  ? Last
  : never;

type one = GetArrOne<[1, 2]>;
type Last = GetArrLast<[1, 2]>;

export const a = "a";
