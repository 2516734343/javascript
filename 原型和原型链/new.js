function newF() {
  // 1. 创建一个空对象，对象要继承构造函数里的属性，还要继承构造函数原型上的属性
  let obj = {};
  // 2. 继承构造函数原型上的属性
  const constructor = [].shift.call(arguments);
  obj.__proto__ = constructor.prototype;
  //3. 执行构造函数，继承构造函数属性,构造函数有返回值时：如果有返回值，则需要判断返回值是是否是对象，是对象则返回该对象，非对象则返回创建的obj
  const result = constructor.apply(obj, arguments)
  // 4. 返回对象
  return typeof result === 'object' ? result : obj;
}

function Person(name) {
  this.name = name;
}
Person.prototype.age = 18;
Person.prototype.sayName = function () {
  console.log('name' + this.name);
}

// let person = new Person('jack');
let person = newF(Person, 'jack')
console.log(person.name);
console.log(person.age);
person.sayName();