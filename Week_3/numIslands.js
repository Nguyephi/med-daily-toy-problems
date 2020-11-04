// DFS
// var dfs = function (grid, r, c) {
//     let row = grid.length;
//     let col = grid[0].length;

//     if (r < 0 || c < 0 || r >= row || c >= col || grid[r][c] === '0') return

//     grid[r][c] = '0'
//     dfs(grid, r - 1, c)
//     dfs(grid, r + 1, c)
//     dfs(grid, r, c - 1)
//     dfs(grid, r, c + 1)
// }

// var numIslands = function (grid) {
//     if (grid === null || grid.length === 0) {
//         return 0;
//     }

//     let row = grid.length;
//     let col = grid[0].length;
//     let numIsland = 0
//     for (let r = 0; r < row; r++) {
//         for (let c = 0; c < col; c++) {
//             if (grid[r][c] === '1') {
//                 numIsland++
//                 dfs(grid, r, c)
//             }
//         }
//     }

//     return numIsland
// };

// BFS


var bfs = function (grid, r, c) {
    const dir = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0],
    ];
    let que = [[r, c]]
    grid[r][c] = '0'

    while (que.length) {
        for (let i = 0; i < que.length; i++) {
            let [row, col] = que.pop();

            for (let [x, y] of dir) {
                let curRow = row + x
                let curCol = col + y

                if (curRow < 0 || curCol < 0 || curRow >= grid.length || curCol >= grid[0].length || grid[curRow][curCol] === '0') {
                    continue;
                }

                grid[curRow][curCol] = '0'
                que.unshift([curRow, curCol])
            }
        }
    }
}

var numIslands = function (grid) {
    if (grid === null || grid.length === 0) {
        return 0;
    }

    let row = grid.length;
    let col = grid[0].length;
    let numIsland = 0
    for (let r = 0; r < row; r++) {
        for (let c = 0; c < col; c++) {
            if (grid[r][c] === '1') {
                numIsland++;
                bfs(grid, r, c)
            }
        }
    }

    return numIsland
}

// console.log(numIslands([["1", "1", "1", "1", "0"], ["1", "1", "0", "1", "0"], ["1", "1", "0", "0", "0"], ["0", "0", "0", "0", "0"]]))
console.log(numIslands([["1", "1", "0", "0", "0"], ["1", "1", "0", "0", "0"], ["0", "0", "1", "0", "0"], ["0", "0", "0", "1", "1"]]))

