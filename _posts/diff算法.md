# diff算法

## 当数据发生变化时，vue是怎么更新节点的

渲染真实DOM的开销是很大，有时候我们修改了某个数据，如果直接渲染到真实dom上会引起整个dom树的重绘和重排，有没有可能我们**只更新我们修改的那一小块dom而不要更新整个dom**呢？diff算法能够帮助我们。

先根据真实DOM生成一颗virtual DOM，
当virtual DOM某个**节点的数据**改变后会生成一个新的Vnode，
然后Vnode和oldVnode作对比，发现有不一样的地方就直接修改在真实的DOM上，然后使oldVnode的值为Vnode。

diff的过程就是调用名为patch的函数，比较新旧节点，一边比较一边给真实的DOM打补丁。

## virtual DOM和真实DOM的区别

virtual DOM是将真实的DOM的数据抽取出来，以**对象**的形式模拟**树形结构**。
（VNode和oldVNode都是对象，一定要记住）

## diff的比较方式

在采取diff算法比较新旧节点的时候，比较只会在同层级进行, 不会跨层级比较。

```js
<div>
    <p>123</p>
</div>

<div>
    <span>456</span>
</div>
```
上面的代码会分别比较同一层的两个div以及第二层的p和span，但是不会拿div和span作比较。

![img](img/diff.jpg)

## diff流程图

![img](img/diff流程图.jpg)

当数据发生改变时，set方法会让调用Dep.notify通知所有订阅者Watcher，订阅者就会调用patch给真实的DOM打补丁，更新相应的视图。

