
let linkedList = require('../utils/linkList.js')

var swapPairs = function (head) {
    // base case
    if (head === null || head.next === null) return head;

    // get the first and second node of linkedList
    let firstNode = head;
    let secondNode = head.next;

    // I want the first node to be swapped with the second node, while calling it recursively to get the swapped list of subsequent nodes
    firstNode.next = swapPairs(secondNode.next);
    // Now swap the second node of each pairs with the first node
    secondNode.next = firstNode;

    // by returning the second node every time it returns it is returning the swapped pairs until it reaches the first pair
    return secondNode
};

console.log(swapPairs(linkedList))