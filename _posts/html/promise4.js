/**
 * 实现一个Promise
 */

 function myPromise(fn) {
     let self = this
     self.value = null
     self.error = null
     self.onFulfilled = null
     self.onRejected = null

     function resolve(value) {
         self.value = value
         self.onFulfilled(self.value)// resolve时执行成功回调
     }

     function reject(error) {
         self.error = error
         self.onRejected(this.error)
     }

     fn(resolve, reject)
 }

 myPromise.prototype.then = function(onFulfilled, onRejected) {
     this.onFulfilled = onFulfilled
     this.onRejected = onRejected
 }
 module.exports = myPromise