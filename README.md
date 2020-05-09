首先非常感谢[baiying](https://github.com/qiubaiying/qiubaiying.github.io)的博客搭建教程,我参考了他的教程搭建了基于Github和Jekyll的个人博客。但是个人博客还是有很多需求要改，我参考了[jekyll](https://jekyllrb.com/)官网教程，做了一些修改，搭建了[我的博客](https://1liza.github.io/)。这里想跟大家补充一下你可能想要修改的基础内容。

****

**我的博客内容主要分为《JavaScript高级教程程序设计》笔记总结、百度前端学院笔记总结 和 网页搭建 三部分。**

**我的工作主要是解决了不同板块内容侧边栏分类、文档排序**

**不想看原理的同学可以直接看“文档归类”和“文档排序”**

----

## 文档归类 ##
```
<!-- 导航 -->
<hr>
<h5>主题导航</h5>
{% for post in site.posts %}
{% assign currenttitle = post.subtitle %} 
{% if currenttitle != subtitle %}
{% unless forloop.first %}</ul>{% endunless %}
<h3 id="y{{post.subtitle}}">{{ currenttitle }}</h3>
<ul>
{% assign subtitle = currenttitle %}
{% endif %}
<li><a href="{{ post.url }}">{{ post.title }}</a></li>
{% if forloop.last %}</ul>{% endif %}
{% endfor %} 
```
上面的代码是我加在_layout文件夹中page.html中```<!-- Friends Blog -->```代码块后面的。

```{% assign currenttitle = post.subtitle %} ```可以看出归类是按照subtitle生成的。那么在哪里设置subtitle呢？在每一篇博客（_posts文件夹中.md文件）yaml 头文件中。
```
---
layout:     post
title:      第28天 给爱的人发个邮件吧
subtitle:   百度前端学院
date:       2020-05-08 17:00:00
author:     lixiaoguai
header-img: img/post-bg-js-version.jpg
catalog: 	 true
tags:
    - ECMAScript
    - JavaScrip
    - script
    - JavaScript高级程序设计
---
```
上面是我的头文件，可以看到这篇文章被归类到“百度前端学院”类别中。效果如下图所示。

![img](img/post_guide.PNG)

[这里](https://stackoverflow.com/questions/19086284/jekyll-liquid-templating-how-to-group-blog-posts-by-year/20777475#20777475)也有按照年或者月归类的方法

## 文档排序 ##
文档排序默认是按照yaml 头文件中的date排序，格式是YYYY-MM-DD HH:MM:SS或者YYYY-MM-DD HH:MM:SS +/-TTTT。如果你在一天之内写了多篇博客的话，可以采用YYYY-MM-DD HH:MM:SS格式具体到小时来帮助排序。如果一天只有一篇的话，date可以不用具体到小时，直接YYYY-MM-DD就可以，但是月份和日期一定要是两位数。
## 博客设置 ##
- 根目录下面index.html设置了主页面布局：paginator属性设置分页；```post in paginator.posts```设置了每一个博客条目的内容显示和设置。可以看到index.html的yaml 头文件```layout: page```也就是采用了_layouts文件夹中page.html的布局，所以侧边栏设置可以在page.html文件中找到
- _layouts文件夹主要用来存放页面布局。可以看到文件夹里面有四个html文件，分别设置了page，post，keynote的页面布局，而这三个布局都继承了default.html的布局。default.html是jekyll自动生成的。
- 找到设置布局位置之后，就需要修改liquid语句了。这里可参考官网给的[语法介绍](https://jekyllrb.com/docs/liquid/)。[varibles](https://jekyllrb.com/docs/variables/)把常用的变量都列举出来了，这里面没有的变量你也可以自己添加在相应的yaml 头文件中，以备调用。[include](https://jekyllrb.com/docs/includes/)可以让你调用_include文件夹中的内容。

**如果你实在找不到某个布局设置的位置，可以直接搜索这个布局下的文字，投机取巧**
## Git ##
- 如果文件夹中内容全部是新建的，不必一个一个文件```git add XXX.md```，可以直接```git add .```将整个文件夹add进去，之后继续```git commit -m "update" ``` 和 ``` git push ```。如果对本地项目中文件进行删除，想要同步到github也可以采用```git add .```
- 如果一直需要邮箱验证，可以把personal setting里的email里的```keep my email address private```前面对勾去掉。
- 如果git 推送更新出现错误： ```Updates were rejected because the remote contains work that you do```是因为本地仓库与线上仓库的内容不匹配，或者说本地相对于远程不是最新，先pull更新本地，再把自己的push上去。但是本地确认无误的话可以直接```git push -f```强行上传。
- 对fork来的repo进行commit 是不会计算在你自己的Contribution中，格子是不会变绿的，除非```pull request```并被原作者接受（但是别人为什么要接受你自己的博客呢）