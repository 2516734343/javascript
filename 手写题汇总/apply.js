Function.prototype.myApply = function (cn, ...args) {
  const fn = this;
  const con = cn || window;
  con.fn = fn;
  // const args = [...arguments].slice(1);
  // console.log(args);
  let result = con.fn(args);
  delete con.fn;
  return result;
}

const obj = {
  name: '111',
}
function say(args) {
  // console.log(this.name, ...args);
}

say.myApply(obj, 1, 2, 3);