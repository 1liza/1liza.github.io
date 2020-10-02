
let arr = Array.from({length: 10}).map(() => {
    return Math.floor(Math.random()*100);
})
// arr = Array.from(new Set(arr))
arr = [...new Set(arr)]
console.log(arr)

map = {};
for (let i of arr) {
    let dec = Math.floor(i/10);
    if(map[dec]) {
        console.log(map)
        map[dec].push(i)
    } else {
        map[dec] = [i]
    }
}
ans =[]
for (let i in map) {
    if(map[i]) {
        ans.push(map[i])
    }
}
console.log(ans)