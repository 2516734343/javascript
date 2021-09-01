// 实现一个EventEmitter，发布订阅模式

// 用法
// on('eventName', callback);
// emmit('eventName', arg1, arg2)


// // 实现理解：
// listener: {
//   eventName: [fn1, fn2, fn3]
// }


// 实现
class EventEmitter {
  // 订阅者 监听者
  constructor() {
    this.listener = {};
  }
  // 订阅事件
  on(type, callback) {
    if (!this.listener[type]) { // 第一次注册不存在时，初始化数组，再push事件
      this.listener[type] = [];
    }
    this.listener[type].push(callback);
  }
  // 发布事件
  emmit(type, ...args) {
    if (this.listener[type]) {
      this.listener[type].forEach(callback => callback(...args))
    }
  }
  // 移除某个事件，取消监听
  off(type, callback) {
    if (this.listener[type]) {
      const index = this.listener[type].findIndex(call => call === callback);
      if (index !== -1) {
        this.listener[type].splice(index, 1);
      }
      if (this.listener[type].length === 0) {
        // Reflect.deleteProperty(this.listener, type);
        delete this.listener[type]
      }
    }
  }
  // 移除某个事件的所有监听
  offll(type) {
    if (this.listener[type]) {
      // Reflect.deleteProperty(this.listener, type);
      delete this.listener[type]
    }
  }
}

const emmit = new EventEmitter();
emmit.on('sub', function (age) {
  console.log(age);
});
emmit.emmit('sub', 18);