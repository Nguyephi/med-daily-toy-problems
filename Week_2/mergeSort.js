var sortArray = function (nums) {
    if (nums.length <= 1) return nums
    let pivot = Math.floor(nums.length / 2)
    let leftArr = sortArray(nums.slice(0, pivot))
    let rightArr = sortArray(nums.slice(pivot, nums.length))
    return merge(leftArr, rightArr)
};

var merge = function (leftArr, rightArr) {
    let leftCursor = 0;
    let rightCursor = 0
    let result = []
    while (leftCursor < leftArr.length && rightCursor < rightArr.length) {
        if (leftArr[leftCursor] < rightArr[rightCursor]) {
            result.push(leftArr[leftCursor])
            leftCursor += 1
        } else {
            result.push(rightArr[rightCursor])
            rightCursor += 1
        }
    }

    if (leftCursor < leftArr.length) {
        result.push(...leftArr.slice(leftCursor, leftArr.length))
    } else if (rightCursor < rightArr.length) {
        result.push(...rightArr.slice(rightCursor, rightArr.length))
    }

    return result
}

console.log(sortArray([5, 2, 3, 1]))