# scoped

我们只需要在 style 标签上添加一个 scoped 属性即可启用 scoped 样式：

这是借助 PostCSS 实现的，它会将上面的代码转换成下面这样：

## 原理

通过 Webpack 调用 VueJS 中相应 Loader , 给组件HTML模板添加自定义属性 (Attribute) data-v-x, 以及给组件内CSS选择器添加对应的属性选择器 (Attribute Selector) [data-v-x], 达到组件内样式只能生效与组件内HTML的效果, 代码效果如下:

## 为什么需要穿透scoped

scoped看起来很美，但是，在很多项目中，会出现这么一种情况，即：引用了第三方组件，需要在组件中局部修改第三方组件的样式，而又不想去除scoped属性造成组件之间的样式污染。此时只能通过特殊的方式，穿透scoped。

## 缺点

- 父组件无scoped属性，子组件带有scoped，父组件是无法操作子组件的样式的（原因在原理中可知），虽然我们可以在全局中通过该类标签的标签选择器设置样式，但会影响到其他组件
- 父组件有scoped属性，子组件无，父组件也无法设置子组件样式，因为父组件的所有标签都会带有data-v-469af010唯一标志，但子组件不会带有这个唯一标志属性，与1同理，虽然我们可以在全局中通过该类标签的标签选择器设置样式，但会影响到其他组件
- 父子组建都有，同理也无法设置样式，更改起来增加代码量

## 解决方法

1. 穿透scoped
注意 stylus的样式穿透 使用>>> sass和less的样式穿透 使用/deep/
2. 使用两个style标签
3. 不使用scoped 添加class
通过在外层dom上添加唯一的class来区分不同组件。这种方法既实现了类似于scoped的效果，又方便修改各种第三方组件的样式，代码看起来也相对舒适。

## postcss的作用

PostCSS 是一套利用JS插件实现的用来改变CSS的工具

可以直观的理解为：它就是一个平台。为什么说它是一个平台呢？因为我们直接用它，感觉不能干什么事情，但是如果让一些插件在它上面跑，那么将会很强大

PostCSS 提供了一个解析器，它能够将 CSS 解析成抽象语法树

通过在 PostCSS 这个平台上，我们能够开发一些插件，来处理我们的CSS ，比如热门的： autoprefixer（处理CSS前缀问题）

postcss 可以对sass处理过后的css 再处理 最常见的就是autoprefixer
