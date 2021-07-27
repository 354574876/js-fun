class TreeNode {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.count = 1;
  }
}

class _Tree {
  constructor() {
    this.root = null
  }
  remove(data) {
  
  }
  insert(data) {
    const node = new TreeNode(data, null, null)
    if (this.root === null) {
      this.root = node
    } else {
      // 从根节点开始比较
      let currNode = this.root
      let parentNode = null
      while (true) {
        parentNode = currNode
        if (node.data < currNode.data) {
          currNode = currNode.left
          // 没有节点可以直接插入了
          if (!currNode) {
            parentNode.left = node
            break
          }
        } else if (node.data > currNode.data) {
          currNode = currNode.right
          // 没有节点可以直接插入了
          if (!currNode) {
            parentNode.right = node
            break
          }
        } else {
          // 相同的节点统计数量
          currNode.count++
          break
        }
      }
    }
  }
  findNode(data) {
    let current = this.root
    while (true) {
      if (data === current.data) {
        return current
      } else if(data < current.data){
        current = current.left
      } else {
        current = current.right
      }
    }
    return null
  }
}

const row = [15,5,9,10,2,8,40,3,54,33,4,5,7,8,9,19,18,25,16]
const tree = new _Tree()
for(let i = 0; i < row.length; i++) {
  tree.insert(row[i])
}

console.log(JSON.stringify(tree))

console.log(tree.findNode(25))