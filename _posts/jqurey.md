# jquery

```js
if ( typeof noGlobal === "undefined" ) {
    window.jQuery = window.$ = jQuery;
}
```

```js
// $.fn是指jquery的命名空间， 加上fn上的方法及属性， 会对jquery实例每一个有效。
// 如扩展$.fn.abc()
// 那么你可以这样子： $("#div").abc();
// 通常使用$.extend() 方法扩展.

// $.fn是什么东西呢。 查看jQuery代码， 就不难发现。
jQuery.fn = jQuery.prototype = {
  init: function (selector, context) {//....　
}
// 原来 jQuery.fn = jQuery.prototype. 对prototype肯定不会陌生啦。
```
