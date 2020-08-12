# null & undefined

## 一、相似性

- undefined和null在if语句中，都会被自动转为false
- undefined == null

## 二、区别

- null表示"没有对象"，即该处不应该有值。

（1） 作为函数的参数，表示该函数的参数不是对象。

（2） 作为对象原型链的终点。

- undefined表示"缺少值"，就是此处应该有一个值，但是还没有定义。

（1）变量被声明了，但没有赋值时，就等于undefined。

（2) 调用函数时，应该提供的参数没有提供，该参数等于undefined。

（3）对象没有赋值的属性，该属性的值为undefined。

（4）函数没有返回值时，默认返回undefined。

- null是一个表示"无"的对象，转为数值时为0；

```js
Number(null)
// 0

5 + null
// 5
```

- undefined是一个表示"无"的原始值，转为数值时为NaN。

```js
Number(undefined)
// NaN

5 + undefined
// NaN
```

```js
false==null// false
false==" "// ture
false==""// ture
```

## 判断一个对象是否存在

- 方法1

　　if (!myObj) {

　　　　var myObj = { };// 不加var的话报错

　　}

- 方法2
　　if (!window.myObj) {

　　　　myObj = { };

　　}

- 方法3
　　if (!this.myObj) {

　　　　this.myObj = { };

　　}

- 方法4
　var global = this;

　　if (!global.myObj) {

　　　　global.myObj = { };

　　}

- 方法5
　　if (typeof myObj == "undefined") {

　　　　var myObj = { };

　　}

- 方法6
　if (myObj == undefined) {

　　　　var myObj = { };

　　}

- 方法7
　　if (myObj === undefined) {

　　　　var myObj = { };

　　}

- 方法8
　if (myObj == null) {//undefined == null

　　　　var myObj = { };

　　}

- 方法9
　　if (!('myObj' in window)) {

　　　　window.myObj = { };

　　}

- 方法10
　　if (!this.hasOwnProperty('myObj')) {

　　　　this.myObj = { };

　　}