/**
 * 斐波拉契函数
 * @param {*} n 
 * @returns 
 */
function fib(n) {
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}

// 使用尾递归优化

function fibFix(n) {
  return fibImpl(0, 1, n);
}

function fibImpl(a, b, n) {
  if (n === 0) {
    return a;
  }
  return fibImpl(b, a + b, n - 1)
}

console.log(fibFix(3));

