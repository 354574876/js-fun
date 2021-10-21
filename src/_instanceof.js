function _instanceof(value, target) {
  let targetProto = target.prototype
  value = value.__proto__
  // 遍历循环判断value的原型链
  while (true) {
    console.log(value)
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

// console.log(_instanceof(Object, Object))
// console.log(_instanceof(Function, Object))
console.log(_instanceof(Function, Function))

const list = [
  { id: 8, name: 6, pid: 4 },
  { id: 7, name: 6, pid: 4 },
  { id: 6, name: 6, pid: 5 },
  { id: 1, name: 1, pid: 0 },
  { id: 2, name: 2, pid: 1 },
  { id: 3, name: 3, pid: 2 },
  { id: 4, name: 4, pid: 2 },
  { id: 5, name: 5, pid: 3 },
]

const array2tree = array => {
  let temp = {}
  return array.reduce((pre, cur) => {
    if (!temp[cur.id]) {
      temp[cur.id] = { ...cur, children: [] }
    }
    if (cur.pid === 0) {
      pre.push(temp[cur.id])
    } else {
      if (!temp[cur.pid]) {
        temp[cur.pid] = {
          children: [],
        }
      }
      temp[cur.pid].children.push(temp[cur.id])
    }
    return pre
  }, [])
}

console.log(JSON.stringify(array2tree(list)))
