// typeof
// Object.prototype.toString

// 实现一个判断数据类型的函数

function isType(target) {
  // null undefined处理
  if (target == null) {
    return target;
  }
  // 对象用Object.prototype.toString判断
  if (typeof target === 'object' || typeof target === 'function') {
    let result = Object.prototype.toString(target);
    return result.replace(/\[|\]/g, "").split(" ")[1].toLowerCase();
  } else { // 基本数据类型用typeof
    return typeof target;
  }
}