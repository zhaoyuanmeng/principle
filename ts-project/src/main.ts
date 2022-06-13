// import "./style.css";

// const app = document.querySelector<HTMLDivElement>("#app")!;

// app.innerHTML = `
//   <h1>Hello Vite!</h1>
//   <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
// `;

import { message } from "./base";

import func from "./func";

import type { gg } from "./func";

console.log("msg", message);

const fn = (text: string) => {
  console.log("---", text);
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
