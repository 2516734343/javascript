class TrackblePromise extends Promise {
  constructor(excutor) {
    const notifyHandles = [];
    super((resolve, reject) => {
      return excutor(resolve, reject, (status) => {
        console.log(status);
        notifyHandles.map(handler => handler(status))
      })
    })
    this.notifyHandles = notifyHandles;
  }
  notify(notifyHandler) {
    this.notifyHandles.push(notifyHandler);
    return this;
  }
}

let p = new TrackblePromise((resolve, reject, notify) => {
  function countdown(x) {
    if (x > 0) {
      notify(x + 'remaing');
      setTimeout(() => countdown(x - 1), 1000)
    } else {
      resolve();
    }
  }
  countdown(5);
})

p.notify((x) => setTimeout(console.log, 0, 'progress:', x));
p.then(() => setTimeout(console.log, 0, 'finished'));