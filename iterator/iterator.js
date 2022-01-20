
let obj = {
  name: 20,
  age: 1,
  [Symbol.iterator]() {
    const self = this;
    let index = 0;
    let keys = Object.keys(this);
    return {
      next: function () {
        return {
          value: index >= keys.length ? undefined : self[keys[index++]],
          done: index >= keys.length
        }
      }
    }
  }
}
for (let key of obj) {
  console.log(key);
}