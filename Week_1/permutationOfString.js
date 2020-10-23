/* 

Write a  program to print all permutations of a given String. For example, if given String is "GOD" then your program should print all 6 permutations of this string, e.g. "GOD," "OGD," "DOG," "GDO," "ODG," and "DGO." 

*/

function permutation(s) {
    // edge case
    if (!s || typeof s !== 'string') return
    let result = [];
    // to return if there is only one char in str or to return for recursion
    if (s.length < 2) {
        result.push(s)
        return result
    }

    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        // used to skip any char that has been repeated to avoid duplicates of word
        if (s.indexOf(char) != i) {
            continue
        }
        let remainingChar = s.slice(0, i) + s.slice(i + 1, s.length);
        // get word as result of permutation, called recursively
        for (let word of permutation(remainingChar)) {
            console.log(char, word)
            result.push(char + word)
        }
    }

    return result
}

console.log(permutation("GOD"))