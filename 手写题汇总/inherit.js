

function inherit(target, origin) {
  let Fn = function () { };
  Fn.prototype = origin.prototype;
  target.prototype = Fn.prototype;
  target.prototype.constructor = target;
}

function Person() {

}

function Child() {
  Person.call(this);
}

Child.prototype = new Person();
Child.prototype.constructor = Child;