/**
 * [].shift.call(arguments)并不会让arguments变数组
 * [...arguments]可以变数组
 */
function myNew() {
    let obj = new Object();
    Constructor = [].shift.call(arguments);
    console.log(arguments)
    obj.__proto__ = Constructor.prototype;
    let ans = Constructor.apply(obj, arguments)
    return typeof ans==='object' ? ans : obj;
}

function test(a,b,c) {
    this.a = a;
    this.b = b;
    this.c = c;
}

let a = myNew(test, 1,2,3)
