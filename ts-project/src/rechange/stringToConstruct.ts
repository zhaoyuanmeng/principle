/**
 * @author Zhao YuanDa
 * @parms:
 * @description: //首字母转大写
 * @date 2022-10-02 19:49
 */
// 这个other就是剩余的字符串了
export type CapitalizeStr<Str extends string> =
  Str extends `${infer First}${infer Other}`
    ? `${Uppercase<First>}${Other}`
    : Str;

type Str = CapitalizeStr<"zyd">;

let strTest: Str = "Zyd";

// 这个只适合三个字母的那种

export type CamelCase<Str extends string> =
  Str extends `${infer First}_${infer Second}_${infer Third}`
    ? `${First}${CapitalizeStr<Second>}${CapitalizeStr<Third>}`
    : Str;

type CamelCaseRes = CamelCase<"zyd_zyd_zyd">;

// 做个递归版本的

export type CamelCasePlus<Str extends string> =
  Str extends `${infer First}_${infer SmallCase}${infer Other}`
    ? `${First}${Uppercase<SmallCase>}${CamelCasePlus<Other>}`
    : Str;

type CamelCaseResPlus = CamelCasePlus<"zyd_zyd_zyd">;

let CamelCaseResTest: CamelCaseResPlus = "zydZydZyd";
