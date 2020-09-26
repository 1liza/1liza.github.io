// function curry(fn, length) {
//     length = length || fn.length;
//     return function(...args) {
//         return args.length>=length ? fn.call(this, ...args) : curry(fn.bind(this, ...args), length-args.length)
//     }
// }

// const curry = (fn, arr=[])=> (...args)=> {

// }

// function add() {
//     return curry((a,b,c)=>{
//         return (a+b+c)
//     })
// }
// const add = curry((a,b,c)=>{
//     return (a+b+c)
// })
// console.log(add(1)(2)(3))

function Parent() {
    this.name='parent';
    this.male = false;
}
function createObj(obj) {
    let clone = 
}