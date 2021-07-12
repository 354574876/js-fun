## Promise 相关知识点

### 叙 Event loop
* 一开始整个脚本作为一个宏任务执行
* 执行过程中同步代码直接执行，宏任务进入宏任务队列，微任务进入微任务队列
* 当前宏任务执行完出队，检查微任务列表，有则依次执行，直到全部执行完
* 执行浏览器UI线程的渲染工作
* 检查是否有Web Worker任务，有则执行
* 执行完本轮的宏任务，回到2，依此循环，直到宏任务和微任务队列都为空

##微任务包括##：MutationObserver、Promise.then()或catch()、Promise为基础开发的其它技术，比如fetch API、V8的垃圾回收过程、Node独有的process.nextTick。
##宏任务包括##：script 、setTimeout、setInterval 、setImmediate 、I/O 、UI rendering

### 例子

```js

```

#### 嵌套
```js
setTimeout(() => {
  console.log('timer1');
  Promise.resolve().then(() => {
    console.log('promise')
  })
}, 0)
setTimeout(() => {
  console.log('timer2')
}, 0)
console.log('start')
```
                    
执行结果：
```js
start
timer1
promise
timer2
```

#### 多层嵌套
```js
Promise.resolve().then(() => {
  console.log('promise1');
  const timer2 = setTimeout(() => {
    console.log('timer2')
  }, 0)
});
const timer1 = setTimeout(() => {
  console.log('timer1')
  Promise.resolve().then(() => {
    console.log('promise2')
  })
}, 0)
console.log('start');

```

执行结果：
```js
start
promise1
timer1
promise2
timer2
```

50，10，20，60，70