/*
 *@Author: 赵元达
 *@Date: 2022-09-29 11:33:55
 *@parms:
 *@Description: 提取参数和返回值的类型。
 */

 type GetReturnType<Fn extends Function> = Fn extends (
  ...args: any[]
) => infer ReturType
  ? ReturType
  : never;

type fn = (a: string) => string;

export type MyReturn = GetReturnType<fn>;

