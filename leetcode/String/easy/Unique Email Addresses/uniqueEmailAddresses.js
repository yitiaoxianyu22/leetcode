/**

 Every email consists of a local name and a domain name, separated by the @ sign.

 For example, in alice@leetcode.com, alice is the local name, and leetcode.com is the domain name.

 Besides lowercase letters, these emails may contain '.'s or '+'s.

 If you add periods ('.') between some characters in the local name part of an email address,
 mail sent there will be forwarded to the same address without dots in the local name.
 For example, "alice.z@leetcode.com" and "alicez@leetcode.com" forward to the same email address.  (Note that this rule does not apply for domain names.)

 If you add a plus ('+') in the local name, everything after the first plus sign will be ignored.
 This allows certain emails to be filtered, for example m.y+name@email.com will be forwarded to my@email.com.  (Again, this rule does not apply for domain names.)

 It is possible to use both of these rules at the same time.

 Given a list of emails, we send one email to each address in the list.  How many different addresses actually receive mails?



 Example 1:

 Input: ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]
 Output: 2
 Explanation: "testemail@leetcode.com" and "testemail@lee.tcode.com" actually receive mails
 */

//思路：1.建立一个数组存放不同的email地址 2.对于所有的email地址按@拆分成数组，对于locale name用正则替换掉.，然后截取第一个+前面的
//字符串，再重新组装email地址，判断新数组中是否存在该数组，不存在就push，最后返回新数组的长度。

/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
    debugger
    let uniqueEmailAddrs = [];
    for (let i = 0; i < emails.length; i++) {
        let emailArr = emails[i].split('@');
        let index = emailArr[0].indexOf('+');
        let index1 = index === -1 ? emailArr[0].length : index;
        let newLocalName = emailArr[0].substring(0, index1).replace(/\./g, '')
        let newAddr = `${newLocalName}@${emailArr[1]}`;
        if (uniqueEmailAddrs.includes(newAddr)) {
            continue
        }
        uniqueEmailAddrs.push(newAddr)
    }
    return uniqueEmailAddrs.length
};

console.log(numUniqueEmails(["test.email+alex@leetcode.com","test.email.leet+alex@code.com"]))
