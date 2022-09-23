interface Person {
  name: string;
  age: number;
}

// 构造器案列================================
interface PersoonConstructor {
  new (name: string, age: number): Person;
}

class CreatePerson {
  constructor(public name: string, public age: number) {
    console.log(name + " created  " + age);
  }
}

function createPerson(ctor: PersoonConstructor): Person {
  return new ctor("zyd", 18);
}

export let a = createPerson(CreatePerson);
// 构造器案列================================

// 对象动态添加属性 =========

interface Zperson {
  // 如果不知道会有什么属性，可以用可索引签名 那个key可以采用任何名代替
  [key: string]: string | number;
}

const zyd: Zperson = {};
zyd.age = 18;
//对象动态添加属性 =========

// 约束以某个字符串开头的字符串字面量类型时 ====
function sayHello(str: `z${string}`) {}
sayHello("zyd");

// 约束以某个字符串开头的字符串字面量类型时 ====
