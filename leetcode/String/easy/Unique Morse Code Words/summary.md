## reduce()
数组的累加器方法，不改变原数组

参数：

| 参数 | 说明 |
| ---- | ----|
| function(total,currentValue,index,arr) | 必需，用于执行每个数组元素的函数，total为初始值或者计算后的值，必需，currentValue为当前值，必需，其他两个非必须 |
| initValue |非必需，total的初始值，缺省值为数组中第一个元素|

回调函数中每次都必须有return，否则会默认返回undefined

## replace()

参数：

| 参数 | 说明 |
| ---- | ----|
| searchValue: string or RegExp | 要被替换的字符串或者要查找字符串的正则对象 |
| replacement  |可以是字符串也可以是函数，函数的话，对于每一个匹配的字符串都会调用这个函数，并返回替换的值|
