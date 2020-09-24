function isArrayLike(obj) {
    let length = !!obj && 'length' in obj && obj.length;
    let typeRes = type(obj)

    if(typeRes == 'function' || isWindow(obj)) {
        return false
    }
    return typeRes === 'array' || length === 0 || typeof length === 'number' && length>0 && (length-1) in obj;
}