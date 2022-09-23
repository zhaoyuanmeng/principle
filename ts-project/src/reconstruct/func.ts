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
