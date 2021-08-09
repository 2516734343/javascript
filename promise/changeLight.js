// 使用Promise实现红绿灯交替重复亮
// 红灯3秒亮一次，黄灯2秒亮一次，绿灯1秒亮一次；如何让三个灯不断交替重复亮灯？（用Promise实现）三个亮灯函数已经存在：
// 期约的串行执行
function red() {
  console.log('red');
}
function green() {
  console.log('green');
}
function yellow() {
  console.log('yellow');
}

// let p1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve(), 3000)
// })
// let p2 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve(), 2000)
// })
// let p3 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve(), 1000)
// })
// p = new Promise((resolve, reject) => {
//   setTimeout(resolve, 0)
// })

// function execute() {
//   p1.then(() => {
//     red()
//   })
//   p2.then(() => {
//     green()
//   })
//   p3.then(() => {
//     yellow();
//   })
// }


function light(fn, delay) {
  return new Promise(resolve => {
    setTimeout(() => {
      fn();
      resolve()
    }, delay)
  })
}

let step = function () {
  Promise.resolve().then(() => {
    return light(red, 3000)
    // return p1.then(() => {
    //   red()
    // })
  }).then(() => {
    return light(green, 2000)
    // return p2.then(() => {
    //   green();
    // })
  }).then(() => {
    // return p3.then(() => {
    //   yellow();
    // })
    return light(yellow, 1000)
  }).then(() => {
    return step();
  })
}
step();