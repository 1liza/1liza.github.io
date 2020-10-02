let a = [0,1,0,3,12]

function moveZero(arr) {
    for(let i in arr) {
        if(arr[i]===0) {
            arr.push(0);
            arr.splice(i, 1);
        }
    }
    return arr
}

function moveZero(arr) {
    let i=0, j=0;
    while(j<arr.length) {
        if(arr[i]!==0){
            i++;
        }else if(arr[j]!==0) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++
        }
        j++;
    }
    return arr;
}
console.log(moveZero(a))