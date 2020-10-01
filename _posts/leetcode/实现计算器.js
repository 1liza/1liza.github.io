// (5).add(3).minus(2)
Number.prototype.add1 = function(arg=0){
    if (typeof arg!='number') {
        throw new Error('请输入数字')
    }
    return this+arg
}
console.log((5).add1(3))