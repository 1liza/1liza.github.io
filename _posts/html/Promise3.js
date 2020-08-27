const tasks = []
for(var i=0; i<5; i++) {
    ((i) => {
        tasks.push(new Promise((resolve) => {
            setTimeout(()=>{
                console.log(new Date, i)
                resolve()
            }, 1000*i)
        }))
    })(i)
}

Promise.all(tasks).then(()=>{
    setTimeout(()=>{
        console.log(new Date, i)
    }, 1000)
})