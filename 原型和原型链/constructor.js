// 盗用构造函数
// function Parent(name) {
//   this.name = name;
// }
// function Son(age, name) {
//   Parent.call(this, name);
//   this.age = age;
// }

// 组合继承
// function Parent(name) {
//   this.name = name;
//   this.colors = ['yellow', 'red'];
// }
// Parent.prototype.sayName = function () {
//   console.log(this.name);
// }
// function Son(age, name) {
//   // 继承属性
//   Parent.call(this, name);
//   this.age = age;
// }
// // 继承方法
// Son.prototype = new Parent();

// Parent.prototype.sayAge = function () {
//   console.log(this.age);
// }
// const son1 = new Son(18, 'xlj');
// const son2 = new Son(19, 'jmm');
// son1.colors.push('green');
// console.log(son1.age, son1.name, son1.colors);// 18 xlj [ 'yellow', 'red', 'green' ]
// console.log(son2.age, son2.name, son2.colors);// 19 jmm [ 'yellow', 'red' ]


// 原型式继承
function object(origin) {
  function F() { };
  F.prototype = origin;
  return new F();
}
//
Object.create(origin);

// 寄生式继承
function createAnother(origin) {
  let clone = object(origin);
  clone.sayHi = function () {
    console.log('hi');
  }
  return clone;
}

// 寄生组合式继承
function inheritPrototype(target, origin) {
  function F() { };
  F.prototype = origin.prototype;
  let prototype = new F();
  prototype.constructor = target;
  target.prototype = prototype;
}