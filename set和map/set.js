
// 实现一个set
class Set {
  _values = [];
  size = 0;
  constructor(data) {
    data && data.forEach(it => {
      this.add(it);
    })
  }
  add(value) {
    if (this._values.indexOf(value) === -1) {
      this._values.push(value);
      ++this.size;
    }
    return this;
  }
  has(value) {
    return this._values.indexOf(value) !== -1;
  }
  delete(value) {
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
let set = new Set([1, 2, 3, 1]);
set.add(5);
console.log(set.has(4));
set.delete(2);
set.clear();
console.log(set);