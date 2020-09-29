/**
 * Function.length表示形參的個數
 */
function curry(fn, length) {
    length = length || fn.length
    return function(...args) {
        if(args.length>=length) {
            fn.call(this, ...args)
        } else {
            curry(fn.bind(this, ...args), length-args.length)
        }
    }
}

// function add(a) {
//     return function(b) {
//         return function(c) {
//             console.log(a+b+c)
//         }
//     }
// }

function add(a,b,c) {
    console.log(a+b+c)
}
const currAdd = curry(function(a,b,c){
    console.log(a+b+c)
})
console.log(currAdd(1)(2)(3))