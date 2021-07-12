function _instanceof(value, target) {
  let targetProto = target.prototype
  value = value.__proto__
  // 遍历循环判断value的原型链
  while (true) {
    if (value === null) {
      return false
    }
    if (value === targetProto) {
      return true
    }
    // 获取父级的原型链
    value = value.__proto__
  }
}
