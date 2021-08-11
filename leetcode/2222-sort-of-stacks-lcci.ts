class SortedStack {
  private list: number[] = []
  constructor() {}
  push(val: number): void {
    if (this.list.length === 0) {
      this.list.push(val)
    } else if (val <= this.peek()) {
      this.list.push(val)
    } else {
      let temList: number[] = []
      while (true) {
        if (!this.isEmpty() && val > this.peek()) {
          temList.push(this.pop())
        } else {
          this.list.push(val)
          break
        }
      }
      while (temList.length) {
        this.list.push(temList.pop())
      }
    }
  }

  pop(): number {
    return this.isEmpty() ? 0 : this.list.pop()
  }

  peek(): number {
    return this.isEmpty() ? -1 : this.list[this.list.length - 1]
  }

  isEmpty(): boolean {
    return this.list.length === 0
  }
}

/**
 * Your SortedStack object will be instantiated and called as such:
 * var obj = new SortedStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.isEmpty()
 */
var obj = new SortedStack()
obj.push(4)
obj.push(8)
obj.push(1)
obj.push(5)
obj.push(3)
obj.push(2)
obj.push(6)
obj.push(9)
console.log(1, obj)
