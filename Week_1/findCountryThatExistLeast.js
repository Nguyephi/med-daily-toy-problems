/*

Write a function that given a list of countries, returns the country(s) that occur the least times
i.e - ["Argentina", "Cuba", "Chile", "Argentina"] -> ["Cuba", "Chile"]

*/

function findCountryThatExistLeast(arr) {
    let hash = {};
    let result = []
    // create a hash to count how many times the country exist
    for (let i = 0; i < arr.length; i++) {
        if (hash[arr[i]] !== undefined) {
            hash[arr[i]] += 1
        } else if (hash[arr[i]] === undefined) {
            hash[arr[i]] = 1
        }
    }
    // create a temp arr with every countries count
    let tempArr = Object.values(hash)
    // get the min number in tempArr
    let min = Math.min(...tempArr)
    // use min to push countries with the min amount to result
    for (let country in hash) {
        if (hash[country] === min) {
            result.push(country)
        }
    }
    return result
}

// console.log(findCountryThatExistLeast(["Argentina", "Cuba", "Chile", "Argentina"]))