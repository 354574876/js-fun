function A() {
  this.name = 'a'
}
A.prototype.say = function () {
  console.log(this.name)
}

function B() {
  this.name = 'b'
  this.say = A.say.bind(this)
}

const a = new A()
const b = new B()
b.say()

const _bind = function () {
  return function () {}
}

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {number}
 */
var kthToLast = function (head, k) {
  let pre = null
  let current = head
  let count = 0
  while (current) {
    const next = current.next
    current.next = pre
    pre = current
    current = next
  }
  while (pre) {
    count++
    if (count === k) {
      return pre.val
    }
    pre = pre.next
  }
}
