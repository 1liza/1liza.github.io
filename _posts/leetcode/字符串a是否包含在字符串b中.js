/**
 * 字符串的索引是字符串，不能直接相加
 * 需要~~i + ~~j
 */
let isContain = function(a, b) {
    let flag = false;
    for (let i in b){
        if (b[i]==a[0]) {
            flag = true;
            for (let j in a) {
                if (a[j] !== b[~~i + ~~j]) {
                    flag = false;
                    break;
                }
            }
            if (flag) {
                return i
            }
        }
    }
    return -1
}

console.log(isContain('34', '12324567'))