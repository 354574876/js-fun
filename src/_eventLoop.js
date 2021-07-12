const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("success");
    console.log("timer1");
  }, 1000);
  console.log("promise1里的内容");
});
const promise2 = promise1.then(() => {
  throw new Error("error!!!");
});
console.log("promise1", promise1);
console.log("promise2", promise2);
setTimeout(() => {
  console.log("timer2");
  console.log("promise1", promise1);
  console.log("promise2", promise2);
}, 2000);



/**
 * 分析执行结果
 * 难点分析：1. BBBB 和 DDDD的顺序容易搞反
 */
console.log("AAAA");
setTimeout(() => console.log("BBBB"), 1000);
const start = new Date();
while (new Date() - start < 3000) {}
console.log("CCCC");
setTimeout(() => console.log("DDDD"), 0);
new Promise((resolve, reject) => {
  console.log("EEEE");
  foo.bar(100);
})
.then(() => console.log("FFFF"))
.then(() => console.log("GGGG"))
.catch(() => console.log("HHHH"));
console.log("IIII");

// AAAA CCCC EEEE IIII HHHH BBBB DDDD