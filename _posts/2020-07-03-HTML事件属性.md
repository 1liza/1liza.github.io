display：none指的是元素完全不陈列出来，不占据空间，涉及到了DOM结构，故产生reflow与repaint
visibility：hidden指的是元素不可见但存在，保留空间，不影响结构，故只产生repaint，但不可触发绑定事件
opacity=0：指的是元素不可见但存在，保留空间，不影响结构，并且，如果该元素已经绑定一些事件，如click事件，那么点击该区域，也能触发点击事件的

https://www.w3school.com.cn/tags/html_ref_eventattributes.asp