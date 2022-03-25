
function MyPromise(callback) {
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
  callback(resolve, reject);
}
MyPromise.prototype.then = function (onFuillfiled, onRejected) {
  let backPromise;   // 链式调用
  if (this.status === 'pendding') {
    // this.onFuillfiled = onFuillfiled;
    // this.onRejected = onRejected;
    return backPromise = new MyPromise((resolve, reject) => {
      this.onFuillfiledCallbacks.push((value) => {
        try {
          let x = onFuillfiled(value);
          // resolve(x);
          resolvePromise(x, resolve, reject);
        } catch (e) {
          reject(e);
        }
      });
      this.onRejectedCallbacks.push((value) => {
        try {
          let x = onRejected(value);
          // resolve(x);
          resolvePromise(x, resolve, reject);
        } catch (e) {
          reject(e);
        }
      });
    });
  }
  if (this.status === 'fullfiled') {
    return backPromise = new MyPromise((resolve, reject) => {
      try {
        let res = onFuillfiled(this.value);
        // 处理返回值
        resolvePromise(res, resolve, reject);
      } catch (e) {
        reject(e);
      }
    });
  } else {
    return backPromise = new MyPromise((resolve, reject) => {
      try {
        let res = onRejected(this.value);
        // 处理返回值
        resolvePromise(res, resolve, reject);
      } catch (e) {
        reject(e);
      }
    });
  }
}

function resolvePromise(back, resolve, reject) {
  if (back instanceof MyPromise) {
    if (back.status === 'pendding') {
      back.then((data) => {
        resolvePromise(data, resolve, reject);
      }, err => {
        reject(err);
      })
    } else {
      back.then(resolve, reject);
    }
  } else {
    resolve(back);
  }
}

let readFile = function (flag, value) {
  return new MyPromise((resolve, reject) => {
    if (flag) {
      resolve(value);
    } else {
      reject('field');
    }
  })
}
const p = new MyPromise((resolve, reject) => {
  resolve(2);
}).then((value) => {
  console.log(value, '-----');
  return readFile(true, '3---');
}).then((value) => { // 如果要支持链式操作，则需要将回调函数存成数组的形式
  console.log(value, '-----1');
})
// console.log(p);
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
