// 封装一个异步加载图片的方法

function loadImage(url) {
  new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = function () {
      resolve(url)
    }
    img.onerror = function () {
      reject('error')
    }
    img.src = url;
  })
}