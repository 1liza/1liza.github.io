//统计h开头标签
let list = Array.from(document.getElementsByTagName('*'))
const ans = []
let reg = /^[hs].*$/
for (let a of list) {
    let tmp = a.tagName.toLowerCase();
    if(reg.test(tmp) && ans.indexOf(tmp)===-1) {
        ans.push(tmp)
    }
}

//统计h开头标签数量
let all = Array.from(document.getElementsByTagName('*'))
const ans = []
const reg = /^[hs].*$/
const obj = Object.create(null)
all.map(item=>{//也可以换成forEach
    const tagname = item.tagName.toLowerCase()
    if(reg.test(tagname)) {
        obj[tagname]===undefined ? (obj[tagname]=1, ans.push(tagname)) : obj[tagname]+=1
    }
})
console.log(obj)
for (let i in obj) {
    console.log(i, obj[i])
}