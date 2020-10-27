var generate = function (numRows) {
    let result = []
    if (numRows === 0) return result
    result.push([1])
    for (let rowNum = 1; rowNum < numRows; rowNum++) {
        let row = []
        let prevRow = result[rowNum - 1]
        row.push(1)
        for (let i = 1; i < rowNum; i++) {
            row.push(prevRow[i - 1] + prevRow[i])
        }
        row.push(1)
        result.push(row)
    }
    return result
};

// console.log(generate(10))

// Recursion
// var getRow = function (rowIndex) {
//     let result = [];
//     // each row will have rowIndex + 1, when I loop I make i <= rowIndex
//     for (let i = 0; i <= rowIndex; i++) {
//         result.push(getNum(rowIndex, i))
//     }

//     return result
// };

// var getNum = function (row, col) {
//     if (row === 0 || col === 0 || row === col) return 1;

//     return getNum(row - 1, col - 1) + getNum(row - 1, col)
// }

// Memory-efficient Dynamic Programing
var getRow = function (rowIndex) {
    let result = []
    result.push(1)

    for (let i = 0; i < rowIndex; i++) {
        for (let j = i; j > 0; j--) {
            result[j] = result[j] + result[j - 1]
        }
        result.push(1)
    }
    return result
}

console.log(getRow(30))