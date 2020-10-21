var multiply = function (num1, num2) {
    let x = num1.length
    let y = num2.length
    // initialize arr equal to the length of num1 and num2 and fill with 0
    let vals = Array(x + y).fill(0)
    // iterate through length of num1 in reverse
    for (let i = x - 1; i >= 0; i--) {
        // iterate through num2 in reverse
        for (let j = y - 1; j >= 0; j--) {
            // multiply at the last idx of num1 and num2 (subtract by '0' to convert from str to int before multiplying)
            let mul = (num1.charAt(i) - '0') * (num2.charAt(j) - '0')
            // sum is the val of the last idx in vals plus mul
            let sum = vals[i + j + 1] + mul
            // carry the number to the next idx and store value
            vals[i + j] += parseInt(sum / 10)
            console.log(vals[i + j])
            // store value of last idx value as modulo of 10
            vals[i + j + 1] = parseInt(sum % 10)
        }
    }
    // convert to vals arr to string
    let result = '';
    for (let int of vals) {
        // check if length is not 0 or if int is not 0 to remove any trailing 0
        if (result.length !== 0 || int !== 0) {
            result += int
        }
    }

    return result.length === 0 ? '0' : result
};

console.log(multiply('2', '3'))
console.log(multiply('3', '37'))