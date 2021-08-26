String.prototype.repeat = function (params) {
  if (!params || !Boolean(+params)) { // NaN，null, undefined, 字符串处理
    return ""
  }
  if (+params < 0) {
    throw new Error('params must be useful')
  }
  return (new Array(+params)).fill(this).join('');
}

console.log('abc'.repeat(2));
console.log('abc'.repeat({ a: 1 }));
console.log('abc'.repeat([]));