

Function.prototype.myCall = function (cn, ...args) {
  const fn = this;
  const con = cn || window;
  con.fn = fn;
  // const arg = [...arguments].slice(1);
  let result = con.fn(...args);
  delete con.fn;
  return result;
}

const obj = {
  name: '111',
}
function say(args) {
  console.log(this.name, ...args);
}

say.myCall(obj, 1, 2, 3);