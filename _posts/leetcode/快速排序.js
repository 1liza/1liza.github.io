//快速排序
let quickSort = function(arr) {
    if(arr.length<=1) return arr;
    let midIndex = Math.floor(arr.length / 2);
    let mid = arr.splice(midIndex, 1);
    let right = [];
    let left = [];

    for (let i=0; i<arr.length; i++) {
        if(mid>arr[i]) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return quickSort(left).concat(mid, quickSort(right))
}

quickSort = function(arr, left=0, right=arr.length-1) {
    if(left>right) return;

    leftPoint = left;
    rightPoint = right;
    tmp = arr[left];

    while(leftPoint!=rightPoint) {
        while(leftPoint<rightPoint && arr[rightPoint]>=tmp) {
            rightPoint--;
        }
        while(leftPoint<rightPoint && arr[leftPoint]<=tmp) {
            leftPoint++;
        }
        if(leftPoint<rightPoint) {
            [arr[leftPoint], arr[rightPoint]] = [arr[rightPoint], arr[leftPoint]];
        }
    }
    [arr[left], arr[leftPoint]] = [arr[leftPoint], arr[left]]
    quickSort(arr, left, leftPoint-1);
    quickSort(arr, leftPoint+1, right);
    return arr;
}
let arr = [85, 24, 63, 45, 17, 24, 31, 96, 50];
console.log(quickSort(arr))