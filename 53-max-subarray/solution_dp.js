function maxSubArray(nums) {
    var n = nums.length;
    var localMax = 0;
    var globalMax = -Infinity;
    for (var i = 0; i < n; i++) {
        localMax = nums[i] > nums[i] + localMax ? nums[i] : nums[i] + localMax;
        globalMax = localMax > globalMax ? localMax : globalMax;
    }
    return globalMax;
}
;
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
