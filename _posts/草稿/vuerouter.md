# vue router

## 原理

页面中所有的内容都是组件化的，只需要把路径跟组件对应，在页面中把组件渲染出来。

## 步骤

页面实现：在vue-router中, 它定义了两个标签 和来对应点击和显示部分。 就是定义页面中点击的部分， 定义显示部分。

js中配置路由：首先要定义route,一条路由的实现，他是一个对象，由path和component组成。

创建router对路由进行管理，它是由构造函数 new vueRouter() 创建，接受routes 参数。

配置完成后，把router 实例注入到 vue 根实例中。

当用户点击 router-link 标签时，会去寻找它的 to 属性， 它的 to 属性和 js 中配置的路径{ path: '/home', component: Home}  path 一一对应，从而找到了匹配的组件， 最后把组件渲染到  标签所在的地方。

## 特点

前端路由是通过改变URL，在不重新请求页面的情况下，更新页面视图。

目前在浏览器环境中这一功能的实现主要有2种:

利用URL中的hash；hash虽然出现在url中，但不会被包括在http请求中，它是用来指导浏览器动作的，对服务器端没影响，因此，改变hash不会重新加载页面。

利用H5中history；pushState和replaceState两种方法的共同特点：当调用他们修改浏览器历史栈后，虽然当前url改变了，但浏览器不会立即发送请求该url，这就为单页应用前端路由，更新视图但不重新请求页面提供了基础。

replaceState是因为Safari 有调用 pushState 100 次限制

## 两种模式比较

一般的需求场景中，hash模式与history模式是差不多的，根据MDN的介绍，调用history.pushState()相比于直接修改hash主要有以下优势：

pushState设置的新url可以是与当前url同源的任意url,而hash只可修改#后面的部分，故只可设置与当前同文档的url
pushState设置的新url可以与当前url一模一样，这样也会把记录添加到栈中，而hash设置的新值必须与原来不一样才会触发记录添加到栈中
pushState通过stateObject可以添加任意类型的数据记录中，而hash只可添加短字符串
pushState可额外设置title属性供后续使用
如果没有正确配置url会报404错误
