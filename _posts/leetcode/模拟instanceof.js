function myInstanceOf(left, right) {
    left = left.__proto__;
    right = right.prototype;
    while(true) {
        if (!right) return false;
        if (left === right) return true;
        left = left.__proto__;
    }
}