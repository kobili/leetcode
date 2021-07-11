var example1 = [-1, 0, 1, 2, -1, -4];
var example2 = [];
var example3 = [0];
function threeSum(nums) {
    var ret = [];
    nums.sort(function (a, b) {
        return a - b;
    });
    for (var i = 0; i < nums.length; i++) {
        if (i == 0 || nums[i] !== nums[i - 1]) {
            var sum = -nums[i];
            var left = i + 1;
            var right = nums.length - 1;
            while (left < right) {
                if (nums[left] + nums[right] === sum) {
                    ret.push([nums[i], nums[left], nums[right]]);
                    // increment/decrement the left/right points to skip over any duplicates
                    while (left < right && nums[left] === nums[left + 1]) {
                        left++;
                    }
                    while (left < right && nums[right - 1] === nums[right]) {
                        right--;
                    }
                    left++;
                    right--;
                }
                else if (nums[left] + nums[right] > sum) {
                    right--;
                }
                else if (nums[left] + nums[right] < sum) {
                    left++;
                }
            }
        }
    }
    return ret;
}
;
console.log(threeSum(example1));
console.log(threeSum(example2));
console.log(threeSum(example3));
