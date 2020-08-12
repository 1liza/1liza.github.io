# 引用CSS

1，@import url（）机制是不同于link的，link是在加载页面前把css加载完毕，而@import url（）则是读取完文件后在加载，所以会出现一开始没有css样式，闪烁一下出现样式后的页面(网速慢的情况下)。 
2，@import 是css2里面的，所以古老的ie5不支持。 
3，当使用javascript控制dom去改变样式的时候，只能使用link标签，因为@import不是dom可以控制的。
4，link除了能加载css外还能定义RSS，定义rel连接属性，@import只能加载css 

页面中使用CSS的方式主要有3种：行内添加定义style属性值，页面头部内嵌调用和外面链接调用，其中外面引用有两种：link和@import。