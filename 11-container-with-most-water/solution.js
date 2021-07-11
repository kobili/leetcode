function maxArea(height) {
    var maxArea = 0;
    var left = 0;
    var right = height.length - 1;
    while (left < right) {
        var area = (right - left) * min(height[left], height[right]);
        maxArea = area > maxArea ? area : maxArea;
        if (height[left] < height[right]) {
            left++;
        }
        else {
            right--;
        }
    }
    return maxArea;
}
;
var min = function (a, b) {
    return a < b ? a : b;
};
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([1, 1]));
console.log(maxArea([4, 3, 2, 1, 4]));
console.log(maxArea([1, 2, 1]));
console.log(maxArea([1, 2, 3, 4]));
