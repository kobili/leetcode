function maxSubArray(nums: number[]): number {

    // Kadane's Algorithm
    let n = nums.length;
    let localMax = 0;
    let globalMax = -Infinity;

    for (let i = 0; i < n; i++) {
        localMax = nums[i] > nums[i] + localMax ? nums[i] : nums[i] + localMax;
        
        globalMax = localMax > globalMax ? localMax : globalMax;
    }

    return globalMax;

};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
