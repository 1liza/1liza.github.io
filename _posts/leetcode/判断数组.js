//判断数组
isArray = Array.isArray || function(array) {
    return Object.prototype.toString.call(array)==='[object Array]'
}