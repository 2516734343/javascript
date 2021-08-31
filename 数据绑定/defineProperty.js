// defineProperty 实现数据绑定

(function () {
  function watch(obj, keys, callback) {
    let value = obj[keys];
    Object.defineProperty(obj, keys, {
      get: function () {
        return value;
      },
      set: function (newVal) {
        value = newVal;
        callback(newVal);
      }
    })
    if (value) {
      obj[keys] = value;
    }
  }
  global.watch = watch;
})()

let obj = {
  name: 'xlj',
  age: 2,
}
watch(obj, 'name', function (value) {
  console.log(value, '----')
})
watch(obj, 'age', function (value) {
  console.log(value)
})