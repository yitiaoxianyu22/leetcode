/**
 Write a function to find the longest common prefix string amongst an array of strings.

 If there is no common prefix, return an empty string "".

  

 Example 1:

 Input: strs = ["flower","flow","flight"]
 Output: "fl"
 Example 2:

 Input: strs = ["dog","racecar","car"]
 Output: ""
 Explanation: There is no common prefix among the input strings.
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(!strs.length) return '';
    let cp = '';
    for(let index = 0;index<strs[0].length;index++){
        for(let i=1;i<strs.length;i++){
            if(index>strs[i].length || strs[i][index]!==strs[0][index]){
                return cp
            }
        }
        cp += strs[0][index]
    }
    return cp

};
console.log(longestCommonPrefix(["dog","racecar","car"]))
