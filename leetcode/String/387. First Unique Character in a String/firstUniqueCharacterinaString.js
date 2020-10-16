/**

Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode"
return 2.
 */

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    // let index;
    // for (let i = 0;i<s.length;i++){
    //     index = (s.substring(0,i)+s.substr(i+1)).indexOf(s[i])
    //     if(index === -1) return i
    // }
    // return -1
    let idx = s.length;
    for (let ch of 'qwertyuiopasdfghjklzxcvbnm') {
        const left = s.indexOf(ch);
        if (left !== -1 && left === s.lastIndexOf(ch)) {
            idx = Math.min(idx, left)
        }
    }
    return idx === s.length ? -1 : idx;
    // for (let i = 0; i < s.length; i++) {
    //     if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
    //         return i
    //     }
    // }
    // return -1
};
console.log(firstUniqChar('leetcode'))
