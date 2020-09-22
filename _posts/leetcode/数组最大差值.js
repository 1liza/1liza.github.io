let maxProfit = function(nums) {
    if (!nums.length) {
        return -1
    }
    let max = 0;
    let min = nums[0];
    for (let n of nums) {
        n<min ? min = n : '';
        n>max ? max = n : '';
    }
    return max-min;
}
console.log(maxProfit([1,2,3,4,5]))