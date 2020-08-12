# css3

## 新增特性

一. box-shadow(阴影效果)
使用:
box-shadow: 20px 10px 0 #000;
-moz-box-shadow: 20px 10px 0 #000;
-webkit-box-shadow: 20px 10px 0 #000;
支持: 
   FF3.5, Safari 4, Chrome 3
二. border-colors(为边框设置多种颜色)
使用:
   border: 10px solid #000;
   -moz-border-bottom-colors: #555 #666 #777 #888 #999 #aaa #bbb #ccc;
   -moz-border-top-colors: #555 #666 #777 #888 #999 #aaa #bbb #ccc;
   -moz-border-left-colors: #555 #666 #777 #888 #999 #aaa #bbb #ccc;
   -moz-border-right-colors: #555 #666 #777 #888 #999 #aaa #bbb #ccc;
说明: 
   颜色值数量不固定, 且FF的私有写法不支持缩写: -moz-border-colors: #333 #444 #555;
支持:
   FF3+
三. boder-image(图片边框)
使用:
    -moz-border-image: url(exam.png) 20 20 20 20 repeat;
   -webkit-border-image: url(exam.png) 20 20 20 20 repeat;
说明:
(1). 20 20 20 20 ---> 边框的宽度, 分别对应top, right, bottom, left边框, 改变宽度可以实现不同的效果;
(2). 边框图片效果(目前仅实现了两种): 
   repeat --- 边框图片会平铺, 类似于背景重复;
   stretch --- 边框图片会以拉伸的方式来铺满整个边框;
(3). 必须将元素的边框厚度设置为非0非auto值.
支持:
    FF 3.5, Safari 4, Chrome 3
四. text-shadow(文本阴影)
使用: 
    text-shadow: [<颜色><水平偏移><纵向偏移><模糊半径>] || [<水平偏移><纵向偏移><模糊半径><颜色>];
说明:
(1) <颜色>和<模糊半径>是可选的, 当<颜色>未指定时, 将使用文本颜色; 当<模糊半径>未指定时, 半径值为0;
(2) shadow可以是逗号分隔的列表, 如:
   text-shadow: 2px 2px 2px #ccc, 3px 3px 3px #ddd;
(3) 阴影效果会按照shadow list中指定的顺序应用到元素上;
(4) 这些阴影效果有可能相互重叠, 但不会叠加文本本身;
(5) 阴影可能会跑到容器的边界之外, 但不会影响容器的大小.
支持:
    FF 3.5, Opera 10, Safari 4, Chrome 3
五. text-overflow(文本截断)
使用:
    text-overflow: inherit | ellipsis | clip ;
   -o-text-overflow: inherit | ellipsis | clip;
说明: 
(1) 还有一个属性ellipsis-word, 但各浏览器均不支持.
支持: 
   IE6+, Safari4, Chrome3, Opera10
六. word-wrap(自动换行)
使用:
    word-wrap: normal | break-word;
支持:
    IE6+, FF 3.5, Safari 4, Chrome 3
七. border-radius(圆角边框)
使用:
    -moz-border-radius: 5px;
-webkit-border-radius: 5px;
支持:
FF 3+, Safari 4, Chrome 3


八.  opacity(不透明度)   
使用:
   opacity: 0.5;
   filter: alpha(opacity=50); /* for IE6, 7 */
   -ms-filter(opacity=50); /* for IE8 */
支持:
   all
九. box-sizing(控制盒模型的组成模式)
使用:
   box-sizing: content-box | border-box; // for opera
   -moz-box-sizing: content-box | border-box;
   -webkit-box-sizing: content-box | border-box;
说明:
   1. content-box: 
   使用此值时, 盒模型的组成模式是, 元素宽度 = content + padding + border;
   2. border-box: 
   使用此值时, 盒模型的组成模式是, 元素宽度 = content(即使设置了padding和border, 元素的宽度
   也不会变).
支持:
   FF3+, Opera 10, Safari 4, Chrome 3