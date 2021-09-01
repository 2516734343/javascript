// 实现一个观察者模式


class Observer {
  constructor(callback) {
    this.callback = callback;
  }
  update() {
    this.callback();
  }
}

class TargetObj {
  constructor() {
    this.observerQue = [];
  }
  addOberver(observer) {
    this.observerQue.push(observer);
  }
  notify() {
    this.observer.forEach(ob => ob.update())
  }
}

const observerCallback = function () {
  console.log('我被通知了')
}
const observer = new Observer(observerCallback)
const target = new TargetObj();
target.addOberver(observer);
target.notify();