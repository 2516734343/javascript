
function Promise(callback) {
  this.status = 'pendding';
  this.value = '';
  // this.onFuillfiled = null;
  // this.onRejected = null;
  this.onFuillfiledCallbacks = [];
  this.onRejectedCallbacks = [];

  resolve = (newValue) => {
    if (this.status !== 'pendding') { // 状态不可逆转
      return;
    }
    const self = this;
    setTimeout(() => {
      self.status = 'fullfiled';
      self.value = newValue;
      // self.onFuillfiled(self.value); // 执行成功的函数
      self.onFuillfiledCallbacks.forEach(callback => callback(self.value));
    })
  }

  reject = (newValue) => {
    if (this.status !== 'pendding') { // 状态不可逆转
      return;
    }
    const self = this;
    setTimeout(() => {
      self.status = 'rejected';
      self.value = newValue;
      // self.onRejected(self.value); // 执行失败的函数
      self.onRejectedCallbacks.forEach(callback => callback(self.value));
    })
  }
  callback(resolve, reject)
}
Promise.prototype.then = function (onFuillfiled, onRejected) {
  if (this.status === 'pendding') {
    // this.onFuillfiled = onFuillfiled;
    // this.onRejected = onRejected;
    this.onFuillfiledCallbacks.push(onFuillfiled);
    this.onRejectedCallbacks.push(onRejected);
  } else if (this.status === 'fullfiled') {
    console.log('then');
    onFuillfiled(this.value);
  } else {
    onRejected(this.value)
  }
  return this; // 链式调用
}

const p = new Promise((resolve, reject) => {
  resolve(2);
}).then((value) => {
  console.log(value);
  return 3;
}).then((value) => { // 如果要支持链式操作，则需要将回调函数存成数组的形式
  console.log(3);
})
// 串行执行异步操作  todo

// 实现promise.all

Promise.prototype.all = function (promises) {
  let result = [], count = 0;
  return new Promise((resolve, reject) => {
    for (let index = 0; index < promises.length; index++) {
      promises[index].then((value) => {
        result.push(value);
        count++;
        if (count === promises.length) {
          resolve(result);
        }
      }, (error) => {
        reject(error);
      })
    }
  })
}

// 实现promise.race

Promise.prototype.race = function (promises) {
  return new Promise((resolve, reject) => {
    for (let index = 0; index < promises.length; index++) {
      promises[index].then((value) => {
        resolve(value);
      }, (error) => {
        reject(error);
      })
    }
  })
}
class Parent {
  name = '111';
  constructor(sex, name) {
    this.sex = sex;
    this.name = name;
  }
}

class Child extends Parent {
  name = 'xxx';
  constructor(age, sex, name) {
    super(sex, name);// 相当于执行了父类的构造函数
    this.age = age;
    // this.sex = 'nv';
    this.sayHello = function () {
      console.log(111);
    }
  }
  say() {
    console.log('say');
  }
  get weight() {
    console.log('get');
  }
  set weight(value) {
    console.log(value);
  }
}
const parent = new Parent('woman', 'mmmm');
console.log(parent);
const child = new Child(20, 'man', 'mmm');
console.log(child);
console.log(child.name);
console.log(child.sex);
child.say();