# 模块原理

modejs动态加载、es6静态加载；nodejs导出副本，es6导出引用。nodejs同步 es6异步
nodejs require module.exports exports
es6 import export

## CommonJS模块处理的流程：

1.调用__webpack_require__，给要执行的模块（文件）创建一个module对象。

2.通过call方法调用这个模块被包装成的函数，将this绑定为module.exports，传入module和module.exports以及__webpack_require__方法。

3.如果这个模块内部还有require别的模块，会继续调用__webpack_require__，递归重复这个过程。

4.一个模块执行结束后返回module.exports。

所以我们知道了，上面的使用示例中使用module.xxx = xxx和module.exports.xxx = xxx，其实本质上是一样的，都是将变量挂到module.exports对象中，甚至还可以写成this.xxx = xxx也有同样的效果；别的模块导入时，得到的也是module.exports对象。
因此，如果直接使用module.exports = { xxx: xxx }的方式，就相当于重写了导出的模块，故而对exports和this的任何操作也就没什么意义了。

module.exports 初始值为一个空对象 {}
exports 是指向的 module.exports 的引用
require() 返回的是 module.exports 而不是 exports

## es6模块原理

ES6导出的不是对象，无法引用模块本身，模块的方法单独加载。因此可以在编译时加载（也即静态加载），因而可以进行静态分析，在编译时就可以确定模块的依赖关系和输入输出的变量，提升了效率。

而CommonJS和AMD输出的是对象，引入时需要查找对象属性，因此只能在运行时确定模块的依赖关系及输入输出变量（即运行时加载），因此无法在编译时做“静态优化”。

跟CommonJS差不多，同样也是将模块对象传入一个立即执行的函数。只是模块函数内部稍稍复杂了一些。执行一个模块的流程前两步和CommonJS一样，也是先创建了一个module，然后再绑定this到module，传入module和module.exports对象。
在模块内部，导出模块的流程是：

先给__webpack_exports__也就是module.exports对象添加一个Symbol.toStringTag属性值为{value: 'Module'}，这么做的作用就是使得module.exports调用toString方法可以返回[Object Module]来表明这是一个模块。
将要导出的变量添加到module.exports中，然后设置变量的getter，getter里只是简单地返回了同名变量的值。

## 区别

CommonJS导出的是对象，内部要导出的变量在导出的那一刻就已经赋值给对象的属性了，也就有了“CommonJS输出的是值的拷贝”这种说法，后面再在模块里修改变量，其他模块是感觉不到的，因为已经没有关系了。但是对象还是会影响，因为对象拷贝的只是对象的引用。
也是因为CommonJS导出的是对象，在编译阶段不会读取对象的内容，并不清楚对象内部都导出了哪些变量、这些变量是不是从别的文件导入进来的。只有等到代码运行时才能访问对象的属性，确定依赖关系。因此才说CommonJS的模块是动态加载的。
而对ES6 Module来说，由于内部对每个变量都定义了getter，因此其他模块导入后访问变量时触发getter，返回模块里的同名变量，如果变量值发生变化，则外边的引用也会变化。
但是export default没有走getter的形式，也是直接赋值，所以输出的也是一份拷贝。
ES6 Module导出的不是一个对象，导出的是一个个接口，因此在编译时就能确定模块之间的依赖关系，所以才说ES6 Module是静态加载的。Tree Shaking就是根据这个特性在编译阶段摇掉无用模块的。
ES6 Module还提供了一个import()方法动态加载模块，返回一个Promise。
