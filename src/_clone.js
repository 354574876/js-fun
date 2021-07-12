const mapTag = '[object Map]'
const setTag = '[object Set]'
const objectTag = '[object Object]'
const arrayTag = '[object Array]'
const argsTag = '[object Arguments]'

const dateTag = '[object Date]'
const regTag = '[object RegExp]'
const funTag = '[object Function]'
const boolTag = '[object Boolean]'
const numTag = '[object Number]'
const stringTag = '[object String]'
const stringTag = '[object Symbol]'
const errorTag = '[object Error]'

const deepTag = [mapTag, setTag, objectTag, arrayTag, argsTag]

const getType = value => Object.prototype.toString.call(value)

// const isObject = value =>
//   Object.prototype.toString.call(value) === '[object Object]'
const isDate = value =>
  Object.prototype.toString.call(value) === '[object Date]'
const isRegExp = value =>
  Object.prototype.toString.call(value) === '[object RegExp]'
const isFunction = value =>
  Object.prototype.toString.call(value) === '[object Function]'
const isArray = value =>
  Object.prototype.toString.call(value) === '[object Array]'

const _cloneBaseData = value => {
  const Ctor = value.constructor
  return new Ctor(+value)
}
const isObject = value =>
  value !== null && (typeof value === 'object' || typeof value === 'function')

const _clone = function (target) {
  const type = typeof target
  if (!isObject(target)) {
		return target
	}
	switch (getType(value)) {
		case 
	}
  if (isArray(target)) {
    return target.slice()
  } else {
    let assignObj = {}
    for (let props in target) {
      let value = target[props]
      if (isObject(value)) {
        assignObj[props] = _clone(value)
      } else if (isDate(value)) {
        assignObj[props] = new Date(value.getTime())
      } else if (isRegExp(value)) {
        assignObj[props] = new RegExp(value)
      } else if (isArray(value)) {
        assignObj[props] = value.slice()
      } else if (isFunction(value)) {
        assignObj[props] = value
      } else {
        assignObj[props] = value
      }
    }
    return assignObj
  }
}

let user = {
  age: 14,
  name: 'hello',
  say() {
    return this.age
  },
  birthday: new Date(),
  children: {
    age: 15,
    name: 'hello_child',
    birthday: new Date() + 1000,
  },
  // user: user,
}
user.user = user
console.log(_clone(user))
