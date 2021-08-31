// 分别利用defineproterty和proxy实现数据绑定

function watch(target) {
  return new Proxy(target, {
    get: function (target, key, revicer) {
      console.log('get');
      return Reflect.get(target, key, revicer);
    },
    set: function (target, key, value, revicer) {
      console.log('set');
      console.log(revicer);
      return Reflect.set(target, key, value, revicer);
    }
  })
}


const obj = {
  name: 'xlj',
  age: 5,
}
const proxy = watch(obj);
proxy.age = 10;