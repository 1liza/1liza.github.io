var arr = [1, [2, [3, 4]]];

function flatten(arr) {
    let tmp = [];
    for (let a of arr) {
        if (Array.isArray(a)) {
            tmp = tmp.concat(flatten(a))
        } else {
            tmp.push(a)
        }
    }
    return tmp
}

function flatten(arr) {
    return arr.toString().split(',').map(item=>{
        return +item;
    })
}

function flatten(arr) {
    return arr.reduce((pre, curr)=>{
        return pre.concat(Array.isArray(curr) ? flatten(curr) : curr)
    }, [])
}

function flatten(arr) {
    while (arr.some(item=>Array.isArray(item))) {
        arr = [].concat(...arr)
    }
    return arr;
}


console.log(flatten(arr))

