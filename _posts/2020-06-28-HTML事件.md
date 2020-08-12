# HTML事件

## touch

touchstart:     //手指放到屏幕上时触发

touchmove:      //手指在屏幕上滑动式触发

touchend:    //手指离开屏幕时触发

touchcancel:     //系统取消touch事件的时候触发，这个好像比较少用

每个触摸事件被触发后，会生成一个event对象，event对象里额外包括以下三个触摸列表

touches:     //当前屏幕上所有手指的列表

targetTouches:      //当前dom元素上手指的列表，尽量使用这个代替touches

changedTouches:     //涉及当前事件的手指的列表，尽量使用这个代替touches

## Readonly

Readonly只针对input(text/password)和textarea有效，而disabled对于所有的表单元素有效，包括select,radio,checkbox,button等。

## onload

A. readystatechange
document有readyState属性来描述document的loading状态，readyState的改变会触发readystatechange事件.
loading
文档仍然在加载
interactive
文档结束加载并且被解析，但是像图片，样式，frame之类的子资源仍在加载
complete
文档和子资源已经结束加载，该状态表明将要触发load事件。
因此readystatechange在onload之前触发。

B.onpageshow
onpageshow 事件在用户浏览网页时触发。
onpageshow 事件类似于 onload 事件，onload 事件在页面第一次加载时触发， onpageshow 事件在每次加载页面时触发，即 onload 事件在页面从浏览器缓存中读取时不触发。

C. beforeunload
当浏览器窗口，文档或其资源将要卸载时，会触发beforeunload事件。这个文档是依然可见的，并且这个事件在这一刻是可以取消的.
如果处理函数为Event对象的returnValue属性赋值非空字符串，浏览器会弹出一个对话框，来询问用户是否确定要离开当前页面（如下示例）。有些浏览器会将返回的字符串展示在弹框里，但有些其他浏览器只展示它们自定义的信息。没有赋值时，该事件不做任何响应。

D.DOMContentLoaded
当初始的 HTML 文档被完全加载和解析完成之后，DOMContentLoaded 事件被触发，而无需等待样式表、图像和子框架的完成加载。
另一个不同的事件 load 应该仅用于检测一个完全加载的页面。因此DOMContentLoaded是HTML完全加载和解析完成之后发生的，发生时间点要早于load，选D。
在使用 DOMContentLoaded 更加合适的情况下使用 load 是一个令人难以置信的流行的错误，所以要谨慎。
注意：DOMContentLoaded 事件必须等待其所属script之前的样式表加载解析完成才会触发。

## 顺序

 先**事件捕获**从windows > document 往下级直到 特定的事件节点，然后进行**事件处理**，再**事件冒泡**，从特定节点往上级，这个完整的过程

