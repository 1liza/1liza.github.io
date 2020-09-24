let template = '我是{{name}}，年龄{{age}}，性别{{sex}}';
let data = {
  name: '姓名',
  age: 18
}
console.log(render2(template, data)); // 我是姓名，年龄18，性别undefined

function render(template, data) {
    let reg = /\{\{(\w+)\}\}/;
    if(reg.test(template)) {
        let key = reg.exec(template)[1];
        template = template.replace(reg, data[key])
        return render(template, data)
    }
    return template;
}
/**
 * 
 * exec不需要g全局匹配，每次匹配后返回，并且
 * match如果正则表达式不包含 g 标志，str.match() 将返回与 RegExp.exec(). 相同的结果。
 * replace后面可以跟函数，replace是str方法，全局匹配
 * match
 * 一定记得写括号，[1]是第一个括号匹配的内容
 * 使用\d \w不要忘记+
 */

function render1(template, data) {
    return template.replace(/{{(\w+)}}/g, (match, key)=>data[key.trim()])
}

function render2(template, data) {
    return template.replace(/{{(\w+)}}/g, (match, key)=> data[key.trim()])
}