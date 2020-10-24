var reverseString = function (s) {
    function helper(str, left, right) {
        if (left >= right) return

        let temp = str[left]
        str[left] = str[right]
        left++
        str[right] = temp
        right--
        helper(str, left, right)
    }
    helper(s, 0, s.length - 1)
    return s
};

console.log(reverseString(["h", "e", "l", "l", "o"]))