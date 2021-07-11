function fib(n) {
    var fibNumbers = [];
    fibNumbers.push(0);
    fibNumbers.push(1);
    for (var i = 2; i <= n; i++) {
        fibNumbers.push(fibNumbers[i - 2] + fibNumbers[i - 1]);
    }
    return fibNumbers[n];
}
;
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
