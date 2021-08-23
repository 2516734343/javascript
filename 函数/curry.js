function curry(fn, args) {
  var length = fn.length;

  args = args || [];

  return function () {

    var _args = args.slice(0),

      arg, i;

    for (i = 0; i < arguments.length; i++) {

      arg = arguments[i];

      _args.push(arg);

    }
    if (_args.length < length) {
      return curry.call(this, fn, _args);
    } else {
      return fn.apply(this, _args);
    }
  }
}


var fn = curry(function (a, b, c, d) {
  console.log([a, b, c, d]);
});

// fn("a", "b", "c") // ["a", "b", "c"]
// fn("a", "b")("c") // ["a", "b", "c"]
// fn("a")("b")("c")("d") // ["a", "b", "c"]
// fn("a")("b", "c") // ["a", "b", "c"]



//封装柯里化函数
function curry1(func) {
  //得到从下标1开始的其他参数
  var arg = Array.prototype.slice.call(arguments, 1);
  return function () {
    var curArgs = Array.from(arguments);//当前调用的参数
    var totalArgs = arg.concat(curArgs);
    if (totalArgs.length >= func.length) {
      //参数数量够了
      return func.apply(this, totalArgs);
    } else {
      //参数数量不够 重新调用
      totalArgs.unshift(func); // 递归
      return curry1.apply(this, totalArgs);
    }
  }
}
function sum(a, b, c) {
  let sum = 0;
  [].slice.call(arguments, 0).forEach(it => sum += it);
  return sum;
}
// let add = curry1(sum, 1);

// console.log(add(2, 3));
// console.log(add(2)(3));

function curry2(func) {
  // 取参数
  let args = [].slice.call(arguments, 1);
  return function () {
    let curArguments = [].slice.call(arguments, 0);
    let totalArguments = args.concat(curArguments);
    if (totalArguments.length >= func.length) {
      return func.apply(this, totalArguments);
    } else {
      totalArguments.unshift(func);
      return curry2.apply(this, totalArguments);
    }
  }
}

let add = curry2(sum, 1);

console.log(add(2, 3));
console.log(add(2)(3));