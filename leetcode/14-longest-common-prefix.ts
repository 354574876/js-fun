/**
 * 求最长公共前缀
 * @param strs: Array[string]
 */
function longestCommonPrefix(strs: string[]): string {
  let commonPre: string = strs[0];
  for (let i = 1; i < strs.length; i++) {
    commonPre = commonPrefix(commonPre, strs[i]);
    if (!commonPre) {
      break;
    }
  }
  return commonPre;
}
function commonPrefix(pre: string, next: string): string {
  let length: number = Math.min(pre.length, next.length);
  let index: number = 0;
  while (index < length && pre[index] === next[index]) {
    index++;
  }
  return index ? pre.substring(0, index) : "";
}
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
