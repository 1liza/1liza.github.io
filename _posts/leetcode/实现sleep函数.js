function sleep(delay) {
    return new Promise((resovle)=>{
        setTimeout(resovle(1), delay)
    })
}
sleep(1000).then((res)=>{
    console.log(res)
})

//genetator
function *sleep(delay) {
    yield new Promise((resolve)=>{
        setTimeout(resolve(1), delay)
    })
}
sleep(1000).next().value.then((res)=>{
    console.log(res)
})

function sleep(delay) {
    return new Promise((resolve)=>{
        setTimeout(resolve(1), delay)
    })
}
async function output() {
    let out = await sleep(1000);
    console.log(out)
}
output()