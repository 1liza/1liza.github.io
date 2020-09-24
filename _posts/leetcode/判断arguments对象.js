isArguments: function(obj) {
    return Object.prototype.toString.call(obj)==='[object Arguments]' || (obj && Object.prototype.hasOwnProperty.call('callee'))
}