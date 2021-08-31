// defineProperty 实现数据绑定

(function (global) {
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
})(this)

let obj = {
  name: 'xlj',
  age: 2,
  value: ''
}
watch(obj, 'name', function (value) {
  console.log(value, '----')
})
watch(obj, 'age', function (value) {
  console.log(value)
})

let input = document.getElementById('input');
watch(obj, 'value', function (value) {
  let div = document.getElementById('show');
  div.innerHTML = value;
  input.value = value;

})
input.addEventListener('input', function (e) {
  obj.value = e.target.value;
})
