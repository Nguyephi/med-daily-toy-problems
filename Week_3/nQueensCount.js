var isNotUnderAttack = function (row, col, n, rows, hills, dales) {
    let result = rows[col] + hills[row + n - col - 1] + dales[row + col]
    return result === 0 ? true : false
}

var backtrack = function (row, count, n, rows, hills, dales) {
    for (let col = 0; col < n; col++) {
        if (isNotUnderAttack(row, col, n, rows, hills, dales)) {
            rows[col] = 1
            hills[row + n - col - 1] = 1
            dales[row + col] = 1
            if (row + 1 === n) {
                count++
            } else {
                count = backtrack(row + 1, count, n, rows, hills, dales)
            }

            rows[col] = 0
            hills[row + n - col - 1] = 0
            dales[row + col] = 0
        }
    }
    return count
}

var totalNQueens = function (n) {
    let rows = Array(n).fill(0)
    let hills = Array(2 * n - 1).fill(0)
    let dales = Array(2 * n - 1).fill(0)
    return backtrack(0, 0, n, rows, hills, dales)
};

console.log(totalNQueens(4))