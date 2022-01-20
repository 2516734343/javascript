Function.prototype.myBind = function (con) {
  const fn = this;
  const args = [...arguments].slice(1);
  const Fn = function () { }
  var fbound = function () {
    const args2 = [...arguments];
    // fbound作为构造函数时,this不会被改变。
    return fn.apply(this instanceof fbound ? Fn : con, args.concat(args2));
  }
  // 更改fbound对象的内容，fn里的不会随着更改
  Fn.prototype = fn.prototype;
  fbound.prototype = Fn.prototype;

  return fbound;

}

var value = 2;

var foo = {
  value: 1
};

function bar(name, age) {
  this.habit = 'shopping';
  console.log(this.value);
  console.log(name);
  console.log(age);
}

bar.prototype.friend = 'kevin';

var bindFoo = bar.bind(foo, 'daisy');

var obj = new bindFoo('18');
// undefined
// daisy
// 18
obj.habit = 'game';
console.log(obj.habit);
console.log(obj.friend);
// shopping
// kevin