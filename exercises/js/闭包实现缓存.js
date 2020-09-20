let CacheControl = (()=>{
    cacheObj = {}
    return {
        setItem: function(key, value) {
            cacheObj[key] = value
        },
        getItem: function(key) {
            return cacheObj[key]
        },
        deleteItem: function(key) {
            delete cacheObj[key]
        },
        clear: function() {
            cacheObj = {}
        }
    }
})()

CacheControl.setItem('name', 'lizhe')
console.log(CacheControl.getItem('name'))