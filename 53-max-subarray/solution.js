function maxSubArray(nums) {
    var largestSumsStartingAtIndex = new Array(nums.length);
    for (var i = 0; i < nums.length; i++) {
        var j = nums.length - 1;
        var currentSum = sum(nums, i, nums.length - 1);
        var largestSum = currentSum;
        while (i < j) {
            currentSum -= nums[j];
            largestSum = currentSum > largestSum ? currentSum : largestSum;
            j--;
        }
        largestSumsStartingAtIndex[i] = largestSum;
    }
    console.log(largestSumsStartingAtIndex);
    return max(largestSumsStartingAtIndex);
}
;
var sum = function (array, start, end) {
    var sum = 0;
    for (var i = start; i <= end; i++) {
        sum += array[i];
    }
    return sum;
};
var max = function (array) {
    var max = array[0];
    for (var i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
};
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
