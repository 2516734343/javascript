function instanceOF(left, right) {
  let le = left.__proto__;
  let ri = right.prototype;
  while (le) {
    if (le === ri) {
      return true;
    }
    le = le.__proto__;
  }
  return false;
}


function Car() {
  //
}
let car = new Car();
console.log(instanceOF(car, Object));
console.log(instanceOF(car, Car));