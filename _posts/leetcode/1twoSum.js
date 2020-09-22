var twoSum = function(nums, target) {
    while (nums.length!==0) {
        let n = nums.pop();
        idx1 = nums.indexOf(target-n);
        if (idx1!==-1) {
            return [idx1, nums.length]
        }
    }
}

console.log(twoSum([3,3] ,6))