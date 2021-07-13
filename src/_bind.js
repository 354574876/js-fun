function A () {
  this.name = 'a'
}
A.prototype.say = function () {
  console.log(this.name)
}

function B () {
  this.name = 'b'
  this.say = A.say.bind(this)
}

const a = new A()
const b = new B()
b.say()

const _bind = function() {
  return function () {
  
  }
}
//
// export default _bind
// 我想说，时光兜兜转转，我感谢与你的这次遇见
// 余生，请多赐教。
// 好好生活慢慢爱你，不早不晚刚好是你。
// 人生太长，我想挽着你的胳膊，陪你看夕阳。
// 我只有两心愿 你在身边 在你身边