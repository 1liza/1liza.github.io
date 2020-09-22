let fib = function(n) {
    return n>2 ? 1 : arguments.callee(n-1) + arguments.callee9
}

console.log(fib(8))