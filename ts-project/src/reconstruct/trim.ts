export type TrimRight<Str extends string> = Str extends `${infer Rest}${
  | " "
  | "\n"
  | "\t"}`
  ? TrimRight<Rest>
  : Str;
export type TrimLift<Str extends string> = Str extends `${
  | " "
  | "\n"
  | "\t"}${infer Rest}`
  ? TrimLift<Rest>
  : Str;

type Trim<Str extends string> = TrimRight<TrimLift<Str>>;

type Test = Trim<"  asdd  ">;

let a: Test = "asdd";
