function maxProfit(prices) {
    var profit = new Array(prices.length);
    profit[0] = 0;
    for (var i = 1; i < prices.length; i++) {
        var largestProfit = -Infinity;
        for (var j = 0; j < i; j++) {
            var potentialProfit = prices[i] - prices[j];
            if (potentialProfit > largestProfit) {
                largestProfit = potentialProfit;
            }
        }
        profit[i] = largestProfit > 0 ? largestProfit : 0;
    }
    var maxProfit = profit[0];
    for (var i = 1; i < profit.length; i++) {
        if (profit[i] > maxProfit) {
            maxProfit = profit[i];
        }
    }
    return maxProfit;
}
;
console.log(maxProfit([7, 1, 5, 3, 6, 4])); // expected: 5
console.log(maxProfit([7, 6, 4, 3, 1])); // expected: 0
console.log(maxProfit([2, 4, 1])); // expected: 2
