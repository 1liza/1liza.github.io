1.什么是npm install？

　　①npm install是帮助安装 vue,或React到本地，npm install也可以安装vue,React的开发工具。当然你完全可以像jQuery一样自己找网站下载下来，在页面中引入。

　　②npm就好比是一个前端的插件商店，里面有各种开发者写的包，你需要的时候就从命令行安装就可以了，类似与linux的apt的概念

　　③node.js是服务端，浏览器端js有很多缺陷，比如不能操作本地文件呐。而服务端的js就可以，所以用node就能帮我们管理文件，处理I/O，然后经过牛逼的开发者一封装，一改造，一个grunt就出来了。

　　④vue的开发本身是不依赖node的，不过vue的脚手架工具vue-cli里面集成的webpack是基于node开发出来的。

因此只能说webpack是依赖node的。

　　⑤npm是社区、不光是node能用的库、很多前端的库也在里面发布、很多人会前端通常也就会一些node的东西

　　⑥grunt,gulp,webpack这些只是工具，帮助我们前端完成复杂的开发，提高效率。你完全可以不用，如果不会的话还强行用只会加慢你的开发效率，而违背了初衷。

2.想学vue还得先学会npm? 没有npm还不能用vue了吗？

　　没有npm也可以使用vue，vue只是一个前端框架。

3.npm又是随node安装的工具，还要学node？node不是服务器端的吗？关前端什么事？

　　node是js的服务执行环境，前端常常借助 node帮助前端实现工程化。很多工具是基于node的，比如说你说的webpack,grunt。

4.webpack,grunt有什么用？

　　webpack,grunt是前端工程化的工具，可以帮助前端完成混淆压缩，校验等工作

传统项目只需要起后台服务即可（可顺利调用后台API），现在的前端项目大多通过webpack管理，webpack又是基于node，node是一个运行在服务器端的js环境，浏览器本身不支持的scss、es6/es7语法、typescript等都可在node这通过工具包npm去解决.因此前端项目起的node服务一般是为了解决这些问题。

作者：inspg
链接：https://www.jianshu.com/p/a957bd2daf68
来源：简书
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

作者：inspg
链接：https://www.jianshu.com/p/a957bd2daf68
来源：简书
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。