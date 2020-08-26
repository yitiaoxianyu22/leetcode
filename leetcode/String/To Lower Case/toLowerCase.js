/**
 Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.

 Example 1:

 Input: "Hello"
 Output: "hello"
 Example 2:

 Input: "here"
 Output: "here"
 Example 3:

 Input: "LOVELY"
 Output: "lovely"
 */

//思路 判断是不是大写字母,是的获取ascii码。加上32转成字符，不是的直接拼接即可
/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
    str = str.trim();
    let newStr = '';
    for(let i=0;i<str.length;i++){
        let code = str.charCodeAt(i)
        if(code>=65 && code<=90){
            newStr += String.fromCharCode(code+32)
            continue
        }
        newStr += str[i]
    }
    return newStr
};
console.log(toLowerCase('here'))
