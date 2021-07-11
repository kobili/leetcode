function maxProfit(prices: number[]): number {

    let maxProfit = 0;
    let lowestPrice = prices[0];

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < lowestPrice) {
            lowestPrice = prices[i];
        } else {
            let profit = prices[i] - lowestPrice;
            if (profit > maxProfit) {
                maxProfit = profit;
            }
        }
    }

    return maxProfit;
}

console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfit([7,6,4,3,1]));
console.log(maxProfit([2, 4, 1]));