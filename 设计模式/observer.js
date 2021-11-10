// 观察者模式  被观察者维护一个观察者列表，当其更新时，通知观察者们执行相应操作。


// 观察者
class Observer {

  constructor(cb) {
    if (typeof cb === 'function') {
      this.cb = cb;
    } else {
      throw Error('Observer构造器必须传入函数类型')
    }
  }

  update() {
    this.cb();
  }
}

// 被观察者

class Subject {
  constructor() {
    this.oberverList = [];
  }

  addOberver(oberver) {
    this.oberverList.push(oberver);
  }

  notify() {
    this.oberverList.forEach(ob => {
      ob.update()
    })
  }
}