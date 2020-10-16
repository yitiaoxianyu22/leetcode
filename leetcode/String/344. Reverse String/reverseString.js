/**
 Write a function that reverses a string. The input string is given as an array of characters char[].
 Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
 You may assume all the characters consist of printable ascii characters.
  
 Example 1:
 Input: ["h","e","l","l","o"]
 Output: ["o","l","l","e","h"]
 Example 2:
 Input: ["H","a","n","n","a","h"]
 Output: ["h","a","n","n","a","H"]
 */

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    debugger
    let left = 0,right = s.length-1
    while (left<right){
        [s[left],s[right]] = [s[right],s[left]]
        left++;
        right--
    }
    return s
};
console.log(reverseString(["h","e","l","l","o"]))
