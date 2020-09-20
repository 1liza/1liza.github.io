//清除字符串前后空格
let reg = /^\s*|\s*$/g
let ans = (' a bc d ').replace(reg, '')
console.log(ans)

//电子邮箱
reg = /^([0-9a-zA-Z_\-\.])+\@([0-9a-zA-Z_\-\.])+\.([a-zA-Z]){2,4}$/
reg = /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/
reg = /^(\w)+(\.\w+)*@(163.com|qq.com|42du.cn)$/
var email = "example@qq.com.cn.qq";
console.log(reg.test(email));  // true  复制代码
