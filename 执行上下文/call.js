var foo = { name: 1 };

function fn(params) {
  console.log(this.name, params);
}

fn();

fn.call(foo, 'xlj');
// call改变this指向
// 给目标对象加上一个函数，执行完后，再删掉
var foo = {
  name: 1,
  // fn: function (params) {
  //   console.log(this.name);
  // }
}
// foo.fn();


Function.prototype.call = function (context) {
  let con = context || window; // call第一个参数为null时，指向window
  var args = [...arguments].slice(1); // 取参数
  con.fn = this; // 获取调用call的函数，给目标对象加上一个函数
  const result = con.fn(args.join(',')); // 执行这个函数  apply [...args]
  delete context.fn; // 删除目标对象的函数
  return result; // 函数可能会有返回值
}

// bind: 
// 1、返回一个新函数，bind的第一个参数为新函数的this,之后的参数将会在传递新函数的实参前传入，作为参数一部分执行。
// 2、当绑定函数自动适应于使用 new 操作符去构造一个由目标函数创建的新实例，bind的第一个参数改变this将无效，之后的参数依然生效


var bindFoo = fn.bind(foo, 'xlj');
bindFoo();
Function.prototype.bind = function (context) {
  if (typeof this !== 'function') {
    throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
  }
  const self = this;
  var args = Array.prototype.slice.call(arguments, 1);

  var bindFn = function () { };

  var fn = function () {
    var arguments = Array.prototype.splice.call(arguments); // 新函数的参数
    // 当作为new时 instanceof 左边的__proto__ ===？ 右边的constructor
    return self.apply(this instanceof bindFn ? this : context, args.concat(arguments))
  }
  //但是在这个写法中，我们直接将 fBound.prototype = this.prototype，我们直接修改 fBound.prototype 的时候，也会直接修改绑定函数的 prototype。
  // 这个时候，我们可以通过一个空函数来进行中转：
  // fn.prototype = this.prototype; // 构造函数prototype指向原函数prototype，就可以访问原函数上的实例
  bindFn.prototype = this.prototype;
  fn.prototype = new bindFn();
  return fn;
}