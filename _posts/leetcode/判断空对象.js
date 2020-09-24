//
function isEmpty(obj) {
    for(let i in obj) {
        return false;
    }
    return true;
}

function isEmpty(obj) {
    // return JSON.stringify(obj).length ? true : false;
    return JSON.stringify(obj)==='{}' ? true : false;
}

function isEmpty(obj) {
    return Object.keys(obj).length==0 ? true : false;
}

console.log(isEmpty({})) 