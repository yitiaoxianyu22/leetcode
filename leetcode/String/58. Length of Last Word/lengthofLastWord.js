/**
 Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word (last word means the last appearing word if we loop from left to right) in the string.

 If the last word does not exist, return 0.

 Note: A word is defined as a maximal substring consisting of non-space characters only.

 Example:

 Input: "Hello World"
 Output: 5
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.trim()
    let index = s.lastIndexOf(' ')
    let lastWord = s.substr(index+1)
    return lastWord.length

};
console.log(lengthOfLastWord("Hello World "))
