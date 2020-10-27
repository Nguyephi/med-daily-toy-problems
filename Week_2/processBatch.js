function minTime(batchSize, processingTime, numTasks) {
    // Write your code here
    let max = 0
    for (let i = 0; i < numTasks.length; i++) {
        let numOfBatch = Math.ceil(numTasks[i] / batchSize[i])
        let totalTime = processingTime[i] * numOfBatch
        max = Math.max(totalTime, max)
    }
    return max
}

console.log(minTime([3, 2, 5, 7], [5, 4, 10, 12], [10, 6, 10, 5]))