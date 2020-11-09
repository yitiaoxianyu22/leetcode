/**

 Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

 Note: For the purpose of this problem, we define empty string as valid palindrome.

 Example 1:

 Input: "A man, a plan, a canal: Panama"
 Output: true
 Example 2:

 Input: "race a car"
 Output: false
 */

/**
思路:1.空串直接返回true；2.全部转为小写字母
 3.利用左右双指针往里缩，遇到标点符号跳过，这里用正则判断是否为字符和数字，如果左右指针不相等，直接返回false
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if(s.length === 0) return true;
    let sLCase = s.toLowerCase();
    let reg = /[a-z0-9]/;
    let left = 0,
        right = sLCase.length-1;
    while (left<right){
        if (!reg.test(sLCase[left])){
            left++;
            continue
        }
        if(!reg.test(sLCase[right])){
            right--;
            continue
        }
        if(sLCase[left] !== sLCase[right]) return false;

        left++;
        right--
    }
    return true
};

console.log(isPalindrome('race a car'))
