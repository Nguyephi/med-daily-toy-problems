var lengthOfLongestSubstring = function (s) {
    let max = 0;
    let hash = {};
    let idx = 0;
    // iterate though str
    for (let i = 0; i < s.length; i++) {
        // check if char at current idx exist in the hash
        if (hash[s[i]] !== undefined) {
            // idx is changed if the value of char in the hash is greater than idx. This helps to determine the beginning of substr if it has a char that repeated previously
            idx = Math.max(hash[s[i]], idx)
        }
        // get the max length by comparing current max with current substr length
        max = Math.max(max, i - idx + 1)
        // update hash with key as current char and value as idx + 1 to get the beginning of subStr when it is in the hash again
        hash[s[i]] = i + 1
    }
    return max
};

console.log(lengthOfLongestSubstring('dvvdfd'))