var quickSort = function (arr) {
    let n = arr.length
    qSort(arr, 0, n - 1)
    return arr
}

var qSort = function (arr, lo, hi) {
    if (lo < hi) {
        let p = partition(arr, lo, hi)
        qSort(arr, lo, p - 1)
        qSort(arr, p + 1, hi)
    }
}

var partition = function (arr, lo, hi) {
    let pivot = arr[hi]
    let i = lo
    for (let j = lo; j < hi; j++) {
        if (arr[j] < pivot) {
            [arr[i], arr[j]] = [arr[j], arr[i]]
            i++
        }
    }
    [arr[i], arr[hi]] = [arr[hi], arr[i]]
    return i
}

console.log(quickSort([2, 3, 8, 5, 1, 7, 6, 4]))