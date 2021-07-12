// 1. 原型链继承

function Animal() {
  this.function = ['eat', 'sleep', 'say']
}

Animal.prototype.say = function () {
  console.log(this.function)
  return this.name
}

function Dog() {
  // this.function = ['jump']
}

Dog.prototype = new Animal()

const dog = new Dog()

console.log(dog.function)
dog.say()

// 2. 借用构造函数

function Parent() {
  this.name = [1, 2, 3, 4]
}

function Child() {
  Parent.call(this)
}
