

function LazyMan(name){
    this.name = name;
    let self = this;
    console.log(`Hi I am ${this.name}`);
    sleep = function(delay) {
        let pro = new Promise((resolve)=>{
            setTimeout(resolve, delay*1000)
        })
        pro.then(()=>self)
    }
    eat = function() {
        console.log('I am eating lunch');
        return self;
    }
}


LazyMan('Tony');
// Hi I am Tony

LazyMan('Tony').sleep(10).eat('lunch');
// Hi I am Tony
// 等待了10秒...
// I am eating lunch

LazyMan('Tony').eat('lunch').sleep(10).eat('dinner');
// Hi I am Tony
// I am eating lunch
// 等待了10秒...
// I am eating diner

LazyMan('Tony').eat('lunch').eat('dinner').sleepFirst(5).sleep(10).eat('junk food');
// Hi I am Tony
// 等待了5秒...
// I am eating lunch
// I am eating dinner
// 等待了10秒...
// I am eating junk food