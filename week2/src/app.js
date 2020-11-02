var object = {
 name: "Tyler",
 age: 28
}

class Person {
 name;
 age;

 constructor(name, age) {
  this.name = name;
  this.age = age;
 }

 getLegal() {
  return this.age >= 21;
 };

 getName() {
  return `Hello, my name is ${this.name}`;
 }
}

let me = new Person('Tyler', 28)
console.log(me.getName());


