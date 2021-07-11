function maxSubArray(nums: number[]): number {

    let largestSumsStartingAtIndex: number[] = new Array<number>(nums.length);

    for (let i = 0; i < nums.length; i++) {
        let j = nums.length-1;

        let currentSum = sum(nums, i, nums.length-1);
        let largestSum = currentSum;

        while (i < j) {
            currentSum -= nums[j];
            largestSum = currentSum > largestSum ? currentSum : largestSum;
            j--;
        }

        largestSumsStartingAtIndex[i] = largestSum;
    }

    return max(largestSumsStartingAtIndex);
};

let sum = (array: number[], start: number, end: number): number => {
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += array[i];
    }

    return sum;
}

let max = (array: number[]): number => {
    let max = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }

    return max;
}


console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));