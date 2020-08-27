let p = new Promise(function(resolve, reject) {
    console.log(1)
    // resolve(3)
    reject(3)
})

console.log(2)

// p.then(function(value) {
//     console.log(value)
// })
p.catch(function(err) {
    console.log(err)
})