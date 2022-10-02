/*
 *@Author: 赵元达
 *@Date: 2022-09-26 10:52:16
 *@parms:
 *@Description: 判断是否开头是已特定字符串开头
 */

export type StartWithStr<
  Str extends string,
  Prefix extends string
> = Str extends `${Prefix}${string}` ? true : false;

type Demo = StartWithStr<"abc", "a">;
