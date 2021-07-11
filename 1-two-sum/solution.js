var example1 = {
    nums: [2, 7, 11, 15],
    target: 9
};
var example2 = {
    nums: [3, 2, 4],
    target: 6
};
var example3 = {
    nums: [3, 3],
    target: 6
};
function twoSum(nums, target) {
    var values = findValues(nums, target);
    var retVal = [];
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] === values[0] || nums[i] === values[1]) {
            retVal.push(i);
        }
    }
    return retVal;
}
;
var findValues = function (nums, target) {
    var sorted_array = mergeSort(nums);
    var i = 0;
    var j = sorted_array.length - 1;
    while (i < j) {
        var complement = target - sorted_array[i];
        while (sorted_array[j] >= complement) {
            if (sorted_array[j] === complement) {
                return [sorted_array[i], sorted_array[j]];
            }
            j--;
        }
        i++;
    }
    return [];
};
var mergeSort = function (array) {
    if (array.length <= 1) {
        return array;
    }
    var midPointIndex = Math.ceil(array.length / 2);
    var leftArray = mergeSort(array.slice(0, midPointIndex));
    var rightArray = mergeSort(array.slice(midPointIndex));
    var i = 0;
    var j = 0;
    var retVal = [];
    while (i < leftArray.length && j < rightArray.length) {
        if (leftArray[i] < rightArray[j]) {
            retVal.push(leftArray[i]);
            i++;
        }
        else {
            retVal.push(rightArray[j]);
            j++;
        }
    }
    while (i < leftArray.length) {
        retVal.push(leftArray[i]);
        i++;
    }
    while (j < rightArray.length) {
        retVal.push(rightArray[j]);
        j++;
    }
    return retVal;
};
console.log(twoSum(example1.nums, example1.target));
console.log(twoSum(example2.nums, example2.target));
console.log(twoSum(example3.nums, example3.target));
