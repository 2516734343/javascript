
var count = 1;
var container = document.getElementById('container');


function getUserAction() {
  console.log(count);
  container.innerHTML = count++;
};
container.addEventListener('mousemove', throttle3(getUserAction, 1000), false)


// 使用时间戳： 第一次会立即执行，停止事件触发后不会再执行事件
function throttle(fn, wait) {
  let previous = 0;
  return function () {
    const context = this;
    let now = new Date();
    if (now - previous > wait) { // 当前时间大于约定时间
      fn.apply(context, arguments);
      previous = now;
    }
  }
}


// 使用定时器：第一次不会立即执行，停止事件触发后的一段时间会再执行一次。

function throttle1(fn, wait) {
  let timer, context, args;
  return function () {
    context = this;
    args = arguments;
    if (!timer) { // 如果定时器存在，则不执行,不存在，则执行定时器，执行函数，
      timer = setTimeout(function () {
        timer = null;
        fn.apply(context, args);
      }, wait)
    }
  }
}

function throttle2(func, delay) {
  let run = true; //  是否执行事件
  return function () {
    if (!run) {
      return  // 如果开关关闭了，那就直接不执行下边的代码
    }
    run = false // 持续触发的话，run一直是false，就会停在上边的判断那里
    setTimeout(() => {
      func.apply(this, arguments)
      run = true // 定时器到时间之后，会把开关打开，我们的函数就会被执行
    }, delay)
  }
}


function throttle3(func, wait) {
  let timer, previous = 0,
  return function () {
    let context = this, args = [].slice.call(arguments);
    let now = new Date();
    if (now - previous >= wait) {
      func.apply(context, args);
      previous = now;
    } else {
      // if (timer) {
      //   return;
      // }
      // timer = setTimeout(function () {
      //   func.apply(context, args);
      //   timer = null;
      // }, wait)
    }
  }
}