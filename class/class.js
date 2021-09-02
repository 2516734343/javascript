//  用es5实现es6的class语法：
/// 类、构造函数
// 属性、方法
// 静态属性
//静态方法
// 继承

//es6类
class Person {
  constructor(name) {
    this.name = name;
  }
  static age = 18;
  static sayHi() { // 静态方法实例访问不到
    console.log('hello')
  }
  say() {
    console.log('hello', this.name);
  }
}

let person1 = new Person('jack');
Person.sayHi();
person1.say();

// es6 继承
class Child extends Person {
  constructor(name, age) {
    super(name);
    this.age = age;
  }
  sayAge() {
    console.log('age--', this.name, this.age)
  }
}

let child = new Child('xll', 18);
child.sayAge();
child.say();