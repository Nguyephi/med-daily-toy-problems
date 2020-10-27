// Recursion using memoization (reduces duplicate calculations)
let hash = {}
var fib = function (N) {
    let result;
    if (hash[N]) return hash[N]
    if (N < 2) {
        result = N
    } else {
        result = fib(N - 1) + fib(N - 2)
    }
    hash[N] = result
    return result
};

console.log(fib(200))