function divisorGame(n: number): boolean {

    let dp: boolean[] = new Array<boolean>(n+1);
    dp[0] = false; dp[1] = false;

    for (let i = 2; i <= n; i++) {
        for (let j = 1; j < Math.sqrt(i); j++) {
            if (i % j == 0 && !dp[i - j]) {
                dp[i] = true;
                break;
            } else {
                dp[i] = false;
            }
        }
    }

    return dp[n];
};

console.log(divisorGame(6));