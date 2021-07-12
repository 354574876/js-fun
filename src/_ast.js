/**
 * AST（Abstract Syntax Tree）：抽象语法树
 * 
 */

const recast = require('recast')

const code =
  `
  function add(a, b) {
    return a +
      // 有什么奇怪的东西混进来了
      b
  }
  `


  const ast = recast.parse(code).program.body[0]