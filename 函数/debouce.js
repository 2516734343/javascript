var count = 1;
var container = document.getElementById('container');


function getUserAction() {
  console.log(count);
  container.innerHTML = count++;
};
container.addEventListener('mousemove', debouce(getUserAction, 1000, true), false)
// container.onmousemove = debouce(getUserAction, 1000, false);

// 1. 实现一个基本的
// 2. 考虑this指向
// 3. 考虑传参
// 4. 立即执行,可以加一个immediate
function debouce(func, wait, immediate) {
  let timer = null;
  return function () {
    const context = this;
    const args = [...arguments];
    if (timer) {
      clearTimeout(timer);
    }
    if (immediate) {
      // 没有定时器，首次执行
      if (!timer) {
        func.apply(context, args)
      }
      clearTimeout(timer);
      // 设置定时器,延迟执行
      timer = setTimeout(function () {
        func.apply(context, args);
        timer = null;
      }, wait);
    } else {
      timer = setTimeout(function () {
        func.apply(context, args)
      }, wait);
    }
  }
}