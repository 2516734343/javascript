// 使用Promise实现每隔1秒输出1,2,3
let arr = [1, 2, 3];
arr.reduce((p, x) => {
  return p.then(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(console.log(x)), 1000)
    })
  })
}, Promise.resolve())