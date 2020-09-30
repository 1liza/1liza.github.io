function myNew(context) {
    let obj = Object.create(null);
    let args = [...arguments].slice(1);
    obj.__proto__ = context.prototype;
    let ret = context.apply(obj, args);
    return typeof ret==="object" ? ret : obj;
}
function Parent(age) {
    this.age = age;
    this.name = 'parent';
}

let obj = myNew(Parent, 43)
console.log(obj.age)