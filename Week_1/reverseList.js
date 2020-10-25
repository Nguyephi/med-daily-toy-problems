let linkedList = require('../utils/linkList.js')

// iteratively
// var reverseList = function (head) {
//     let prev = null;
//     let curr = head;

//     while (curr !== null) {
//         let temp = curr.next;
//         curr.next = prev;
//         prev = curr;
//         curr = temp
//     }

//     return prev
// };

// recursively
var reverseList = function (head) {
    if (head === null || head.next === null) return head;
    let temp = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return temp
};

console.log(reverseList(linkedList))