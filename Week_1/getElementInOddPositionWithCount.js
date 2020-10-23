/*

Program to print unique elements of an string present on odd position, along with the count of those elements in the entire string
i.e abbloseckc - a:1,b:2,o:1,e:1,k:1

*/

function wordCount(s) {
    let hash = {}
    // collect ele in odd idx 
    for (let i = 0; i < s.length; i += 2) {
        if (hash[s[i]] !== undefined) {
            hash[s[i]] += 1
        }
        if (hash[s[i]] === undefined) {
            hash[s[i]] = 1
        }
    }

    // check even idx to see if ele exist in hash and increment count by 1
    for (let j = 1; j < s.length; j += 2) {
        if (hash[s[j]] !== undefined) {
            hash[s[j]] += 1
        }
    }
    return hash
}

// console.log(wordCount('abbloseckc'))