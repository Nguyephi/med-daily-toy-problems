// Recursion
// var climbStairs = function (n) {
//     function climbCombo(i, n) {
//         if (i > n) {
//             return 0
//         }
//         if (i === n) {
//             return 1
//         }
//         return climbCombo(i + 1, n) + climbCombo(i + 2, n);
//     }
//     return climbCombo(0, n)
// };

// Recursion with memoisation
var climbStairs = function (n) {
    let memo = [];
    function climbCombo(i, n, memo) {
        if (i > n) {
            return 0
        }
        if (i === n) {
            return 1
        }
        if (memo[i] > 0) {
            return memo[i]
        }
        memo[i] = climbCombo(i + 1, n, memo) + climbCombo(i + 2, n, memo)
        return memo[i]
    }
    return climbCombo(0, n, memo)
};

console.log(climbStairs(10))