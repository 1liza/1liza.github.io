https://segmentfault.com/a/1190000018472635

在仿写饿了么页面时，发现图标文件不能正常加载，发现是路径问题，相对路径没有问题，但是绝对路径导致无法正常加载，通过开发者模式中页面 console 可以看到路径加载报错

渲染后资源具体路径可以在开发者模式中 elements 中对应资源的路径中找到

可以在开发者模式中 sources 目录下看到 npm build server 实际上把静态文件都放在 webpack://目录下

在项目中的 webpack.config.js 等项目配置文件中使用的 require 属于 nodejs 范畴，而进入 index.js 后，加载的组件中的 require 都属于 webpack 的解析范畴。

Vue Loader 是一个 webpack 的 loader

- 允许为 Vue 组件的每个部分使用其它的 webpack loader，例如在` <style>` 的部分使用 Sass 和在`<template>`的部分使用 Pug；
- 允许在一个 .vue 文件中使用自定义块，并对其运用自定义的 loader 链；
- 使用 webpack loader 将`<style>`和 `<template> `中引用的资源当作模块依赖来处理；
- 为每个组件模拟出 scoped CSS；
- 在开发过程中使用热重载来保持状态。
  简而言之，webpack 和 Vue Loader 的结合为你提供了一个现代、灵活且极其强大的前端工作流，来帮助撰写 Vue.js 应用。

当 Vue Loader 编译单文件组件中的 <template> 块时，它也会将所有遇到的资源 URL 转换为 webpack 模块请求。

资源 URL 转换会遵循如下规则：

如果路径是绝对路径 (例如 /images/foo.png)，会原样保留。

如果路径以 . 开头，将会被看作相对的模块依赖，并按照你的本地文件系统上的目录结构进行解析。

如果路径以 ~ 开头，其后的部分将会被看作模块依赖。这意味着你可以用该特性来引用一个 Node 依赖中的资源：

此外，如果你配置了为 `<style>` 块使用 css-loader，则你的 CSS 中的资源 URL 也会被同等处理。

转换资源 URL 的好处是：

file-loader 可以指定要复制和放置资源文件的位置，以及如何使用版本哈希命名以获得更好的缓存。此外，这意味着 你可以就近管理图片文件，可以使用相对路径而不用担心部署时 URL 的问题。使用正确的配置，webpack 将会在打包输出中自动重写文件路径为正确的 URL。

url-loader 允许你有条件地将文件转换为内联的 base-64 URL (当文件小于给定的阈值)，这会减少小文件的 HTTP 请求数。如果文件大于该阈值，会自动的交给 file-loader 处理。
