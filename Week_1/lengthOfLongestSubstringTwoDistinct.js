var lengthOfLongestSubstringTwoDistinct = function (s) {
    let len = s.length;
    if (len < 3) return len;
    let left = 0;
    let right = 0;
    // use a hash to check if there are no more than 2 distinct words
    let hash = {};
    let max = 2

    // right is used to iterate through the length of s
    while (right < len) {
        // check if hash has less than 2 key/value pairs
        if (Object.keys(hash).length < 3) {
            // update the has with the right idx
            hash[s[right]] = right
            // increment right pointer
            right += 1
        }
        // check if hash has more than 2 distinct char
        if (Object.keys(hash).length === 3) {
            // create tempArr of values(idx) in the has
            let tempArr = Object.values(hash)
            // find the min idx in order to delete from hash
            let delIdx = Math.min(...tempArr)
            delete hash[s[delIdx]]
            // move left pointer by the deleted idx plus one so that left is on the next char in str
            left = delIdx + 1
        }
        // calculate max 
        max = Math.max(max, right - left)
    }

    return max;
};
console.log(lengthOfLongestSubstringTwoDistinct("eceba"))
console.log(lengthOfLongestSubstringTwoDistinct("cba"))