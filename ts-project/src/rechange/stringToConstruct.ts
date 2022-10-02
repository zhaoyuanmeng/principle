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

/**
 * @author Zhao YuanDa
 * @parms:
 * @description: //TODO
 * @date 2022-10-02 19:49
 */

export type CamelCase<Str extends string> =
  Str extends `${infer First}_${infer Second}_${infer Third}`
    ? `${First}${CapitalizeStr<Second>}${CapitalizeStr<Third>}`
    : Str;

type CamelCaseRes = CamelCase<"zyd_zyd_zyd">;

let CamelCaseResTest: CamelCaseRes = "zydZydZyd";
