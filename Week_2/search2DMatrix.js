var searchMatrix = function (matrix, target) {
    if (matrix === null || matrix.length === 0) {
        return false;
    }

    function search(left, up, right, down) {
        if (left > right || up > down) {
            return false
        } else if (target < matrix[up][left] || target > matrix[down][right]) {
            return false
        }

        let mid = left + Math.floor((right - left) / 2);

        let row = up
        while (row <= down && matrix[row][mid] <= target) {
            if (matrix[row][mid] === target) {
                return true
            }
            row++
        }

        return search(left, row, mid - 1, down) || search(mid + 1, up, right, row - 1)
    }

    return search(0, 0, matrix[0].length - 1, matrix.length - 1)

};

console.log(searchMatrix(
    [[1, 4, 7, 11, 15, 20, 29],
    [2, 5, 8, 12, 19, 25, 34],
    [3, 6, 9, 16, 22, 27, 35],
    [10, 13, 14, 17, 24, 28, 37],
    [18, 21, 23, 26, 30, 32, 40]], 10))