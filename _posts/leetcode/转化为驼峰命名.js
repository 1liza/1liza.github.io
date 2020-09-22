/**
 * 转化为驼峰命名
 * toUpperCase是将字符串全部转成大写
 * +，?，*，{n}，{n,}，{n,m}会贪心匹配，所以不能写/-\w+/
 */
var s1 = "get-element-by-id"

// 转化为 getElementById
var f = function(s) {
    return s.replace(/-\w/g, function(x) {
        return x.slice(1).toUpperCase()
    })
}

var f1 = function(s){
    return s.replace(/-(\w)/g, (match, word)=>word.toUpperCase())
}
console.log(f1(s1))