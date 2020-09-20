console.log(['1','2','3'].map(parseInt))

console.log(['1','2','3'].map(item=>{
    return parseInt(item)
}))

console.log(['1','2','3'].map(item=>{
    return +item
}))
