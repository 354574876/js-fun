class SortedStack {
    constructor() {
        this.list = [];
    }
    push(val) {
        if (this.list.length === 0) {
            this.list.push(val);
        }
        else if (val <= this.peek()) {
            this.list.push(val);
        }
        else {
            let temList = [];
            while (true) {
                if (!this.isEmpty() && val > this.peek()) {
                    temList.push(this.pop());
                }
                else {
                    this.list.push(val);
                    break;
                }
            }
            while (temList.length) {
                this.list.push(temList.pop());
            }
        }
    }
    pop() {
        return this.isEmpty() ? 0 : this.list.pop();
    }
    peek() {
        return this.isEmpty() ? -1 : this.list[this.list.length - 1];
    }
    isEmpty() {
        return this.list.length === 0;
    }
}
var obj = new SortedStack();
obj.push(4);
obj.push(8);
obj.push(1);
obj.push(5);
obj.push(3);
obj.push(2);
obj.push(6);
obj.push(9);
console.log(1, obj);
