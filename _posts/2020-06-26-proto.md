# proto

## 对象和原型链

每个JS对象一定对应一个原型对象，并从原型对象继承属性和方法。

对象__proto__属性的值就是它所对应的原型对象：

每个对象都有__proto__属性来标识自己所继承的原型，只有函数才有prototype属性。

当你创建函数时，JS会为这个函数自动添加prototype属性，值是空对象。而一旦你把这个函数当作构造函数（constructor）调用（即通过new关键字调用），那么JS就会帮你创建该构造函数的实例，实例继承构造函数prototype的所有属性和方法（实例通过设置自己的__proto__指向承构造函数的prototype来实现这种继承）。

当你创建函数时，JS会为这个函数自动添加prototype属性，值是空对象。而一旦你把这个函数当作构造函数（constructor）调用（即通过new关键字调用），那么JS就会帮你创建该构造函数的实例，实例继承构造函数prototype的所有属性和方法（实例通过设置自己的__proto__指向承构造函数的prototype来实现这种继承）。

JS正是通过__proto__和prototype的合作实现了原型链，以及对象的继承。

构造函数，通过prototype来存储要共享的属性和方法，也可以设置prototype指向现存的对象来继承该对象。

对象的__proto__指向自己构造函数的prototype。obj.__proto__.__proto__...的原型链由此产生，包括我们的操作符instanceof正是通过探测obj.__proto__.__proto__... === Constructor.prototype来验证obj是否是Constructor的实例。

```js
var one = {x: 1};
var two = new Object();
one.__proto__ === Object.prototype // true
two.__proto__ === Object.prototype // true
one.toString === one.__proto__.toString // true
```

two = new Object()中Object是构造函数，所以two.__proto__就是Object.prototype。至于one，ES规范定义对象字面量的原型就是Object.prototype。

## 进一步讨论

Function.prototype和Function.__proto__都指向Function.prototype，这就是鸡和蛋的问题怎么出现的。

Object.prototype.__proto__ === null，说明原型链到Object.prototype终止。