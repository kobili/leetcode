let example1: number[] = [-1,0,1,2,-1,-4];
let example2: number[] = [];
let example3: number[] = [0];

function threeSum(nums: number[]): number[][] {

    let ret: number[][] = [];

    nums.sort((a: number, b: number) => {
        return a - b;
    });

    for (let i = 0; i < nums.length - 2; i++) {
        if (i == 0 || nums[i] !== nums[i-1]) {
            let sum = -nums[i];
            let left = i+1;
            let right = nums.length-1;

            while (left < right) {
                if (nums[left] + nums[right] === sum) {
                    ret.push([nums[i], nums[left], nums[right]]);

                    // increment/decrement the left/right points to skip over any duplicates
                    while (left < right && nums[left] === nums[left+1]) {
                        left++;
                    }
                    while (left < right && nums[right-1] === nums[right]) {
                        right--;
                    }
                    left++;
                    right--;
                } else if (nums[left] + nums[right] > sum) {
                    right--;
                } else if (nums[left] + nums[right] < sum) {
                    left++;
                }
            }
        }
    }

    return ret;
};

console.log(threeSum(example1));
console.log(threeSum(example2));
console.log(threeSum(example3));
