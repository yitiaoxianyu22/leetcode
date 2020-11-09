/**
 Write a function that takes a string as input and reverse only the vowels of a string.

 Example 1:

 Input: "hello"
 Output: "holle"
 Example 2:

 Input: "leetcode"
 Output: "leotcede"
 */

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let s1 = s.split('')
    let left = 0,
        right = s1.length-1,
        vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']),
        temp = '',
        leftFlag = false,
        rightFlag = false;
    while(left<right) {
        leftFlag = vowels.has(s1[left]);
        rightFlag = vowels.has(s1[right]);
        if(leftFlag && rightFlag){
            temp = s1[left];
            s1[left] = s1[right];
            s1[right] = temp
            left++;
            right--;
            continue
        }
        if(!leftFlag) left++;
        if(!rightFlag) right--;

    }
    return s1.join('')
};
console.log(reverseVowels('leetcode'))
