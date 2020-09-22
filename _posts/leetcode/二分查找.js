/**
 * 
 * right = mid-1;
 * left = mid + 1
 * right >= left
 */
let biSearch = function(target, arr) {
    let right = arr.length;
    let left = 0;
    let mid = null;
    while(right >= left) {
        mid = ~~((right+left)/2);
        if (arr[mid]==target) {
            return mid;
        }
        if(arr[mid] > target) {
            right = mid-1;
        } else {
            left = mid+1;
        }
    }
    return -1;
}

console.log(biSearch(1, [1,2,4,6,8,9,11,34,67]))