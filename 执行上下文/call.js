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
  var args = [...arguments].splice(0, 1); // 取参数
  console.log(args);
  con.fn = this; // 获取调用call的函数，给目标对象加上一个函数
  const result = con.fn(args.join(',')); // 执行这个函数  apply [...args]
  delete context.fn; // 删除目标对象的函数
  return result; // 函数可能会有返回值
}

// bind: 
// 1、返回一个新函数，bind的第一个参数为新函数的this,之后的参数将会在传递新函数的实参前传入，作为参数一部分执行。
// 2、当把返回的函数当作构造函数时，bind的第一个参数改变this将无效，之后的参数