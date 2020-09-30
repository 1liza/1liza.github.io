function deepCopy(obj) {
    if((!obj) || typeof obj !=="object") {
        return obj
    }
    let copyObj = (Array.isArray(obj) ? [] : {})
    for(let key of Object.getOwnPropertyNames(obj)) {
        if(typeof obj[key]==='object') {
            copyObj[key] = deepCopy(key)
        } else {
            copyObj[key] = obj[key]
        }
    }
    return copyObj;
}

function deepCopy(obj) {
    if(!obj || typeof obj!=='object') {
        return obj;
    }
    let copyObj = (Array.isArray(obj) ? [] : {});
    for (let key in obj) {
        if(obj.hasOwnProperty(key)) {
            if(typeof obj[key]==='object') {
                copyObj[key] = deepCopy(obj[key])
            } else {
                copyObj[key] = obj[key]
            }
        }
    }
    return copyObj
}

// dfs
function deepCopy(obj) {
    if(!obj) return;
    if (typeof obj==='object') {
       let copy = (Array.isArray(obj) ? [] : {});

       for(let key in obj) {
           if(obj.hasOwnProperty(key)) {
            if(typeof obj[key]==='object') {
                copy[key] = deepCopy(obj[key])
            } else {
                copy[key] = obj[key];
            }
        }

       }
       return copy;
    } else{
        return obj;
    }
}

//bfs

function deepCopy(obj) {
    if(!obj) return;
    if(typeof obj==="object") {
        let copy = (Array.isArray(obj) ? [] : {});
        let queue = [obj];
        while(obj.length!=0) {
            let tmp = obj.shift();
            for(let key in tmp) {
                
            }
        }
    } else{
        return obj
    }
}

var obj = {"name":"Poly", "career":"it", "num":[1,2,3,4,5]}
Object.defineProperty(obj, "age", {value:"forever 18", enumerable:false});
Object.prototype.protoPer1 = function(){console.log("proto");};
Object.prototype.protoPer2 = 2;

console.log(deepCopy(obj))