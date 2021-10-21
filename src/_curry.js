// export function _add () {
//   args
  
// }



// const add = _curry(() => {})


// add(1, 2, 3)
// add(1)(2)(3)


var object = {
  a: [{b: {c: 3}}]
}
function _get(target, path, c) {
  if (!path) {
    return c
  }
  if (typeof path === 'string') {
    path = path.replace(/\[/g, '.').replace(/\]/g, '').split('.')
  }
  return path.reduce((a, b) => {
    return a[b] || {}
  }, target)
}


console.log(_get(object, 'a[0].b.c')) // 3
console.log(_get(object, ['a', 0, 'b', 'c'])) // 3
console.log(_get(object, 'a.b.c', 'default'))