let p1 = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(2)
    })
})

let p2 = p1.then((res)=>{
    return `这里返回${res}`
})

let p3 = p2.then((res)=>{
    console.log(res)
})