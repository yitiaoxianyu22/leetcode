/**
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

    An input string is valid if:

Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.
    Note that an empty string is also considered valid.

    Example 1:

Input: "()"
Output: true
Example 2:

Input: "()[]{}"
Output: true
Example 3:

Input: "(]"
Output: false
Example 4:

Input: "([)]"
Output: false
Example 5:

Input: "{[]}"
Output: true
 */


/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if(s.length === 0)
      return true;
  let arr = s.split("");
  let arr1 = [arr[0]];
  for(let i=1;i<arr.length;i++){
      if(isMatch(arr1[arr1.length-1],arr[i])){
          arr1.pop();
          continue;
      }
      arr1.push(arr[i])
  }
  return arr1.length === 0
};

function isMatch(par1,par2) {
    if(par1 === '(' && par2 === ')')
        return true;
    if(par1 === '[' && par2 === ']')
        return true;
    return par1 === '{' && par2 === '}';

}

let result = isValid('()[]{}');
console.log(result)
