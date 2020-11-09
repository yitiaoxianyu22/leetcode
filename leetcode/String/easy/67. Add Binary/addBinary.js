/**
 Given two binary strings, return their sum (also a binary string).

 The input strings are both non-empty and contains only characters 1 or 0.

 Example 1:

 Input: a = "11", b = "1"
 Output: "100"
 Example 2:

 Input: a = "1010", b = "1011"
 Output: "10101"
 */

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let anum = BigInt('0b'+a)
    let bnum = BigInt('0b'+b)
    return (anum+bnum).toString(2)

};
console.log(addBinary("10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101",
    "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"))
console.log(parseInt("10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101",2))
