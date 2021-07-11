function countBits(n: number): number[] {

    let ans: number[] = [];
    ans.push(0);

    for (let i = 1; i <= n; i++) {
        if (isPowerOfTwo(i)) {
            ans.push(1);
        } else {
            if (i % 2 == 0) {
                // if i is even, then its least significant bit will be zero, so dividing it by 2 (right shifting) will not change the number of 1 bits
                ans.push(ans[Math.floor(i / 2)]);
            } else {
                // if i is odd, then its least significatn bit will be one, so dividing it by 2 will reduce the number of bits by 1
                ans.push(ans[Math.floor(i / 2)] + 1);
            }
        }
    }

    return ans;
};


let isPowerOfTwo = (n: number): boolean => {

    // n is an odd number
    if (n % 2 != 0) {
        return false;
    }

    while (n % 2 == 0) {
        n = n / 2;

        // for a power of 2 being divided by 2, it should only become odd when it is 1
        if (n % 2 != 0 && n != 1) {
            return false;
        }
    }

    return true;
}

console.log(countBits(2));
console.log(countBits(5));
console.log(countBits(8));