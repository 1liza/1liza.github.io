Function.prototype.call(context) {
    context = context ? Object(context) : window;
    context.fn = this;
    if(arguments[1]) {
        result = context.fn(...arguments[1]);
    } else {
        result = context.fn();
    }
    delete context.fn;
    return result;
}