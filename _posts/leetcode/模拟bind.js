Function.prototype.bind2 = function(context) {
    let self = this;
    let args = Array.prototype.slice.call(arguments, 1);
    let tmpFn = function() {}
    let fn = function() {
        let arguments =Array.prototype.slice.call(arguments);
        context.apply(this instanceof self ? this : context, args.concat(arguments))
    }
    tmpFn.prototype = this.prototype;
    fn.prototype = new fn()
    return fn;
}
https://juejin.im/post/6844903476623835149#heading-7