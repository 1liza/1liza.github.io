let mostLetter = function(str) {
    if (!str.length) {
        return -1;
    }
    let map = new Map();
    let max = 1;
    let maxL = str[0];
    for (let s of str) {
        if (map[s]===undefined) {
            map[s] = 1;
        } else {
            map[s] += 1;
            map[s] > max ? (max = map[s], maxL=s) : ''
        }
    }
    console.log(map)
    return maxL;
}

let mostLetter1 = function(str) {
    let reg = /(\w)\1+/g;
    let max = 0;
    let ans = str[0];
    str.replace(reg, ($0, $1)=>{
        $0.length>max ? (max=$0.length, ans=$1) : ''
    })
    return ans
}

console.log(mostLetter1('afjghdfraaaasdenas'))