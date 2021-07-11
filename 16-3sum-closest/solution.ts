function threeSumClosest(nums: number[], target: number): number {

    nums.sort((a: number, b: number) => {
        return a - b;
    });

    let closestSumSoFar = Infinity;

    for (let i = 0; i < nums.length; i++) {
        
        let left = i + 1;
        let right = nums.length-1;

        let secondaryTarget = target - nums[i];

        while (left < right) {
            let possibleSum = nums[i] + nums[left] + nums[right];

            if (Math.abs(target - possibleSum) < Math.abs(target - closestSumSoFar)) {
                closestSumSoFar = possibleSum;
            }

            if (nums[left] + nums[right] < secondaryTarget) {
                left++;
            } else {
                right--;
            }
        }
    }

    return closestSumSoFar;
};

console.log(threeSumClosest([-1,2,1,-4], 1));


