var classType = {}
"Boolean Number Symbol String BigInt Function Array Date RegExp Object Error Set Map".split(' ').map((item)=>{
    classType["[object "+item+"]"] = item.toLowerCase()
})

function type(obj) {
    if(obj==null) {
        //解决ie6null和undefined会被Object.prototype.toString识别成【object Object】
        return obj+'';
    }
    return typeof obj === 'object'|| typeof obj==='function' ? classType[Object.prototype.toString.call(obj)] || 'object' : typeof obj;
}

console.log(type(new Set()))