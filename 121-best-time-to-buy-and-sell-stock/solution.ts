function maxProfit(prices: number[]): number {

    let profit = new Array<number>(prices.length);
    profit[0] = 0;

    for (let i = 1; i < prices.length; i++) {
        let largestProfit = -Infinity;

        for (let j = 0; j < i; j++) {
            let potentialProfit = prices[i] - prices[j];
            if (potentialProfit > largestProfit) {
                largestProfit = potentialProfit;
            }
        }

        profit[i] = largestProfit > 0 ? largestProfit : 0;

    }

    let maxProfit = profit[0];
    for (let i = 1; i < profit.length; i++) {
        if (profit[i] > maxProfit) {
            maxProfit = profit[i];
        }
    }

    return maxProfit;
};

console.log(maxProfit([7,1,5,3,6,4]));          // expected: 5
console.log(maxProfit([7,6,4,3,1]));            // expected: 0
console.log(maxProfit([2, 4, 1]));              // expected: 2