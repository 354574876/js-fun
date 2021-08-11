function longestCommonPrefix(strs) {
    let commonPre = strs[0];
    for (let i = 1; i < strs.length; i++) {
        commonPre = commonPrefix(commonPre, strs[i]);
        if (!commonPre) {
            break;
        }
    }
    return commonPre;
}
function commonPrefix(pre, next) {
    let length = Math.min(pre.length, next.length);
    let index = 0;
    while (index < length && pre[index] === next[index]) {
        index++;
    }
    return index ? pre.substring(0, index) : "";
}
