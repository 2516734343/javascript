// 一个类只能有一个实例

function Person() {

  if (!Person.instance) {
    Person.instance = this;
  }
  return Person.instance;
}

const person1 = new Person();
const person2 = new Person();
console.log(person1 === person2);


const Universe = (function () {
  let instance = null;
  const Universe = function () {
    if (instance) return instance;
    instance = this;
    return instance;
  }
  return Universe;


})()


const universe1 = new Universe();
const universe2 = new Universe();
console.log(universe1 === universe2);