/**
 * 寄生组合式继承
 */
function inheritPrototype(target, origin) {
  function F() { };
  F.prototype = origin.prototype;
  let f = new F();
  f.constructor = target;
  target.prototype = f;
}