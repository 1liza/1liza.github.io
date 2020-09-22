# cookie

## Cookie 值的存储

域名下的 cookie 一般来说是最大是 4KB。

存储是以 Name=Value 的形式。

当客户端要发送http请求时，浏览器会先检查下是否有对应的cookie。有的话，则自动地添加在request header中的cookie字段。

### 存储哪些

它其中记录了你的用户名、密码、浏览的网页、停留的时间等等信息。当你再次来到这个网站时，web服务器会先看看有没有它上次留下来的cookie。如果有的话，会读取cookie中的内容，来判断使用者，并送出相应的网页内容，比如在页面显示欢迎你的标语，或者让你不用输入ID、密码就直接登录等等。

## cookie属性

### Domain / Path 作用域
Domain 是限制域名，设置为 www.lilnong.top 的话，cors.lilnong.top 就获取不到了。
Path 是限制路径，如果设置为 /cors 的话，/api 下的请求就不会携带该 cookie。

### Expires / Max-Age 有效性
Expires 是当前 Cookie 的过期时间，默认是会话级别。

Max-Age 是当前 Cookie 经过多少秒失效。

大于 0 是计算经过多少秒失效
等于 0 是会话级别，关闭浏览器就失效
小于 0 是指 cookie 无效，立即删除
Max-Age 的优先级比 Expires 更高。

### HttpOnly 安全性
设置以后客户端脚本就无法通过 document.cookie 等方式获取。
有助于避免 XSS 攻击。

### Secure 安全性
设置以后客户端只有 HTTPS 协议下才会发送给服务端。
使用 HTTPS 安全协议，可以保护 Cookie 在浏览器和 Web 服务器间的传输过程中不被窃取和篡改。

### SameSite 安全性
可以设置 Cookie 在什么场景下会被发送。从而屏蔽跨站时发送 cookie，用于阻止跨站请求伪造攻击（CSRF）。

SameSite 可以设置下面三个值：

Strict 只允许同站请求携带 Cookie。比如 lilnong.top 跳转到 www.lilnong.top/cors/，就属于同站。
Lax（chrome 80 后的默认值） 允许部分第三方请求场景 携带Cookie。
None（chrome 80 前的默认值） 无论是否跨站都会发送 Cookie。必须同时加上 Secure 属性，否则无效，也就是说只支持 HTTPS。

IOS 12 的 Safari 以及老版本的一些 Chrome 会把 SameSite=none 识别成 SameSite=Strict，所以服务端必须在下发 Set-Cookie 响应头时进行 User-Agent 检测，对这些浏览器不下发 SameSite=none 属性

## 设置cookie

- 响应头中的 Set-Cookie，这个属于最常用的方式。
Set-Cookie: key1=value1; path=path; domain=domain; max-age=max-age-in-seconds; expires=date-in-GMTString-format; secure; httponly; SameSite=None
- document.cookie="key=value" 这种是前端设置 cookie 。
