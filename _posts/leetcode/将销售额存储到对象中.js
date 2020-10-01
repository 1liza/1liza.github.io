//如下：{1:222, 2:123, 5:888}，请把数据处理为如下结构：[222, 123, null, null, 888, null, null, null, null, null, null, null]。
let a = {1:222, 2:123, 5:888};
a.length = 12;
let ans = Array.from(a)
console.log(ans)
/**[
  undefined, 222,
  123,       undefined,
  undefined, 888,
  undefined, undefined,
  undefined, undefined,
  undefined, undefined
] */

let a = {1:222, 2:123, 5:888};
let ans = [];
for(let month=1; month<13; month++) {
    if(a[month]!==undefined) {
        ans[month-1] = a[month]
    }
    else {
        ans[month-1] = null;
    }
}
console.log(ans)

let a =  {1:222, 2:123, 5:888};
let ans = Array(12).fill(null);
for(let key in a) {
    ans[key-1] = a[key]
}
console.log(ans)

let a =  {1:222, 2:123, 5:888};
let ans = Array.from({length: 12}).map((item, index)=>{
    return (a[index+1]) ? a[index+1] : null;
})
console.log(ans)