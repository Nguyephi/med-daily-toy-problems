var kthGrammar = function (N, K) {
    if (N === 1) return 0
    return (1 - K % 2) ^ kthGrammar(N - 1, Math.ceil(K / 2))
};

// console.log(kthGrammar(3, 4))



