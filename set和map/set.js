
// // 1、实现一个set
// // 2、处理特殊场景  NaN

// @TODO
// 3、不仅要考虑传参数为数组，可迭代对象都可以作为参数，字符串也可以。 for of
const NaNSymbol = Symbol(NaN);
class Set {
  _values = [];
  size = 0;
  constructor(data) {
    data && data.forEach(it => {
      this.add(it);
    })
  }
  encodeVal(value) {
    return value !== value ? NaNSymbol : value;
  }
  decodeVal(value) {
    return value === NaNSymbol ? NaN : value;
  }
  add(value) {
    value = this.encodeVal(value);
    if (this._values.indexOf(value) === -1) {
      this._values.push(value);
      ++this.size;
    }
    return this;
  }
  has(value) {
    value = this.encodeVal(value);
    return this._values.indexOf(value) !== -1;
  }
  delete(value) {
    value = this.encodeVal(value);
    const idx = this._values.indexOf(value);
    if (idx > -1) {
      this._values.splice(idx, 1);
      --this.size;
      return true;
    } else { return false; }
  }

  clear() {
    this._values = [];
    this.size = 0;
  }
}


// (function () {
//   function Set(data) {
//     this._values = [];
//     this.size = 0;
//     data && data.forEach(it => {
//       this.add(it);
//     })
//   }
//   const NaNSymbol = Symbol(NaN);
//   function encodeVal(value) {
//     return value !== value ? NaNSymbol : value;
//   }
//   function decodeVal(value) {
//     return value === NaNSymbol ? NaN : value;
//   }
//   Set.prototype.add = function (value) {
//     value = encodeVal(value);
//     if (this._values.indexOf(value) === -1) {
//       this._values.push(value);
//       ++this.size;
//     }
//     return this;
//   }
//   Set.prototype.has = function (value) {
//     value = encodeVal(value);
//     return this._values.indexOf(value) !== -1;
//   }
//   Set.prototype.delete = function (value) {
//     value = encodeVal(value);
//     const idx = this._values.indexOf(value);
//     if (idx > -1) {
//       this._values.splice(idx, 1);
//       --this.size;
//       return true;
//     } else { return false; }
//   }

//   Set.prototype.clear = function () {
//     this._values = [];
//     this.size = 0;
//   }
//   // go.Set = Set;

// })();

let set = new Set([1, 2, 3, 1, NaN, NaN]);
// set.add(5);
// let set = new Set('India');
console.log(set.has(NaN));
// set.delete(2);
// set.clear();
console.log(set);


// set数组去重

function depumt(array) {
  const result = Array.from(new Set(array))
  return result;
}

// console.log(depumt([1, 2, 2, 3, 3, 4]));

function Person(name) {
  this.name = name;
}
Person.prototype.sayHi = function () {
  console.log('hi' + this.name)
}

let person = new Person('jack');
person.sayHi();
console.log(person);

// 思考：构造函数和class模式创建对象有什么区别？ 对象创建几种方法