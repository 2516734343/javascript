/**
 * 浅拷贝对象
 * @param {*} obj 
 * @returns 
 */
function copy(obj) {
  if (typeof obj !== 'object') {
    return;
  }
  let newObj = obj instanceof Array ? [] : {};
  for (let key in obj) { // 拷贝对象属性
    if (obj.hasOwnProperty(key)) {
      newObj[key] = obj[key]
    }
  }
  return newObj;
}

/**
 * 深拷贝
 * @param {*} obj 
 */
function deepCopy(obj) {
  if (typeof obj !== 'object') { // 其他数据类型
    return obj;
  }
  let newObj = obj instanceof Array ? [] : {};
  for (let key in obj) { // 拷贝对象属性
    if (obj.hasOwnProperty(key)) {
      newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key]
    }
  }
  return newObj;
}