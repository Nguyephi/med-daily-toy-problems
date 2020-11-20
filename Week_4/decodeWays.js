var memo = {};
var numDecodings = function (s) {
    if (s === null || s.length === 0) return 0;
    let count = 0;
    function helper(s, idx) {
        if (idx === s.length) return 1;
        if (s.charAt(idx) === '0') return 0;

        if (idx === s.length - 1) return 1;

        if (memo.hasOwnProperty(idx)) {
            return memo[idx];
        }

        let ans = helper(s, idx + 1);
        if (parseInt(s.substring(idx, idx + 2)) <= 26) {
            ans += helper(s, idx + 2);
        }

        memo[idx] = ans;
        return ans;
    }

    return helper(s, 0)
};

console.log(numDecodings('111111111111111111111111111111111111111111111'))