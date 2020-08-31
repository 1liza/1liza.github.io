# Vue.js

## Vue 组件 data 为什么必须是函数

每个组件都是 Vue 的实例。(组件可能被用来创建多个实例)
组件共享 data 属性，当 data 的值是同一个引用类型的值时，改变其中一个会影响其他。

```js
data() {
    return {
        a:1,
        b:2
    }
}
```

## css 只在当前组件起作用

答：在 style 标签中写入 scoped 即可 例如：`<style lang="stylus" scoped></style>`

## vue.js 的两个核心是什么

答：数据驱动、组件系统

## vue 几种常用的指令

v-for
v-if
v-bind(缩写可以把 v-bind 省略)响应式地更新 HTML attribute
v-on（缩写为@）它用于监听 DOM 事件
v-show
v-else

## vue 常用的修饰符

答：.prevent: 提交事件不再重载页面；.stop: 阻止单击事件冒泡；.self: 当事件发生在该元素本身而不是子元素的时候会触发；.capture: 事件侦听，事件发生的时候会调用

## .vue 中 key 值的作用

答：当 Vue.js 用 v-for 正在更新已渲染过的元素列表时，它默认用“就地复用”策略。如果数据项的顺序被改变，Vue 将不会移动 DOM 元素来匹配数据项的顺序， 而是简单复用此处每个元素，并且确保它在特定索引下显示已被渲染过的每个元素。key 的作用主要是为了高效的更新虚拟 DOM。

## v-on

```js
<input
     type="text"
     v-on="{
     input:onInput,
     focus:onFocus,
     blur:onBlur,
     }"
   >
<input type="text" @click="onclick" @input="onInput" @focus="onFocus">
```

## vue 的计算属性

答：**在模板中放入太多的逻辑会让模板过重且难以维护**，在需要对数据进行复杂处理，且可能多次使用的情况下，尽量采取计算属性的方式。
好处：
使得数据处理结构清晰；
依赖于数据，数据更新，处理结果自动更新；
计算属性内部 this 指向 vm 实例；
在 template 调用时，直接写计算属性名即可；
常用的是 getter 方法，获取数据，也可以使用 set 方法改变数据；
相较于 methods，不管依赖的数据变不变，methods 都会重新计算，但是依赖数据不变的时候 computed 从缓存中获取，不会重新计算。

### getter setter

计算属性默认只有 getter，不过在需要时你也可以提供一个 setter：

```js
var vm = new Vue({
  el: '#example',
  data: {
    message: 'Hello'
  },
  computed: {
    // 计算属性的 getter
    reversedMessage: function () {
      // `this` 指向 vm 实例
      return this.message.split('').reverse().join('')
    }
  }
})


computed: {
  fullName: {
    // getter
    get: function () {
      return this.firstName + ' ' + this.lastName
    },
    // setter
    set: function (newValue) {
      var names = newValue.split(' ')
      this.firstName = names[0]
      this.lastName = names[names.length - 1]
    }
  }
}
```

### 计算属性 vs 普通属性

计算属性的属性值必须是一个函数。

### 3.计算属性 vs 方法

两者最主要的区别：computed 是可以缓存的，methods 不能缓存；

## 侦听属性

Vue 提供了一种更通用的方式来观察和响应 Vue 实例上的数据变动：侦听属性 watch。watch 中可以执行任何逻辑，如函数节流，Ajax 异步获取数据，甚至操作 DOM（不建议）。

### watch computed

watch：监测的是属性值， 只要属性值发生变化，其都会触发执行回调函数来执行一系列操作。
computed：监测的是依赖值，依赖值不变的情况下其会直接读取缓存进行复用，变化的情况下才会重新计算。
![img](img/watch.jpg)

计算属性不能执行异步任务，计算属性必须同步执行。也就是说计算属性不能向服务器请求或者执行异步任务。如果遇到异步任务，就交给侦听属性。watch 也可以检测 computed 属性。

## 单页面应用（SPA）

单页面应用（SPA），通俗一点说就是指只有一个主页面的应用，浏览器一开始要加载所有必须的 html, js, css。所有的页面内容都包含在这个所谓的主页面中。但在写的时候，还是会分开写（页面片段），然后在交互的时候由路由程序动态载入，单页面的页面跳转，仅刷新局部资源。多应用于 pc 端。

多页面应用（MPA）
多页面（MPA），就是指一个应用中有多个页面，页面跳转时是整页刷新。

### 单页面的优点：

用户体验好，快，内容的改变不需要重新加载整个页面，基于这一点 spa 对服务器压力较小。
前后端分离。
页面效果会比较炫酷（比如切换页面内容时的专场动画）。

### 单页面缺点：

不利于 seo。
导航不可用，如果一定要导航需要自行实现前进、后退。（由于是单页面不能用浏览器的前进后退功能，所以需要自己建立堆栈管理）。
初次加载时耗时多。
页面复杂度提高很多。

## 怎么定义 vue-router 的动态路由? 怎么获取传过来的值

答：在 router 目录下的 index.js 文件中，对 path 属性加上 /:id，使用 router 对象的 params.id 获取。


## 数据传递

### props

子组件写props接收父组件传递的值，父组件通过v-bind:传递

### emit

从子组件 Emit（派发） 一个事件，子组件在父组件声明的时候写v-on，具体执行函数在父组件中声明