a = {
    "name":'li',
    "age":24,
    "hobby":null,
    sayName:function(){
        console.log(this.name)
    }
}

b = JSON.parse(JSON.stringify(a))
console.log(b)