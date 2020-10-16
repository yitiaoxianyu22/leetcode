/*
Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.

Note:

The length of both num1 and num2 is < 5100.
Both num1 and num2 contains only digits 0-9.
Both num1 and num2 does not contain any leading zero.
You must not use any built-in BigInteger library or convert the inputs to integer directly.
 */

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
    let len1 = num1.length, len2 = num2.length, temp = 0, res = ''
    while (len1 || len2) {
        if (len1) {
            temp += +num1[--len1]
        }
        if (len2) {
            temp += +num2[--len2]
        }
        res = temp % 10 + res;
        temp = temp > 9 ? 1 : 0
    }
    if (temp) res = 1 + res;
    return res
};
console.log(addStrings('26452','16'))
