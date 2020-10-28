var myPow = function (x, n) {
    if (n < 0) {
        x = 1 / x
        n = -n
    }

    function pow(x, n) {
        if (n === 0) {
            return 1
        }
        let half = pow(x, Math.floor(n / 2))
        if (n % 2 === 0) {
            return half * half
        } else {
            return half * half * x
        }
    }

    return pow(x, n)
};

console.log(myPow(2, 10))