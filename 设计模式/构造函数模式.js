
function Car(model, year, mails) {
  // 强制使用new 创建实例
  if (!(this instanceof Car)) {
    return new Car(model, year, mails);
  }
  this.model = model;
  this.year = year;
  this.mails = mails;
}
Car.prototype.output = function () {
  console.log(this.model, this.mails);
}

const car = new Car('xxx', 1, 20);
const car2 = Car('yyy', 1, 29);
console.log(car, car2);
car.output();
car2.output();