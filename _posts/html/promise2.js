var p = new Promise(function(resolve, reject) {
    resolve(1)
})
p.then(function(value) {
    console.log(value)
    return value*2
}).then(function(value) {
    console.log(value)
}).then(function(value){
    console.log(value)
    return Promise.resolve('resolve')
}).then(function(value){
    console.log(value)
    return Promise.reject('reject')
}).then(function(value) {
    console.log('resolve:'+value)
}),function(err) {
    console.log('reject:', err)
}

// Promise对象的then方法返回一个新的Promise对象，因此可以通过链式调用then方法。then方法接收两个函数作为参数，第一个参数是Promise执行成功时的回调，第二个参数是Promise执行失败时的回调。两个函数只会有一个被调用，函数的返回值将被用作创建then返回的Promise对象。这两个参数的返回值可以是以下三种情况中的一种：

// return 一个同步的值 ，或者 undefined（当没有返回一个有效值时，默认返回undefined），then方法将返回一个resolved状态的Promise对象，Promise对象的值就是这个返回值。
// return 另一个 Promise，then方法将根据这个Promise的状态和值创建一个新的Promise对象返回。
// throw 一个同步异常，then方法将返回一个rejected状态的Promise,  值是该异常。
