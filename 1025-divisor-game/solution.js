function divisorGame(n) {
    var dp = new Array(n + 1);
    dp[0] = false;
    dp[1] = false;
    for (var i = 2; i <= n; i++) {
        for (var j = 1; j < Math.sqrt(i); j++) {
            if (i % j == 0 && !dp[i - j]) {
                dp[i] = true;
                break;
            }
            else {
                dp[i] = false;
            }
        }
    }
    return dp[n];
}
;
console.log(divisorGame(6));
