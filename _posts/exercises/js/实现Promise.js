function myPromise(fn) {
    let self = this
    self.value = null
    self.error = null
    self.onResolved = null
    self.onRejected = null

    function resolve(val) {
        self.value = val
        self.onResolved(self.value)
    }
    function reject(err) {
        self.error = err
        self.onRejected(self.error)
    }

    fn(resolve, reject)
}

myPromise.prototype.then = function(onresolve, onreject) {
    this.onResolved = onresolve
    this.onRejected = onreject
}