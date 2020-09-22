//es6解构赋值
var a = 1, b = 2;
[a,b] = [b,a]
console.log(a,b)

//异或运算
var c=3, d=4;
c = c ^ d;
d = d ^ c;
c = c ^ d;
console.log(c, d)