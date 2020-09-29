/**
 * 1原型链继承
 * 引用类型的属性被所有实例共享
 * 在创建 Child 的实例时，不能向 Parent 传参
 */
function Parent(age) {
    this.age = age
    this.name="parent"

    this.sayname = function() {
        console.log(this.name)
    }
}

function Child1(){
    this.name = 'child'
}
Child1.prototype = new Parent(12)
let a1 = new Child1()
a1.sayname()

/**
 * 2构造函数继承
 * 避免了引用类型的属性被所有实例共享
 * 可以在 Child 中向 Parent 传参
 */
function Child2() {
    Parent.call(this, 26)
}
a2 = new Child2()
console.log(a2.age)
a2.sayname()

/**
 * 组合继承
 * 融合原型链继承和构造函数的优点，是 JavaScript 中最常用的继承模式。
 * 缺点：两次调用超类构造函数导致子类原型对象创建了多余属性
 */
function Child3(age, height) {
    Parent.call(this, age)
    this.height = height
}
Child3.prototype = new Parent()
a3 = new Child3(12, 1,4)
a3.sayname()

/**
 * 原型式继承
 * 是 ES5 Object.create 的模拟实现
 * 含引用类型的属性值始终都会共享相应的值，这点跟原型链继承一样。
 */
function createobj(obj) {
    function F() {};
    F.prototype = obj;
    return new F();
}

/**
 * 寄生式继承
 * 缺点：跟借用构造函数模式一样，每次创建对象都会创建一遍方法。
 * 寄生式继承，即创建一个仅用于封装继承过程的函数，该函数在内部以某种方式来增强对象，最后再像真地是它做了所有工作一样返回对象。
 */
function createObj(obj) {
    var clone = Object.create(obj)
    //Object.create参数是对象
    clone.sayName = function() {
        console.log('hi')
    }
    return clone;
}

/**
 * 寄生组合式继承
 * 通过借用构造函数来继承属性，通过原型链的混成形式来继承方法。
 * 基本思路是：不必为了指定子类型的原型而调用构造函数，我们所需要的无非是超类型的一个副本而已。本质上，就是使用寄生式继承来继承超类型的原型，然后将结果指定给子类型的原型。
 * 
 * 只调用了一次superType构造函数，并且避免了在subType.prototype上创建不必要的属性。与此同时，原型链还能保持不变，因此可以正常使用instanceof()和isPrototypeOf()。寄生式组合继承是引用类型最理想的继承范式。
*/
function object(o) {
    function F() {}
    F.prototype = o
    return new F()
}
function inheritProrotype(subType, superType) {
    let prototype = object(superType.prototype)
    prototype.constructor = subType
    subType.prototype = prototype   
}
function superType(name) {
    this.name = name
    this.color = ['red', 'blue', 'yellow']
}
superType.prototype.sayName = function() {
    console.log(this.name)
}
function subType(name, age) {
    superType.call(this, name);
    this.age = age;
}
inheritProrotype(subType, superType)

subType.prototype.sayAge = function() {
    console.log(this.age)
}

//super
class Parent1{
    constructor(name) {
        this.name = name;
        this.age = 42;
    }
    sayName() {
        console.log(this.name)
    }
}

class Child4 extends Parent1{
    constructor(name, height) {
        super(name);//调用super方法，得到this对象
        this.height = height;
    }
}
let a = new Child1('li', 1.4)
a.sayName()