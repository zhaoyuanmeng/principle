export type AppendArgument<Func extends Function, Arg> = Func extends (
  ...args: infer Args
) => infer ReturnT
  ? (...args: [...Args, Arg]) => ReturnT
  : never;

type AppendArgumentRes = AppendArgument<(name: string) => boolean, number>;

let test: AppendArgumentRes = (name: string, age: number) => {
  return true;
};
