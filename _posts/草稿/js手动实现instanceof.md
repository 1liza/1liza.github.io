## js手动实现instanceof

```js
function instance_of(L, R) {
    let o = R.prototype;
    L = L.__proto__;
    while(true) {
        if (L===null) {
            return false;
        }
        if (L === R) {
            return true;
        }
        L = L.__proto__;
    }
}
```