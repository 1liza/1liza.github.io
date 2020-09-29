Function.prototype.call2 = function(context) {
    context = context ? Object(context) : window;
    args = [...arguments].slice(1);
    //等同于 args = Array.prototype.slice.call(arguments, 1);
    context.fn = this;
    let result = context.fn(...args);
    delete context.fn;
    return result;
}

let foo = {
    value: 1,
    bar: function() {
        console.log(this.value)
    }
}