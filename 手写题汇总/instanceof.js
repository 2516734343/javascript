
function myInstanceOf(left, right) {
  let lt = left.__proto__;
  while (true) {
    if (lt !== right.prototype) {
      return false;
    }
    if (lt === right.prototype) {
      return true;
    }
    lt = lt.__proto__;
  }

}
const arr = [1, 2, 3];
console.log(myInstanceOf(arr, Array));