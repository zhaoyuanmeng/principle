// import "./style.css";

// const app = document.querySelector<HTMLDivElement>("#app")!;

// app.innerHTML = `
//   <h1>Hello Vite!</h1>
//   <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
// `;

import { message } from "./base";

import func from "./func";

import type { gg } from "./func";

import { DictQueryCriteria } from "./emum";

type Test<Type> = {
  -readonly [Property in keyof Type]: string;
};
type res = typeof DictQueryCriteria;

type demo = Test<res>;

type AAAA<T> = {
  code?: string[];
  dictType: T;
  status?: boolean;
};

let a: AAAA<demo> = {
  code: ["adad"],
  dictType: {
    VENDIBILITY_STATUS: "VENDIBILITY_STATUS", // 可卖状态
    SALES_AREA: "SALES_AREA", // 销售组织
    BARGAIN_PRIORITY: "BARGAIN_PRIORITY", // 议价优先级
    BIG_ORDER_REPORT: "BIG_ORDER_REPORT", // 是否允许大单报备
    MGMT_AREA: "MGMT_AREA", // 管理分区
    BARGAIN_SCENARIO: "BARGAIN_SCENARIO", // 议价场景
    CUSTOMER_AREA: "CUSTOMER_AREA", // 客户处
    PRODUCT_SCOPE: "PRODUCT_SCOPE", // 产品域
    SALES_METHOD: "SALES_METHOD", // 销售方式
    CUSTOMER_ATTRIBUTION: "CUSTOMER_ATTRIBUTION", // 客户归属
    CTO_TYPE: "CTO_TYPE", // ctoType 类型
  },
  status: false,
};

const fn = (text: string) => {
  console.log("---", text);
};

interface bb {
  bane: "aa";
}
interface cc extends bb {
  aa: "aa";
}

let b: cc = {
  bane: "aa",
  aa: "aa",
};

const myfunc: gg = (a: string) => {
  console.log(a);
};
myfunc("llllll");
func.g(fn);

const aaa = (a: number) => {
  if (a == 1) return true;
  return false;
};
aaa.description = "asdas";
func.doSomething(aaa);
