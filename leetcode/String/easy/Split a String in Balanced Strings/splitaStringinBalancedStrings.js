/**
 Balanced strings are those who have equal quantity of 'L' and 'R' characters.

 Given a balanced string s split it in the maximum amount of balanced strings.

 Return the maximum amount of splitted balanced strings.

  

 Example 1:

 Input: s = "RLRRLLRLRL"
 Output: 4
 Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.
 Example 2:

 Input: s = "RLLLLRRRLR"
 Output: 3
 Explanation: s can be split into "RL", "LLLRRR", "LR", each substring contains same number of 'L' and 'R'.
 Example 3:

 Input: s = "LLLLRRRR"
 Output: 1
 Explanation: s can be split into "LLLLRRRR".
 Example 4:

 Input: s = "RLRRRLLRLL"
 Output: 2
 Explanation: s can be split into "RL", "RRRLLRLL", since each substring contains an equal number of 'L' and 'R'
*/


/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {

    let ln = 0,rn=0,subStrNum = 0;

    for(let i=0;i<s.length;i++) {
        s[i] === 'L'?ln++: rn++;
        if(ln === rn){
            subStrNum++;
            ln=rn=0
        }
    }
    return subStrNum
};
console.log(balancedStringSplit('RLRRRLLRLL'))


