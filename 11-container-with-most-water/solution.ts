function maxArea(height: number[]): number {

    let maxArea = 0;

    let left = 0;
    let right = height.length-1;

    while (left < right) {
        let area = (right - left) * min(height[left], height[right]);
        maxArea = area > maxArea ? area : maxArea;

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea

};

let min = (a: number, b: number): number => {
    return a < b ? a : b;
}

console.log(maxArea([1,8,6,2,5,4,8,3,7]));
console.log(maxArea([1,1]));
console.log(maxArea([4,3,2,1,4]));
console.log(maxArea([1,2,1]));
console.log(maxArea([1,2,3,4]));