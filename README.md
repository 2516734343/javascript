# -

javascript 学习记录

# 执行上下文和执行栈

> js 代码是一段一段执行的，那么这“一段”是如何划分的呢？当 javascript 引擎遇到可执行代码时，如：全局代码、函数、eval 代码。就会做“准备工作”，即执行上下文。javascript 利用执行栈管理执行上下文，每遇到一个可执行的上下文，就往执行栈里 push 一个上下文对象，每当执行完相关代码，如一个函数，就销毁执行上下文，将其从执行栈中弹出。由 javascript 执行顺序可知，最先被 push 到栈里的是全局代码。

执行上下文对象有三个重要的属性如下：

- 变量对象： 全局对象 GO、活动对象 AO
- 作用域链：每个变量对象都有自己的上下文，作用域链正是这些上下文组成的链表，当一个变量在函数内部的上下文没有时，它就是一个自由变量，查找自由变量，就会形成作用域链，一直向上查找，直到找到，找不到则为 undefined。可以类比于原型链理解。
- this 指向：

  全局调用时，在非严格模式下，this 指向全局对象，严格模式下等于 undefined。若作为某个对象的方法调用，则 this 指向这个对象。即 this 指向调用方法的引用类型。

  this 与上下文中可执行代码的类型有直接关系，this 值在进入上下文时确定，并且在上下文运行期间永久不变。

  改变 this 指向三个方法： `call`,`apply`, `bind`

> > 参考：

> > [JavaScript 深入之 call 和 apply 的模拟实现 ](https://github.com/mqyqingfeng/blog/issues/11)

> > [JavaScript 深入之 bind 的模拟实现 ](https://github.com/mqyqingfeng/Blog/issues/12)

> > [bind ---MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)

# 闭包

# 原型和原型链

原型和原型链的运用：

- new 操作符的实现

```javascript
function newF() {
  // 1. 创建一个空对象，对象要继承构造函数里的属性，还要继承构造函数原型上的属性
  let obj = {};
  // 2. 继承构造函数原型上的属性
  const constructor = [].shift.call(arguments);
  obj.__proto__ = constructor.prototype;
  //3. 执行构造函数，继承构造函数属性,构造函数有返回值时：如果有返回值，则需要判断返回值是是否是对象，是对象则返回该对象，非对象则返回创建的obj
  const result = constructor.apply(obj, arguments);
  // 4. 返回对象
  return typeof result === "object" ? result : obj;
}

function Person(name) {
  this.name = name;
}
Person.prototype.age = 18;
Person.prototype.sayName = function () {
  console.log("name" + this.name);
};

// let person = new Person('jack');
let person = newF(Person, "jack");
console.log(person.name);
console.log(person.age);
person.sayName();
```

- instanceof 实现

  instanceof:用来判断某个构造函数的原型是否在某个实例对象的原型链上

```javascript
function instanceOF(left, right) {
  let le = left.__proto__;
  let ri = right.prototype;
  while (le) {
    if (le === ri) {
      return true;
    }
    le = le.__proto__;
  }
  return false;
}

function Car() {
  //
}
let car = new Car();
console.log(instanceOF(car, Object));
console.log(instanceOF(car, Car));
```
