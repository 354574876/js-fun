function _new(target, ...args) {
  const obj = Object.create(target.prototype)
  let result = target.apply(obj, args)
  if (
    (typeof result === 'object' && result !== null) ||
    typeof result === 'function'
  ) {
    return result
  }
  return obj
}

function User(name, age) {
  this.name = name
  this.age = age
}

const user = _new(User, 'man', 18)

const man = new User('1', 2)
console.log(man)
