let a=[1,2,3,4];
let b = [2,3,6,7];

function findMidNum(a, b, k) {
    let m = a.length;
    let n = b.length;
    let indexA=0, indexB = 0;
    while(true) {
        if(indexA==m) {
            return b[indexB+k-1];
        }
        if(indexB==n) {
            return a[indexA+k-1]
        }
        if(k==1) {
            return Math.min(a[indexA], b[indexB])
        }
        let tmp = Math.floor(k/2)
        newIndexA = Math.min(indexA+tmp-1, m-1);
        newIndexB = Math.min(indexB+tmp-1, n-1);
        if(a[newIndexA]<=b[newIndexB]) {
            k-=newIndexA-indexA+1;
            indexA = newIndexA+1;
        } else{
            k-=newIndexB-indexB+1;
            indexB = newIndexB+1;
        }

    }
}
totalLen = a.length+b.length;
if (totalLen%2==1){
    console.log(findMidNum(a, b, (totalLen+1)/2))
}else {
    console.log((findMidNum(a, b, totalLen/2)+findMidNum(a, b, totalLen/2+1))/2)
}