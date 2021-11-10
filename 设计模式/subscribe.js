// 发布订阅模式

// 发布者和订阅者互补干扰，靠事件调度中心联系。发布者在事件中心发布事件，订阅者订阅事件，当自己订阅的事件发生了，就作出响应


class EventEmitter {

  constructor() {
    this.events = {}; // 事件调度中心
  }

  // 发布事件 trigger
  publish(type, ...args) {
    if (this.events[type]) {
      this.events[type].forEach(cb => {
        cb(...args);
      })
    }
  }

  // 订阅者 on

  subscribe(type, cb) {
    if (!this.events[type]) {
      this.events[type] = [];
    }
    this.events[type].push(cb)
  }

  // 移除某个事件的一个订阅行为
  off(type, cb) {
    if (this.events[type]) {
      const idx = this.events[type].findIndex(it => it === cb);
      if (idx > -1) {
        this.events[type].splice(idx, 1);
      }
      if (this.events[type].length === 0) {
        delete this.events[type];
      }
    }
  }

  // 移除某个事件的所有订阅行为
  unSubscribeAll(type) {
    if (this.events[type]) {
      delete this.events[type];
    }
  }
}


