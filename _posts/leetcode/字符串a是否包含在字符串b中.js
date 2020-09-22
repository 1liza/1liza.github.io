let isContain = function(a, b) {
    flag = false;
    for (let i in b) {
        if (b[i]==a[0]) {
            flag = true;
            for (let j in a) {
                if (a[j] !== b[i+j]) {
                    flag = false;
                    break;
                }
            }
            if(flag) {
                return i
            }
        }
    }
    return -1;
}

console.log(isContain('1234567', '34'))