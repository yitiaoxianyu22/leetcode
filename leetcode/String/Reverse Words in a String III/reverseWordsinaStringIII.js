/**
 Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

 Example 1:
 Input: "Let's take LeetCode contest"
 Output: "s'teL ekat edoCteeL tsetnoc"
 */


/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let sArr = s.split(' ');
    let sReverse = '';
    for(let i=0;i<sArr.length;i++){
        sReverse += sArr[i].split('').reverse().join('')+' '
    }
    return sReverse.trim()
};
console.log(reverseWords("Let's take LeetCode contest"))
