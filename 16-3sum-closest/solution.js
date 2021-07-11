function threeSumClosest(nums, target) {
    nums.sort(function (a, b) {
        return a - b;
    });
    var closestSumSoFar = Infinity;
    for (var i = 0; i < nums.length; i++) {
        var left = i + 1;
        var right = nums.length - 1;
        var secondaryTarget = target - nums[i];
        while (left < right) {
            var possibleSum = nums[i] + nums[left] + nums[right];
            if (Math.abs(target - possibleSum) < Math.abs(target - closestSumSoFar)) {
                closestSumSoFar = possibleSum;
            }
            if (nums[left] + nums[right] < secondaryTarget) {
                left++;
            }
            else {
                right--;
            }
        }
    }
    return closestSumSoFar;
}
;
console.log(threeSumClosest([-1, 2, 1, -4], 1));
