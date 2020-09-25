var obj = {"name":"Poly", "career":"it", "num":[1,2,3,4,5]}
Object.defineProperty(obj, "age", {value:"forever 18", enumerable:false});
Object.prototype.protoPer1 = function(){console.log("proto");};
Object.prototype.protoPer2 = 2;

b = JSON.parse(JSON.stringify(obj))
/**
 * 
 * for in 遍歷obj中可枚舉屬性 自身和繼承
 * getOwnProperty 自身 可枚舉和不可枚舉
 * Object.keys 自身 可枚舉
 */
function shadowCopy(obj) {
    if(!obj) {
        return obj
    }
    if (typeof obj=== 'object') {
        cloneObj = (Array.isArray(obj) ? [] : {})

        for (key in obj) {
            cloneObj[key] = obj[key]
        }
        return cloneObj;
    } else {
        return obj
    }
}

function shadowCopy(obj) {
    if(!obj) {
        return obj
    }
    if(typeof obj==="object") {
        copyObj = (Array.isArray(obj) ? [] : {})
    } else {
        return obj;
    }
    for (key of Object.keys(obj)) {
        copyObj[key] = obj[key]
    }
    return copyObj
}
b = shadowCopy(obj)
console.log(b)