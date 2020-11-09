/**
 Given a string and an integer k, you need to reverse the first k characters for every 2k characters counting from the start of the string. If there are less than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and left the other as original.

 Example:
 Input: s = "abcdefg", k = 2
 Output: "bacdfeg"

 Restrictions:
 The string consists of lower English letters only.
 Length of the given string and k will in the range [1, 10000]
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
// var reverseStr = function(s, k) {
//     let s1,s2;
//     let sArr = [];
//     while(s.length>0){
//         s1 = s.substr(0,2*k);
//         if(s1.length<k){
//             sArr.push(...s1.split('').reverse())
//         }else {
//             s2 = s1.substr(0,k).split('');
//             sArr.push(...s2.reverse());
//             sArr.push(...s1.substr(k))
//         }
//         s = s.substr(s1.length)
//     }
//     return sArr.join('')
// };

var reverseStr = function(s,k){
    let reverseStr = ''
    for(let i=0;i<s.length;i+=2*k){
        reverseStr += s.substr(i,k).split('').reverse().join('') + s.substr(i+k,k)
    }
    return reverseStr
}
console.log(reverseStr("abcdefg", 7))
