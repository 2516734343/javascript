

function myNew() {
  let obj = {};
  let constructor = arguments[0];
  let args = [...arguments].slice(1);
  obj.__proto__ = constructor.prototype;
  let res = constructor.call(obj, ...args);
  return typeof res === 'object' ? res : obj;
}