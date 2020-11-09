/**
 Given an integer n, add a dot (".") as the thousands separator and return it in string format.

  

 Example 1:

 Input: n = 987
 Output: "987"
 Example 2:

 Input: n = 1234
 Output: "1.234"
 Example 3:

 Input: n = 123456789
 Output: "123.456.789"
 Example 4:

 Input: n = 0
 Output: "0"
  

 Constraints:

 0 <= n < 2^31
 */


/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function(n) {
    let nStr = n.toString();
    if(nStr.length<=3) return n.toString();
    let rest = '';
    while (nStr.length>3){
        rest = '.'+ nStr.substr(nStr.length-3,3)+rest
        nStr = nStr.substring(0,nStr.length-3)
    }
    return nStr+rest
};
thousandSeparator(12345678910)
