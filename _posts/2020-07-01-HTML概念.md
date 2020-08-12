# HTML概念

## 反语义化

HTML语义化是什么？
语义化是指根据内容的结构化（内容语义化），选择合适的标签（代码语义化），便于开发者阅读和写出更优雅的代码的同时，让浏览器的爬虫和机器很好的解析。

为什么要语义化？
有利于SEO，有助于爬虫抓取更多的有效信息，爬虫是依赖于标签来确定上下文和各个关键字的权重。

语义化的HTML在没有CSS的情况下也能呈现较好的内容结构与代码结构

方便其他设备的解析

便于团队开发和维护

### 易混淆标签

i标签效果，i标签通常表示因为某种原因和正常文本不同的文本，例如专业术语、外语短语或排版用的文字。通常表现为斜体。

em标签效果。em表示强调的文本。视觉上也是斜体的效果

strong标签效果。以加粗的形式展现。表示这个文本的重要性，在HTML4中表示特别强调，HTML5中描述为“strong importance for its contents”

b标签效果。表示的文本风格不同于正常的文本，没有表达任何特殊的重要性和相关性。通常用于关键字回顾，回顾中的产品名称或者是其他需要表现为粗体的文本。另一个例子是标志每个段落的lead sentence。

mark的效果如下图。<mark>表现为高亮文本。例如我们在网页上查找关键字时，找到的结果就会以高亮的形式展现。

### HTML5新标签

section
表示文档中的一个区域（或节），比如，内容中的一个专题组，一般来说会有包含一个标题（heading）。一般通过是否包含一个标题 (<h1>-<h6> element) 作为子节点来辨识每一个<section>。一般来说，一个 <section> 应该出现在文档大纲中。

artical
<article>元素表示文档、页面、应用或网站中的独立结构，其意在成为可独立分配的或可复用的结构，如在发布中，它可能是论坛帖子、杂志或新闻文章、博客、用户提交的评论、交互式组件，或者其他独立的内容项目。

### 不同标签的区别

em vs i
虽然em标签也是显示为斜体的效果，但不能说因为效果一样就使用i标签来代替em标签。因为二者表示的含义不同。
举个例子。em标签：just do it already!
那么一个人或者一个软件在读这句话时，就会以强调加重的语气来读do这个单词。
对于i标签：The word the is an article。那么在这句话中斜体并没有强调的语气。只是表明the是一个article，而不是我们平时的冠词。

em vs strong
在HTML4中，strong一般指的是更强的强调。HTML5中strong表示的是内容的重要性。em被用来改变一个句子的含义，例如" I love carrots" vs " I love carrots"。而strong通常用来给部分句子增加重要性。例如"Warning!This is very dangerous"

strong vs b
strong 和 b 算是最相似的两个元素了。那么二者之间的差别。strong表示的是一种逻辑状态，而bold表示的是物理状态。逻辑状态是从内容中分离出来，以各种不同的形式来展现，可能你想标记为红色或者下划线或者其他，那么改变strong的属性比改变bold的属性更有意义。因为bold只是making bold，并不做任何重点性强调性的区分。

### 写HTML代码时应注意什么

尽可能少的使用无语义的标签div和span；
在语义不明显时，既可以使用div或者p时，尽量用p, 因为p在默认情况下有上下间距，对兼容特殊终端有利；
不要使用纯样式标签，如：b、font、u等，改用css设置。
需要强调的文本，可以包含在strong或者em标签中（浏览器预设样式，能用CSS指定就不用他们），strong默认样式是加粗（不要用b），em是斜体（不用i）；
使用表格时，标题要用caption，表头用thead，主体部分用tbody包围，尾部用tfoot包围。表头和一般单元格要区分开，表头用th，单元格用td；
表单域要用fieldset标签包起来，并用legend标签说明表单的用途；
每个input标签对应的说明文本都需要使用label标签，并且通过为input设置id属性，在lable标签中设置for=someld来让说明文本和相对应的input关联起来。

## 属性继承

继承就是指子节点默认使用父节点的样式属性。
可以继承的属性很少，只有颜色，文字，字体间距行高对齐方式，和列表的样式可以继承。
所有元素可继承：visibility和cursor。
内联元素可继承：letter-spacing、word-spacing、white-space、line-height、color、font、font-family、font-size、font-style、font-variant、font-weight、text-decoration、text-transform、direction。
终端块状元素可继承：text-indent和text-align。
列表元素可继承：list-style、list-style-type、list-style-position、list-style-image