console.log(fn([2,4,7,3,5,2,8,7]))

function fn(arr) {
    return arr.filter((item, index, array)=>index===array.indexOf(item))
}