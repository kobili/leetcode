let example1 = {
    nums : [2, 7, 11, 15],
    target: 9
};

let example2 = {
    nums : [3,2,4],
    target: 6
};

let example3 = {
    nums : [3,3],
    target: 6
};

function twoSum(nums: number[], target: number): number[] {
    let values = findValues(nums, target);

    let retVal: number[] = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === values[0] || nums[i] === values[1]) {
            retVal.push(i);
        }
    }

    return retVal;
};

let findValues = (nums: number[], target: number): number[] => {
    let sorted_array = mergeSort(nums);

    let i = 0; let j = sorted_array.length - 1;

    while (i < j) {
        let complement = target - sorted_array[i];

        while (sorted_array[j] >= complement) {
            if (sorted_array[j] === complement) {
                return [sorted_array[i], sorted_array[j]];
            }
            j--;
        }

        i++;
    }

    return [];
}


let mergeSort = (array: number[]): number[] => {
    if (array.length <= 1) {
        return array;
    }

    let midPointIndex = Math.ceil(array.length / 2);

    let leftArray = mergeSort(array.slice(0, midPointIndex));
    let rightArray = mergeSort(array.slice(midPointIndex));

    let i = 0; let j = 0;

    let retVal: number[] = [];
    while (i < leftArray.length && j < rightArray.length) {
        if (leftArray[i] < rightArray[j]) {
            retVal.push(leftArray[i]);
            i++;
        } else {
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
}

console.log(twoSum(example1.nums, example1.target));
console.log(twoSum(example2.nums, example2.target));
console.log(twoSum(example3.nums, example3.target));