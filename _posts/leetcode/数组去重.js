let fn = function(arr) {
    let set = new Set(arr);
    return Array.from(set)
}

let fn1 = function(arr) {
    let ans = [];
    arr.forEach(item => {
        if(ans.indexOf(item) === -1) {
            ans.push(item)
        }
    })
    return ans
}

let fn2 = function(arr) {
    let obj = Object.create(null);
    let ans = []
    for (let n of arr) {
        obj[n]===undefined ? (ans.push(n), obj[n]=1) : ''; 
    }
    return ans
}

console.log(fn2([2,4,7,3,5,2,8,7]))