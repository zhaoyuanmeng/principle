/**
 * @author Zhao YuanDa
 * @parms:
 * @description: //通过模式匹配的方式提取ref的值 学会使用infer进行操作
 * @date 2022-10-02 18:48
 */

export type GetRefProps<Props> = "ref" extends keyof Props
  ? Props extends { ref?: infer Value | undefined }
    ? Value
    : never
  : never;

type ResRefType = GetRefProps<{ ref: string }>;

let test: ResRefType = "aaa";
